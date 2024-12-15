import { ApiClient } from './services/api-client.service';
import { EInvoiceService } from './services/einvoice.service';
import { FirmService } from './services/firm.service';
import { LoginService } from './services/login.service';
import { MasterService } from './services/master.service';
import { PaymentService } from './services/payment.service';
import { ProductService } from './services/product.service';

/**
 * @class LogoApiClient
 * @description Main client class for interacting with the Logo API services.
 * Provides access to various services including payments, firms, e-invoices, products, and master data.
 */
export class LogoApiClient {
	private apiClient?: ApiClient;
	private isLoggedIn = false;

	private paymentService?: PaymentService;
	private firmService?: FirmService;
	private eInvoiceService?: EInvoiceService;
	private productService?: ProductService;
	private masterService?: MasterService;

	/**
	 * @constructor
	 * @param {string} apiKey - The API key for authentication
	 * @param {string} baseUrl - Base URL of the Logo API
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
	 * @private
	 * @async
	 * @description Ensures user is logged in before making API calls
	 * @throws {Error} If login fails
	 */
	private async ensureLogin(): Promise<void> {
		if (!this.isLoggedIn) {
			const loginService = new LoginService(this.apiKey, this.baseUrl);
			const { accessToken, tenantId, baseUrl } = await loginService.login(this.username, this.password);

			this.apiClient = new ApiClient(baseUrl, accessToken, tenantId, this.apiKey);
			this.isLoggedIn = true;
		}
	}

	/**
	 * @getter
	 * @description Access payment-related operations
	 * @returns {PaymentService} Instance of PaymentService
	 * @throws {Error} If API client is not initialized
	 */
	get payments(): PaymentService {
		if (!this.paymentService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.paymentService = new PaymentService(this.apiClient);
		}
		return this.paymentService;
	}

	/**
	 * @getter
	 * @description Access firm-related operations
	 * @returns {FirmService} Instance of FirmService
	 * @throws {Error} If API client is not initialized
	 */
	get firm(): FirmService {
		if (!this.firmService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.firmService = new FirmService(this.apiClient);
		}
		return this.firmService;
	}

	/**
	 * @getter
	 * @description Access e-invoice operations
	 * @returns {EInvoiceService} Instance of EInvoiceService
	 * @throws {Error} If API client is not initialized
	 */
	get einvoices(): EInvoiceService {
		if (!this.eInvoiceService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.eInvoiceService = new EInvoiceService(this.apiClient);
		}
		return this.eInvoiceService;
	}

	/**
	 * @getter
	 * @description Access product-related operations
	 * @returns {ProductService} Instance of ProductService
	 * @throws {Error} If API client is not initialized
	 */
	get products(): ProductService {
		if (!this.productService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.productService = new ProductService(this.apiClient);
		}
		return this.productService;
	}

	/**
	 * @getter
	 * @description Access master data operations
	 * @returns {MasterService} Instance of MasterService
	 * @throws {Error} If API client is not initialized
	 */
	get master(): MasterService {
		if (!this.masterService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.masterService = new MasterService(this.apiClient);
		}
		return this.masterService;
	}

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
