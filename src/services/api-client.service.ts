import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export class ApiClient {
	private client: AxiosInstance;

	constructor(
		baseUrl: string,
		private accessToken: string,
		private tenantId: string,
	) {
		this.client = axios.create({
			baseURL: baseUrl,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		// this.setupInterceptors();
	}

	setAccessToken(accessToken: string) {
		this.accessToken = accessToken;
	}

	private setupInterceptors() {
		this.client.interceptors.request.use((config: InternalAxiosRequestConfig) => {
			const method = config.method?.toUpperCase();
			const url = `${config.baseURL}${config.url}`;
			const headers = config.headers;
			const data = config.data ? JSON.stringify(config.data, null, 2) : null;

			// Curl string oluşturma
			let curl = `curl --location --request ${method} '${url}' \\`;
			Object.entries(headers || {}).forEach(([key, value]) => {
				curl += `\n--header '${key}: ${value}' \\`;
			});
			if (data) {
				curl += `\n--data-raw '${data}'`;
			}

			console.log(`Generated Curl Command:\n${curl}\n`);
			return config;
		});
	}

	async get<T>(url: string, params?: Record<string, any>): Promise<T> {
		const response = await this.client.get<T>(url, {
			params,
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				tenantId: this.tenantId,
			},
		});
		return response.data;
	}

	async post<T>(url: string, data?: any): Promise<T> {
		const response = await this.client.post<T>(url, data, {
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				tenantId: this.tenantId,
			},
		});
		return response.data;
	}

	async put<T>(url: string, data?: any): Promise<T> {
		const response = await this.client.put<T>(url, data, {
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				tenantId: this.tenantId,
			},
		});
		return response.data;
	}

	async delete<T>(url: string): Promise<T> {
		const response = await this.client.delete<T>(url, {
			headers: {
				Authorization: `Bearer ${this.accessToken}`,
				tenantId: this.tenantId,
			},
		});
		return response.data;
	}
}
