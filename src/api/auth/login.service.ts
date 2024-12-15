import axios from 'axios';

interface LoginRequest {
	username: string;
	password: string;
}

interface LoginResponse {
	accessToken: string;
	tenantId: string;
	baseUrl: string;
}

interface ApiResponse {
	code: number;
	message: string | null;
	isError: boolean;
	data: {
		accessToken: string;
		tenantId: string;
		baseUrl: string;
		[key: string]: any; // Diğer bilgileri de içerir.
	};
}

export class LoginService {
	private apiKey: string;
	private baseURL: string;

	constructor(apiKey: string, baseURL: string) {
		this.apiKey = apiKey;
		this.baseURL = baseURL;
	}

	async login(credentials: LoginRequest): Promise<LoginResponse> {
		try {
			const response = await axios.post<ApiResponse>(`${this.baseURL}/api/v1.0/user/integrationLogin`, credentials, {
				headers: {
					ApiKey: this.apiKey,
					'Content-Type': 'application/json',
				},
			});

			if (response.data.isError) {
				throw new Error(response.data.message || 'Login failed');
			}

			const { accessToken, tenantId, baseUrl } = response.data.data;

			return { accessToken, tenantId, baseUrl };
		} catch (error) {
			console.error('Login error:', error);
			throw new Error('Unable to login');
		}
	}
}
