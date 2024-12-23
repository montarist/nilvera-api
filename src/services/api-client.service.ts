import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

/**
 * @class ApiClient
 * @description A client for making HTTP requests with automatic token, API key handling
 */
export class ApiClient {
	/** @private The axios instance used for making HTTP requests */
	private client: AxiosInstance;

	/**
	 * @constructor
	 * @param {string} baseUrl - The base URL for all API requests
	 * @param {string} apiKey - The API key for authentication
	 */
	constructor(
		baseUrl: string,
		private apiKey: string,
	) {
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
	 * @method setupInterceptors
	 * @description Configures request interceptors for authentication headers and curl command generation
	 */
	private setupInterceptors() {
		this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
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

			Object.entries(headers).forEach(([key, value]) => {
				config.headers.set(key, value as string);
			});

			return config;
		});
	}

	/**
	 * @method get
	 * @description Performs a GET request to the specified URL
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {Record<string, any>} [params] - Optional query parameters
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<T>} The response data
	 */
	async get<T>(url: string, params?: Record<string, any>, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.client.get<T>(url, { params, ...config });
		return response.data;
	}

	/**
	 * @method post
	 * @description Performs a POST request to the specified URL
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {any} [data] - The request body
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<T>} The response data
	 */
	async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.client.post<T>(url, data, config);
		return response.data;
	}

	/**
	 * @method put
	 * @description Performs a PUT request to the specified URL
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {any} [data] - The request body
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<T>} The response data
	 */
	async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.client.put<T>(url, data, config);
		return response.data;
	}

	/**
	 * @method delete
	 * @description Performs a DELETE request to the specified URL
	 * @template T - The expected response data type
	 * @param {string} url - The endpoint URL
	 * @param {any} [data] - Optional request body
	 * @param {AxiosRequestConfig} [config] - Optional Axios request configuration
	 * @returns {Promise<T>} The response data
	 */
	async delete<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
		const response = await this.client.delete<T>(url, { data, ...config });
		return response.data;
	}
}
