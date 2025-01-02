import { EINVOICE_ENDPOINTS } from '../constants/endpoints/einvoice.endpoints';
import {
	CreateBulkDraftRequest,
	CreateDraftRequest,
	CreateDraftResponse,
	CreateEInvoiceModelRequest,
	DraftConfirmRequest,
	DraftModelResponse,
	DraftRequest,
	DraftResponse,
	EditAndSendDraftRequest,
	EditAndSendDraftResponse,
	ExportType,
	OperationType,
	TagInfo
} from '../constants/types';
import { ApiResponse } from '../types';
import { BaseService } from './base.service';

/**
 * EInvoiceService
 * Service for managing draft e-invoice operations.
 */
export class EInvoiceService extends BaseService {
	/**
	 * Lists draft invoices by sending a request to the API.
	 * @param {DraftRequest} params - Query parameters
	 * @returns {Promise<ApiResponse<DraftResponse>>} - Draft invoice response with curl command
	 */
	async listDrafts(params?: DraftRequest): Promise<ApiResponse<DraftResponse>> {
		return await this.apiClient.get<DraftResponse>(EINVOICE_ENDPOINTS.DRAFT.LIST, params);
	}

	/**
	 * Sends a request to the API to delete draft invoices.
	 * @param {string[]} uuids - List of UUIDs of draft invoices to be deleted
	 * @returns {Promise<ApiResponse<boolean>>} - Operation result with curl command
	 */
	async deleteDrafts(uuids: string[]): Promise<ApiResponse<boolean>> {
		return await this.apiClient.delete<boolean>(EINVOICE_ENDPOINTS.DRAFT.DELETE, {
			data: uuids,
		});
	}

