import axios, { AxiosInstance } from 'axios';

interface HttpClientConfig {
	baseURL: string;
	apiKey: string;
}

export class HttpClient {
	private client: AxiosInstance;

	constructor(config: HttpClientConfig) {
		this.client = axios.create({
			baseURL: config.baseURL,
			headers: {
				ApiKey: config.apiKey,
				'Content-Type': 'application/json',
			},
		});
	}

	async get<T>(url: string, params?: Record<string, any>): Promise<T> {
		const response = await this.client.get<T>(url, { params });
		return response.data;
	}

	async post<T>(url: string, data?: any): Promise<T> {
		const response = await this.client.post<T>(url, data);
		return response.data;
	}

	async delete<T>(url: string): Promise<T> {
		const response = await this.client.delete<T>(url);
		return response.data;
	}

	async put<T>(url: string, data?: any): Promise<T> {
		const response = await this.client.put<T>(url, data);
		return response.data;
	}
}
