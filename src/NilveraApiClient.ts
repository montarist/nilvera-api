import { ApiClient } from './services/api-client.service';

/**
 * @class NilveraApiClient
 * @description Main client class for interacting with the Nilvera API services.
 * Provides access to various services including payments, firms, e-invoices, products, and master data.
 */
export class NilveraApiClient {
	private apiClient?: ApiClient;
	private isLoggedIn = false;

	/**
	 * @constructor
	 * @param {string} apiKey - The API key for authentication
	 * @param {string} baseUrl - Base URL of the Nilvera API
	 * @param {string} username - Username for authentication
	 * @param {string} password - Password for authentication
	 */
	constructor(
		private apiKey: string,
		private baseUrl: string,
		private username: string,
		private password: string,
	) {}

	/**
	 * @async
	 * @description Initializes the API client by performing login
	 * @returns {Promise<void>}
	 * @throws {Error} If initialization fails
	 */
	async initialize(): Promise<void> {
		await this.ensureLogin();
	}
}