	/**
	 * Downloads the HTML format of the draft.
	 * @param {string} uuid - UUID of the draft invoice to get HTML format
	 * @returns {Promise<ApiResponse<string>>} - HTML content of the draft invoice with curl command
	 */
	async getDraftHtml(uuid: string): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.HTML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Downloads the PDF format of the draft.
	 * @param {string} uuid - UUID of the draft invoice to get PDF format
	 * @returns {Promise<ApiResponse<Blob>>} - PDF content of the draft invoice with curl command
	 */
	async getDraftPdf(uuid: string): Promise<ApiResponse<Blob>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.PDF(uuid);
		return await this.apiClient.get<Blob>(url, undefined, { responseType: 'blob' });
	}

	/**
	 * Downloads the XML format of the draft.
	 * @param {string} uuid - UUID of the draft invoice to get XML format
	 * @returns {Promise<ApiResponse<string>>} - XML content of the draft invoice with curl command
	 */
	async getDraftXml(uuid: string): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.XML(uuid);
		return await this.apiClient.get<string>(url);
	}

	/**
	 * Gets the model information of the draft.
	 * @param {string} uuid - UUID of the draft invoice to get model information
	 * @returns {Promise<ApiResponse<DraftModelResponse>>} - Model of the draft invoice with curl command
	 */
	async getDraftModel(uuid: string): Promise<ApiResponse<DraftModelResponse>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.MODEL(uuid);
		return await this.apiClient.get<DraftModelResponse>(url);
	}

	/**
	 * Assigns tags to a draft invoice.
	 * @param {string} documentUUID - UUID of the draft invoice to assign tags
	 * @param {string[]} tagUUIDs - List of tag UUIDs to be assigned
	 * @returns {Promise<ApiResponse<boolean>>} - Operation result with curl command
	 */
	async assignTagToDraft(documentUUID: string, tagUUIDs: string[]): Promise<ApiResponse<boolean>> {
		const data = {
			DocumentUUID: documentUUID,
			Tags: tagUUIDs,
		};

		const url = EINVOICE_ENDPOINTS.DRAFT.ASSIGN_TAGS;
		return await this.apiClient.put<boolean>(url, data);
	}

	/**
	 * Gets the tag information of a draft invoice.
	 * @param {string} documentUUID - UUID of the draft invoice to get tag information
	 * @returns {Promise<ApiResponse<TagInfo[]>>} - List of tag information with curl command
	 */
	async getDraftTags(documentUUID: string): Promise<ApiResponse<TagInfo[]>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.GET_TAGS(documentUUID);
		return await this.apiClient.get<TagInfo[]>(url);
	}

	/**
	 * Exports draft invoices in bulk.
	 * @param {string[]} uuids - List of UUIDs of draft invoices to be exported
	 * @param {ExportType} fileType - Requested file type
	 * @returns {Promise<ApiResponse<string>>} - Exported file URL with curl command
	 */
	async exportDrafts(uuids: string[], fileType: ExportType): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.EXPORT(fileType);
		return await this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Assigns new status to draft invoices.
	 * @param {string[]} uuids - List of UUIDs of draft invoices to assign status
	 * @param {OperationType} operationType - New operation type
	 * @returns {Promise<ApiResponse<boolean>>} - Operation result with curl command
	 */
	async assignNewStatusToDrafts(uuids: string[], operationType: OperationType): Promise<ApiResponse<boolean>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.OPERATION(operationType);
		return await this.apiClient.put<boolean>(url, uuids);
	}

	/**
	 * Confirms and sends draft invoices.
	 * @param {DraftConfirmRequest[]} drafts - Information of draft invoices to be sent
	 * @returns {Promise<ApiResponse<string[]>>} - Response in case of success with curl command
	 */
	async confirmAndSendDrafts(drafts: DraftConfirmRequest[]): Promise<ApiResponse<string[]>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.CONFIRM_AND_SEND;
		return await this.apiClient.post<string[]>(url, drafts);
	}

	/**
	 * Edits and sends a draft.
	 * @param {EditAndSendDraftRequest} editAndSendRequest - Request containing draft information to be edited
	 * @returns {Promise<ApiResponse<EditAndSendDraftResponse>>} - Response in case of success with curl command
	 */
	async editAndSendDraft(editAndSendRequest: EditAndSendDraftRequest): Promise<ApiResponse<EditAndSendDraftResponse>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.EDIT_AND_SEND;
		return await this.apiClient.post<EditAndSendDraftResponse>(url, editAndSendRequest);
	}

	/**
	 * Creates a new draft invoice.
	 * @param {CreateDraftRequest} createDraftRequest - Draft invoice creation request
	 * @returns {Promise<ApiResponse<CreateDraftResponse>>} - Information of the created draft invoice with curl command
	 */
	async createDraft(createDraftRequest: CreateDraftRequest): Promise<ApiResponse<CreateDraftResponse>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.CREATE;
		return await this.apiClient.post<CreateDraftResponse>(url, createDraftRequest, {
			headers: {
				Accept: 'text/plain',
			},
		});
	}

	/**
	 * Creates a new invoice model.
	 * @param {CreateDraftEArchiveInvoiceRequest} createDraftRequest - Details of the draft invoice to be created
	 * @returns {Promise<ApiResponse<string>>} - UUID and invoice number of created draft invoice with curl command
	 */
	async createEInvoiceModel(createEInvoiceModelRequest: CreateEInvoiceModelRequest): Promise<ApiResponse<string>> {
		const url = EINVOICE_ENDPOINTS.SEND.MODEL;
		return await this.apiClient.post<string>(url, createEInvoiceModelRequest);
	}

	/**
	 * Creates draft invoices in bulk.
	 * @param {CreateBulkDraftRequest} createBulkDraftRequest - Request containing details of bulk draft invoices
	 * @returns {Promise<ApiResponse<string[]>>} - List of UUIDs of successfully created draft invoices with curl command
	 */
	async createBulkDraft(createBulkDraftRequest: CreateBulkDraftRequest): Promise<ApiResponse<string[]>> {
		const url = EINVOICE_ENDPOINTS.DRAFT.CREATE_BULK;
		return await this.apiClient.post<string[]>(url, createBulkDraftRequest);
	}
}
