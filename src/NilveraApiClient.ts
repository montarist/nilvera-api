import { ApiClient, DraftEInvoiceService, EArchiveService, GeneralService, OldInvoiceService } from './services';

/**
 * @class NilveraApiClient
 * @description Main client class for interacting with the Nilvera API services.
 * Provides access to various services including payments, firms, e-invoices, products, and master data.
 */
export class NilveraApiClient {
	private apiClient?: ApiClient;
	private draftEInvoiceService?: DraftEInvoiceService;
	private earchiveService?: EArchiveService;
	private oldInvoiceService?: OldInvoiceService;
	private generalService?: GeneralService;

	/**
	 * @constructor
	 * @param {string} baseUrl - Base URL of the Nilvera API
	 * @param {string} apiKey - The API key for authentication
	 */
	constructor(baseUrl: string, apiKey: string) {
		this.apiClient = new ApiClient(baseUrl, apiKey);
	}

	/**
	 * @getter
	 * @description Access master data operations
	 * @returns {DraftEInvoiceService} Instance of DraftEInvoiceService
	 * @throws {Error} If API client is not initialized
	 */
	get draftEInvoice(): DraftEInvoiceService {
		if (!this.draftEInvoiceService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.draftEInvoiceService = new DraftEInvoiceService(this.apiClient);
		}
		return this.draftEInvoiceService;
	}

	/**
	 * @getter
	 * @description Access master data operations
	 * @returns {EArchiveService} Instance of EArchiveService
	 * @throws {Error} If API client is not initialized
	 */
	get earchive(): EArchiveService {
		if (!this.earchiveService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.earchiveService = new EArchiveService(this.apiClient);
		}
		return this.earchiveService;
	}

	/**
	 * @getter
	 * @description Access master data operations
	 * @returns {OldInvoiceService} Instance of OldInvoiceService
	 * @throws {Error} If API client is not initialized
	 */
	get oldInvoice(): OldInvoiceService {
		if (!this.oldInvoiceService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.oldInvoiceService = new OldInvoiceService(this.apiClient);
		}
		return this.oldInvoiceService;
	}

	/**
	 * @getter
	 * @description Access master data operations
	 * @returns {GeneralService} Instance of GeneralService
	 * @throws {Error} If API client is not initialized
	 */
	get general(): GeneralService {
		if (!this.generalService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.generalService = new GeneralService(this.apiClient);
		}
		return this.generalService;
	}
}
