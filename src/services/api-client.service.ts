import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { NilveraApiError } from '../constants/errors/nilvera-api.error';

interface NilveraErrorResponse {
	message: string;
	code?: string;
	[key: string]: any;
}

interface NilveraResponse<T> {
	data: T;
	curlCommand?: string;
}

interface RetryConfig {
	maxRetries: number;
	retryDelay: number;
	retryableStatuses: number[];
}

const DEFAULT_RETRY_CONFIG: RetryConfig = {
	maxRetries: 3,
	retryDelay: 1000, // 1 second
	retryableStatuses: [408, 429, 500, 502, 503, 504] // Common retryable status codes
};

type ApiResponse<T> = {
	data: T;
	curlCommand: string;
};

/**
 * @class ApiClient
 * @description A client for making HTTP requests with automatic token, API key handling
 */
export class ApiClient {
	/** @private The axios instance used for making HTTP requests */
	private client: AxiosInstance;
	private lastCurlCommand: string = '';
	private retryConfig: RetryConfig;

	/**
	 * @constructor
	 * @param {string} baseUrl - The base URL for all API requests
	 * @param {string} apiKey - The API key for authentication
	 * @param {RetryConfig} [retryConfig] - Optional retry configuration
	 */
	constructor(
		baseUrl: string,
		private apiKey: string,
		retryConfig?: Partial<RetryConfig>
	) {
		this.retryConfig = { ...DEFAULT_RETRY_CONFIG, ...retryConfig };
		this.client = axios.create({
			baseURL: baseUrl,
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${apiKey}`,
			},
		});

		this.setupInterceptors();
	}

	/**
	 * @private
	 * @method sleep
	 * @description Utility method to pause execution
	 */
	private sleep(ms: number): Promise<void> {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	/**
	 * @private
	 * @method shouldRetry
	 * @description Determines if a request should be retried based on the error
	 */
	private shouldRetry(error: AxiosError, attemptNumber: number): boolean {
		if (attemptNumber >= this.retryConfig.maxRetries) {
			return false;
		}

		if (!error.response) {
			// Network errors should be retried
			return true;
		}

		return this.retryConfig.retryableStatuses.includes(error.response.status);
	}

	/**
	 * @private
	 * @method executeWithRetry
	 * @description Executes a request with retry logic
	 */
	private async executeWithRetry<T>(
		operation: () => Promise<ApiResponse<T>>,
		operationName: string
	): Promise<ApiResponse<T>> {
		let lastError: AxiosError | null = null;
		let attempt = 1;

		while (attempt <= this.retryConfig.maxRetries) {
			try {
				return await operation();
			} catch (error) {
				if (error instanceof NilveraApiError) {
					throw error;
				}

				lastError = error as AxiosError;

				if (!this.shouldRetry(lastError, attempt)) {
					break;
				}

				console.log(`Attempt ${attempt} failed for ${operationName}. Retrying in ${this.retryConfig.retryDelay}ms...`);
				await this.sleep(this.retryConfig.retryDelay);
				attempt++;
			}
		}

		if (lastError) {
			console.log(`All retry attempts failed for ${operationName}`);
			throw this.handleAxiosError(lastError as AxiosError<NilveraErrorResponse>);
		}

		throw new Error('Unexpected error occurred');
	}

	/**
	 * @private
	 * @method handleAxiosError
	 * @description Handles Axios errors and converts them to NilveraApiError
	 */
	private handleAxiosError(error: AxiosError<NilveraErrorResponse>): never {
		if (error.response) {
			// Server responded with error status
			const { data, status, config } = error.response;
			throw new NilveraApiError(
				data?.message || error.message,
				status,
				data?.code,
				data,
				config?.url,
				config?.data ? JSON.parse(config.data as string) : undefined,
				this.lastCurlCommand
			);
		} else if (error.request) {
			// Request was made but no response received
			throw new NilveraApiError(
				'No response received from server',
				0,
				'NO_RESPONSE',
				error.request,
				undefined,
				undefined,
				this.lastCurlCommand
			);
		} else {
			// Error in request configuration
			throw new NilveraApiError(
				error.message,
				0,
				'REQUEST_ERROR',
				undefined,
				undefined,
				undefined,
				this.lastCurlCommand
			);
		}
	}

	/**
	 * @private
	 * @method generateCurlCommand
	 * @description Generates a curl command from the request configuration
	 */
	private generateCurlCommand(config: InternalAxiosRequestConfig): string {
		const method = config.method?.toUpperCase();
		const url = `${config.baseURL}${config.url}`;
		const headers = {
			...config.headers,
			Authorization: `Bearer ${this.apiKey}`,
		};
		const data = config.data ? JSON.stringify(config.data, null, 4) : null;

		let curl = `curl --location --request ${method} '${url}' \\`;
		Object.entries(headers).forEach(([key, value]) => {
			curl += `\n--header '${key}: ${value}' \\`;
		});
		if (data) {
			curl += `\n--data-raw '${data}'`;
		}

		return curl;
	}

	/**
	 * @private
	 * @method setupInterceptors
	 * @description Configures request interceptors for authentication headers and curl command generation
	 */
	private setupInterceptors() {
		this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
			const headers = {
				...config.headers,
				Authorization: `Bearer ${this.apiKey}`,
			};

			Object.entries(headers).forEach(([key, value]) => {
				config.headers.set(key, value as string);
			});

			this.lastCurlCommand = this.generateCurlCommand(config);
			console.log('Request Curl Command:', this.lastCurlCommand);

			return config;
		});

		this.client.interceptors.response.use(
			(response: AxiosResponse) => {
				console.log('Response Status:', response.status);
				return {
					...response,
					data: {
						data: response.data,
						curlCommand: this.lastCurlCommand
					}
				};
			},
			error => this.handleAxiosError(error)
		);
	}

	/**
	 * @method get
	 * @description Performs a GET request to the specified URL with retry mechanism
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {Record<string, any>} [params] - Optional query parameters
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<ApiResponse<T>>} The response data with curl command
	 */
	async get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.executeWithRetry(
			async () => {
				const response = await this.client.get<T>(url, { params, ...config });
				return response.data as ApiResponse<T>;
			},
			`GET ${url}`
		);
	}

	/**
	 * @method post
	 * @description Performs a POST request to the specified URL with retry mechanism
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {any} [data] - The request body
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<ApiResponse<T>>} The response data with curl command
	 */
	async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.executeWithRetry(
			async () => {
				const response = await this.client.post<T>(url, data, config);
				return response.data as ApiResponse<T>;
			},
			`POST ${url}`
		);
	}

	/**
	 * @method put
	 * @description Performs a PUT request to the specified URL with retry mechanism
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {any} [data] - The request body
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<ApiResponse<T>>} The response data with curl command
	 */
	async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.executeWithRetry(
			async () => {
				const response = await this.client.put<T>(url, data, config);
				return response.data as ApiResponse<T>;
			},
			`PUT ${url}`
		);
	}

	/**
	 * @method delete
	 * @description Performs a DELETE request to the specified URL with retry mechanism
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {any} [data] - Optional request body
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<ApiResponse<T>>} The response data with curl command
	 */
	async delete<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
		return this.executeWithRetry(
			async () => {
				const response = await this.client.delete<T>(url, { data, ...config });
				return response.data as ApiResponse<T>;
			},
			`DELETE ${url}`
		);
	}
}
