import axios, { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

export class LogoApiClient {
	private client: AxiosInstance;

	constructor(baseUrl: string, accessToken: string, tenantId: string, apiKey: string) {
		const headerConfigs = {
			authorization: `Bearer ${accessToken}`,
			apiKey: apiKey,
			tenantId: tenantId,
			'Content-Type': 'application/json',
		};

		// console.log('headerConfigs', headerConfigs);

		this.client = axios.create({
			baseURL: baseUrl,
			headers: headerConfigs,
		});

		this.setupInterceptors();
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

			// console.log(`Generated Curl Command:\n${curl}\n`);
			return config;
		});
	}

	async get<T>(endpoint: string, params?: any): Promise<T> {
		const response = await this.client.get(endpoint, { params });
		return response.data;
	}

	async post<T>(endpoint: string, data: any): Promise<T> {
		const response = await this.client.post(endpoint, data);
		return response.data;
	}
}
