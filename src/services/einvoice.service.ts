import { INTEGRATIONCONTROLLER_INVOICES_ENDPOINTS, INVOICES_ENDPOINTS } from '../constants';
import { EArchivePortalInvoice, InternetSalesInvoiceRequest, InvoiceRequest } from '../constants/types/eInvoice.types';
import { BaseService } from './base.service';

/**
 * Service class for handling electronic invoice operations
 * @extends BaseService
 */
export class EInvoiceService extends BaseService {
	/**
	 * Creates or updates an e-invoice
	 * @param {InvoiceRequest} request - The invoice request object containing invoice details
	 * @returns {Promise<any>} Promise object representing the API response
	 * @throws {Error} If the API request fails
	 * @description This method handles the creation and updating of electronic invoices through the integration controller
	 */
	async createOrUpdateEFaturaInvoice(request: InvoiceRequest): Promise<any> {
		return this.apiClient.post(INTEGRATIONCONTROLLER_INVOICES_ENDPOINTS.POST_INVOICES_INTEGRATIONINVOICES, request);
	}

	/**
	 * Creates or updates an e-archive internet sales invoice
	 * @param {InternetSalesInvoiceRequest} request - The internet sales invoice request object
	 * @returns {Promise<any>} Promise object representing the API response
	 * @throws {Error} If the API request fails
	 * @description This method handles the creation and updating of e-archive internet sales invoices
	 */
	async createOrUpdateInternetSalesInvoice(request: InternetSalesInvoiceRequest): Promise<any> {
		return this.apiClient.post(INTEGRATIONCONTROLLER_INVOICES_ENDPOINTS.POST_INVOICES_INTEGRATIONINVOICES, request);
	}

	/**
	 * Creates or updates an e-archive portal invoice
	 * @param {EArchivePortalInvoiceRequest} request - The e-archive portal invoice request object
	 * @returns {Promise<any>} Promise object representing the API response
	 * @throws {Error} If the API request fails
	 * @description This method handles the creation and updating of e-archive portal invoices
	 */
	async createOrUpdateEArchivePortalInvoice(request: EArchivePortalInvoice): Promise<any> {
		return this.apiClient.post(INTEGRATIONCONTROLLER_INVOICES_ENDPOINTS.POST_INVOICES_INTEGRATIONINVOICES, request);
	}

	/**
	 * Deletes multiple invoices by their IDs
	 * @param {number[]} ids - Array of invoice IDs to be deleted
	 * @returns {Promise<void>} Promise that resolves when the deletion is complete
	 * @throws {Error} If no IDs are provided or if the API request fails
	 * @description Performs a bulk deletion of invoices based on the provided IDs.
	 * The IDs are joined into a comma-separated string for the query parameter.
	 */
	async deleteInvoices(ids: number[]): Promise<void> {
		if (!ids || ids.length === 0) {
			throw new Error('At least one invoice ID must be provided to delete.');
		}

		const queryParams = ids.join(',');
		const url = `${INVOICES_ENDPOINTS.DELETE_INVOICES}?Ids=${queryParams}`;
		await this.apiClient.delete(url);
	}
}
