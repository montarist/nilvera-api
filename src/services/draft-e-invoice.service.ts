import { EINVOICE_ENDPOINTS } from '../constants/endpoints/einvoice.endpoints';
import {
	CreateBulkDraftRequest,
	CreateDraftRequest,
	CreateDraftResponse,
	DraftConfirmRequest,
	DraftModelResponse,
	DraftRequest,
	DraftResponse,
	EditAndSendDraftRequest,
	EditAndSendDraftResponse,
	ExportType,
	OperationType,
	TagInfo,
} from '../constants/types';
import { BaseService } from './base.service';

export class DraftEInvoiceService extends BaseService {
	/**
	 * Taslak faturaları listelemek için API'ye istek gönderir.
	 * @param {DraftRequest} params - Sorgu parametreleri
	 * @returns {Promise<DraftResponse>} - Taslak fatura yanıtı
	 */
	async listDrafts(params?: DraftRequest): Promise<DraftResponse> {
		return this.apiClient.get<DraftResponse>(EINVOICE_ENDPOINTS.DRAFT.LIST, params);
	}

	/**
	 * Taslak faturaları silmek için API'ye istek gönderir.
	 * @param {string[]} uuids - Silinecek taslak faturaların UUID listesi
	 * @returns {Promise<boolean>} - İşlem sonucu
	 */
	async deleteDrafts(uuids: string[]): Promise<boolean> {
		return this.apiClient.delete<boolean>(EINVOICE_ENDPOINTS.DRAFT.DELETE, {
			data: uuids,
		});
	}

	/**
	 * Taslağın HTML formatını indirir.
	 * @param {string} uuid - HTML formatı istenen taslak fatura UUID'si
	 * @returns {Promise<string>} - Taslak faturanın HTML içeriği
	 */
	async getDraftHtml(uuid: string): Promise<string> {
		const url = EINVOICE_ENDPOINTS.DRAFT.HTML(uuid);
		return this.apiClient.get<string>(url);
	}
	/**
	 * Taslağın PDF formatını indirir.
	 * @param {string} uuid - PDF formatı istenen taslak fatura UUID'si
	 * @returns {Promise<Blob>} - Taslak faturanın PDF içeriği
	 */
	async getDraftPdf(uuid: string): Promise<Blob> {
		const url = EINVOICE_ENDPOINTS.DRAFT.PDF(uuid);
		return this.apiClient.get<Blob>(url, { responseType: 'blob' });
	}
	/**
	 * Taslağın XML formatını indirir.
	 * @param {string} uuid - XML formatı istenen taslak fatura UUID'si
	 * @returns {Promise<string>} - Taslak faturanın XML içeriği
	 */
	async getDraftXml(uuid: string): Promise<string> {
		const url = EINVOICE_ENDPOINTS.DRAFT.XML(uuid);
		return this.apiClient.get<string>(url);
	}
	/**
	 * Taslağın modeli bilgilerini getirir.
	 * @param {string} uuid - Model bilgisi istenen taslak fatura UUID'si
	 * @returns {Promise<DraftModelResponse>} - Taslak faturanın modeli
	 */
	async getDraftModel(uuid: string): Promise<DraftModelResponse> {
		const url = EINVOICE_ENDPOINTS.DRAFT.MODEL(uuid);
		return this.apiClient.get<DraftModelResponse>(url);
	}
	/**
	 * Taslak faturaya etiket atar.
	 * @param {string} documentUUID - Etiket atanacak taslak fatura UUID'si
	 * @param {string[]} tagUUIDs - Atanacak etiketlerin UUID listesi
	 * @returns {Promise<boolean>} - İşlem sonucu
	 */

	async assignTagToDraft(documentUUID: string, tagUUIDs: string[]): Promise<boolean> {
		const data = {
			DocumentUUID: documentUUID,
			Tags: tagUUIDs,
		};

		const url = EINVOICE_ENDPOINTS.DRAFT.ASSIGN_TAGS;
		return this.apiClient.put<boolean>(url, data);
	}

