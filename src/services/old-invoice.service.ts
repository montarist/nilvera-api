import { EINVOICE_ENDPOINTS } from '../constants/endpoints/einvoice.endpoints';
import { ExportType, OldInvoiceRequest, OldInvoiceResponse, OperationType } from '../constants/types';
import { ApiResponse } from '../types';
import { BaseService } from './base.service';

/**
 * OldInvoiceService
 * Service for managing old invoice operations.
 */
export class OldInvoiceService extends BaseService {
	/**
	 * Lists old invoices.
	 * @param {OldInvoiceRequest} params - Query parameters for listing old invoices
	 * @returns {Promise<ApiResponse<OldInvoiceResponse>>} - Old invoices response with curl command
	 */
	async listOldInvoices(params?: OldInvoiceRequest): Promise<ApiResponse<OldInvoiceResponse>> {
		const url = EINVOICE_ENDPOINTS.OLD.LIST;
		return await this.apiClient.get<OldInvoiceResponse>(url, params);
	}

	/**
	 * Uploads old invoices.
	 * @param {File} file - File containing old invoices to be uploaded
	 * @returns {Promise<ApiResponse<string>>} - Response message with curl command
	 */
	async uploadOldInvoices(file: File): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.OLD.UPLOAD;

		// Using FormData for file upload
		const formData = new FormData();
		formData.append('file', file);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		return await this.apiClient.post<string>(url, formData, config);
	}

	/**
	 * Downloads the HTML format of the old invoice.
	 * @param {string} uuid - UUID of the old invoice to get HTML format
	 * @returns {Promise<ApiResponse<string>>} - HTML content of the invoice with curl command
	 */
	async getOldInvoiceHtml(uuid: string): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.OLD.HTML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Downloads the PDF format of the old invoice.
	 * @param {string} uuid - UUID of the old invoice to get PDF format
	 * @returns {Promise<ApiResponse<string>>} - PDF content of the invoice with curl command
	 */
	async getOldInvoicePdf(uuid: string): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.OLD.PDF(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Downloads the XML format of the old invoice.
	 * @param {string} uuid - UUID of the old invoice to get XML format
	 * @returns {Promise<ApiResponse<string>>} - XML content of the invoice with curl command
	 */
	async getOldInvoiceXml(uuid: string): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.OLD.XML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Exports old invoices in bulk.
	 * @param {string[]} uuids - List of UUIDs of invoices to be exported
	 * @param {ExportType} fileType - Export type (Xml, Pdf, OnePagePdf)
	 * @returns {Promise<ApiResponse<string>>} - URL of exported file with curl command
	 */
	async exportOldInvoices(uuids: string[], fileType: ExportType): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.OLD.EXPORT(fileType);
		return await this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Assigns new status to old invoices in bulk.
	 * @param {string[]} uuids - List of UUIDs of invoices to assign status
	 * @param {OperationType} operationType - New operation type (UnPrint, Print)
	 * @returns {Promise<ApiResponse<string[]>>} - List of UUIDs of updated invoices with curl command
	 */
	async assignNewStatusToOldInvoices(uuids: string[], operationType: OperationType): Promise<ApiResponse<string[]>> {
		const url = EINVOICE_ENDPOINTS.OLD.OPERATION(operationType);
		return await this.apiClient.put<string[]>(url, uuids);
	}
}
