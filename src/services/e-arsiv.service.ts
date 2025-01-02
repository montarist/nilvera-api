import {
	ArchiveInvoiceModelResponse,
	CreateBulkDraftInvoiceRequest,
	CreateDraftEArchiveInvoiceRequest,
	CreateDraftEArchiveInvoiceResponse,
	CreateInvoiceModelRequest,
	DraftEArchiveInvoiceRequest,
	DraftEArchiveInvoiceResponse,
	EARCHIVE_ENDPOINTS,
	ExportType,
} from '../constants';
import { ApiResponse } from '../types';
import { BaseService } from './base.service';

/**
 * EArchiveService
 * Service for managing e-archive invoice operations.
 */
export class EArchiveService extends BaseService {
	/**
	 * Lists draft invoices.
	 * @param {DraftInvoiceRequest} params - Query parameters for listing draft invoices
	 * @returns {Promise<ApiResponse<DraftEArchiveInvoiceResponse>>} - Draft invoices response with curl command
	 */
	async listDraftInvoices(params?: DraftEArchiveInvoiceRequest): Promise<ApiResponse<DraftEArchiveInvoiceResponse>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.LIST;
		return await this.apiClient.get<DraftEArchiveInvoiceResponse>(url, params);
	}

	/**
	 * Deletes draft invoices in bulk.
	 * @param {string[]} uuids - List of UUIDs of draft invoices to be deleted
	 * @returns {Promise<ApiResponse<boolean>>} - Operation result with curl command
	 */
	async deleteDraftInvoices(uuids: string[]): Promise<ApiResponse<boolean>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.DELETE;
		return await this.apiClient.delete<boolean>(url, uuids);
	}

	/**
	 * Downloads the HTML format of the draft invoice.
	 * @param {string} uuid - UUID of the draft invoice to get HTML format
	 * @returns {Promise<ApiResponse<string>>} - HTML content of the draft invoice with curl command
	 */
	async getDraftInvoiceHtml(uuid: string): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.HTML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Downloads the PDF format of the draft invoice.
	 * @param {string} uuid - UUID of the draft invoice to get PDF format
	 * @returns {Promise<ApiResponse<string>>} - PDF content of the draft invoice (Base64 string) with curl command
	 */
	async getDraftInvoicePdf(uuid: string): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.PDF(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Downloads the XML format of the draft invoice.
	 * @param {string} uuid - UUID of the draft invoice to get XML format
	 * @returns {Promise<ApiResponse<string>>} - XML content of the draft invoice with curl command
	 */
	async getDraftInvoiceXml(uuid: string): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.XML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Gets the model information of the draft invoice.
	 * @param {string} uuid - UUID of the draft invoice to get model information
	 * @returns {Promise<ApiResponse<ArchiveInvoiceModelResponse>>} - Model of the draft invoice with curl command
	 */
	async getDraftInvoiceModel(uuid: string): Promise<ApiResponse<ArchiveInvoiceModelResponse>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.MODEL(uuid);
		return await this.apiClient.get<ArchiveInvoiceModelResponse>(url);
	}

	/**
	 * Exports draft invoices in bulk.
	 * @param {string[]} uuids - List of UUIDs of invoices to be exported
	 * @param {ExportType} fileType - Export type (Xml, Pdf, OnePagePdf)
	 * @returns {Promise<ApiResponse<string>>} - URL of exported documents with curl command
	 */
	async exportDraftInvoices(uuids: string[], fileType: ExportType): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.EXPORT(fileType);
		return await this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Confirms and sends draft invoices.
	 * @param {string[]} uuids - List of UUIDs of draft invoices to be confirmed and sent
	 * @returns {Promise<ApiResponse<string>>} - Response message with curl command
	 */
	async confirmAndSendDraftInvoices(uuids: string[]): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.CONFIRM_AND_SEND;
		return await this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Creates a new draft invoice.
	 * @param {CreateDraftInvoiceRequest} createDraftRequest - Details of the draft invoice to be created
	 * @returns {Promise<ApiResponse<CreateDraftEArchiveInvoiceResponse>>} - UUID and invoice number of created draft invoice with curl command
	 */
	async createDraftInvoice(createDraftRequest: CreateDraftEArchiveInvoiceRequest): Promise<ApiResponse<CreateDraftEArchiveInvoiceResponse>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.CREATE;
		return await this.apiClient.post<CreateDraftEArchiveInvoiceResponse>(url, createDraftRequest);
	}

	/**
	 * Creates draft invoices in bulk.
	 * @param {CreateBulkDraftInvoiceRequest} createBulkRequest - Request containing details of bulk draft invoices
	 * @returns {Promise<ApiResponse<string[]>>} - List of UUIDs of successfully created invoices with curl command
	 */
	async createBulkDraftInvoices(createBulkRequest: CreateBulkDraftInvoiceRequest): Promise<ApiResponse<string[]>> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.CREATE_BULK;
		return await this.apiClient.post<string[]>(url, createBulkRequest);
	}

	/**
	 * Creates a new invoice model.
	 * @param {CreateDraftEArchiveInvoiceRequest} createDraftRequest - Details of the draft invoice to be created
	 * @returns {Promise<ApiResponse<string>>} - UUID and invoice number of created draft invoice with curl command
	 */
	async createInvoiceModel(createInvoiceModelRequest: CreateInvoiceModelRequest): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.SEND.MODEL;
		return await this.apiClient.post<string>(url, createInvoiceModelRequest);
	}

	/**
	 * Downloads the HTML format of the invoice.
	 * @param {string} uuid - UUID of the invoice to get HTML format
	 * @returns {Promise<ApiResponse<string>>} - HTML content of the invoice with curl command
	 */
	async getInvoiceHtml(uuid: string): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.INVOICES.HTML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Downloads the PDF format of the invoice.
	 * @param {string} uuid - UUID of the invoice to get PDF format
	 * @returns {Promise<ApiResponse<Buffer>>} - PDF content of the invoice with curl command
	 */
	async getInvoicePdf(uuid: string): Promise<ApiResponse<Buffer>> {
		const url = EARCHIVE_ENDPOINTS.INVOICES.PDF(uuid);
		return await this.apiClient.get<Buffer>(url);
	}

	/**
	 * Downloads the XML format of the invoice.
	 * @param {string} uuid - UUID of the invoice to get XML format
	 * @returns {Promise<ApiResponse<string>>} - XML content of the invoice with curl command
	 */
	async getInvoiceXml(uuid: string): Promise<ApiResponse<string>> {
		const url = EARCHIVE_ENDPOINTS.INVOICES.XML(uuid);
		return await this.apiClient.get<string>(url);
	}
}
