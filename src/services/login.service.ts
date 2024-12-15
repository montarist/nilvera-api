import axios from 'axios';

interface LoginResponse {
	accessToken: string;
	tenantId: string;
	baseUrl: string;
}

export class LoginService {
	constructor(
		private apiKey: string,
		private baseUrl: string,
	) {}

	async login(username: string, password: string): Promise<LoginResponse> {
		const response = await axios.post(
			`${this.baseUrl}/api/v1.0/user/integrationLogin`,
			{
				username,
				password,
			},
			{
				headers: {
					ApiKey: this.apiKey,
					'Content-Type': 'application/json',
				},
			},
		);

		if (response.data.isError) {
			throw new Error(response.data.message || 'Login failed');
		}

		const { accessToken, tenantId, baseUrl } = response.data.data;
		return { accessToken, tenantId, baseUrl };
	}
}