	/**
	 * Taslak faturanın etiket bilgilerini getirir.
	 * @param {string} documentUUID - Etiket bilgisi alınacak taslak fatura UUID'si
	 * @returns {Promise<TagInfo[]>} - Etiket bilgileri listesi
	 */
	async getDraftTags(documentUUID: string): Promise<TagInfo[]> {
		const url = EINVOICE_ENDPOINTS.DRAFT.GET_TAGS(documentUUID);
		return this.apiClient.get<TagInfo[]>(url);
	}

	/**
	 * Taslak faturaları toplu olarak dışa aktarır.
	 * @param {string[]} uuids - Dışa aktarılacak taslak faturaların UUID listesi
	 * @param {ExportType} fileType - İstenen dosya tipi
	 * @returns {Promise<string>} - Dışa aktarılan dosya URL'si
	 */
	async exportDrafts(uuids: string[], fileType: ExportType): Promise<string> {
		const url = EINVOICE_ENDPOINTS.DRAFT.EXPORT(fileType);
		return this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Taslak faturalar için yeni durum atar.
	 * @param {string[]} uuids - Durum atanacak taslak faturaların UUID listesi
	 * @param {OperationType} operationType - Yeni durum tipi
	 * @returns {Promise<boolean>} - İşlem sonucu
	 */
	async assignNewStatusToDrafts(uuids: string[], operationType: OperationType): Promise<boolean> {
		const url = EINVOICE_ENDPOINTS.DRAFT.OPERATION(operationType);
		return this.apiClient.put<boolean>(url, uuids);
	}

	/**
	 * Taslak faturayı onaylayıp gönderir.
	 * @param {DraftConfirmRequest[]} drafts - Gönderilecek taslak faturaların bilgileri
	 * @returns {Promise<string[]>} - Başarı durumunda dönen yanıt (ör. başarılı işlem UUID'leri)
	 */
	async confirmAndSendDrafts(drafts: DraftConfirmRequest[]): Promise<string[]> {
		const url = EINVOICE_ENDPOINTS.DRAFT.CONFIRM_AND_SEND;
		return this.apiClient.post<string[]>(url, drafts);
	}

	/**
	 * Taslağı düzenleyerek gönderir.
	 * @param {EditAndSendDraftRequest} editAndSendRequest - Düzenlenecek taslak bilgilerini içeren istek
	 * @returns {Promise<EditAndSendDraftResponse>} - Başarı durumunda dönen yanıt
	 */
	async editAndSendDraft(editAndSendRequest: EditAndSendDraftRequest): Promise<EditAndSendDraftResponse> {
		const url = EINVOICE_ENDPOINTS.DRAFT.EDIT_AND_SEND;
		return this.apiClient.post<EditAndSendDraftResponse>(url, editAndSendRequest);
	}

	/**
	 * Yeni bir taslak fatura oluşturur.
	 * @param {CreateDraftRequest} createDraftRequest - Taslak fatura oluşturma isteği
	 * @returns {Promise<CreateDraftResponse>} - Oluşturulan taslak faturanın bilgileri
	 */
	async createDraft(createDraftRequest: CreateDraftRequest): Promise<CreateDraftResponse> {
		const url = EINVOICE_ENDPOINTS.DRAFT.CREATE;

		return this.apiClient.post<CreateDraftResponse>(url, createDraftRequest, {
			headers: {
				Accept: 'text/plain',
			},
		});
	}

	/**
	 * Toplu olarak taslak faturalar oluşturur.
	 * @param {CreateBulkDraftRequest} createBulkDraftRequest - Toplu taslak faturaların detaylarını içeren istek
	 * @returns {Promise<string[]>} - Başarıyla oluşturulan taslak faturaların UUID listesi
	 */
	async createBulkDraft(createBulkDraftRequest: CreateBulkDraftRequest): Promise<string[]> {
		const url = EINVOICE_ENDPOINTS.DRAFT.CREATE_BULK;
		return this.apiClient.post<string[]>(url, createBulkDraftRequest);
	}
}
