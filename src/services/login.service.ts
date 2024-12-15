import axios from 'axios';
import { USER_USERS_ENDPOINTS } from '../constants';

/**
 * Interface representing the structure of login response from the API
 * @interface LoginResponse
 * @property {string} accessToken - JWT token for authentication
 * @property {string} tenantId - Unique identifier for the tenant
 * @property {string} baseUrl - Base URL for subsequent API calls
 */
interface LoginResponse {
	accessToken: string;
	tenantId: string;
	baseUrl: string;
}

/**
 * Service class handling authentication and login operations
 * @class LoginService
 */
export class LoginService {
	/**
	 * Creates an instance of LoginService
	 * @constructor
	 * @param {string} apiKey - API key for authentication
	 * @param {string} baseUrl - Base URL of the API endpoint
	 */
	constructor(
		private apiKey: string,
		private baseUrl: string,
	) {}

	/**
	 * Authenticates user with provided credentials
	 * @async
	 * @param {string} username - User's username or email
	 * @param {string} password - User's password
	 * @returns {Promise<LoginResponse>} Object containing access token, tenant ID and base URL
	 * @throws {Error} Throws error if login fails or if API returns an error
	 * @example
	 * const loginService = new LoginService('api-key', 'https://api.example.com');
	 * const response = await loginService.login('username', 'password');
	 */
	async login(username: string, password: string): Promise<LoginResponse> {
		const response = await axios.post(
			`${this.baseUrl}${USER_USERS_ENDPOINTS.POST_USER_INTEGRATIONLOGIN}`,
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
