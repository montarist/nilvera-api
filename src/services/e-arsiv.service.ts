import {
	ArchiveInvoiceModelResponse,
	CreateBulkDraftInvoiceRequest,
	CreateDraftEArchiveInvoiceRequest,
	CreateDraftEArchiveInvoiceResponse,
	DraftEArchiveInvoiceRequest,
	DraftEArchiveInvoiceResponse,
	EARCHIVE_ENDPOINTS,
	ExportType,
} from '../constants';
import { BaseService } from './base.service';

/**
 * EArchiveService
 * Taslak faturalarla ilgili işlemleri yöneten servis.
 */
export class EArchiveService extends BaseService {
	/**
	 * Taslak faturaları listeler.
	 * @param {DraftInvoiceRequest} params - Taslak faturaları listelemek için sorgu parametreleri
	 * @returns {Promise<DraftInvoiceResponse>} - Taslak faturaların yanıtı
	 */
	async listDraftInvoices(params?: DraftEArchiveInvoiceRequest): Promise<DraftEArchiveInvoiceResponse> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.LIST;
		return this.apiClient.get<DraftEArchiveInvoiceResponse>(url, params);
	}

	/**
	 * Taslak faturaları toplu olarak siler.
	 * @param {string[]} uuids - Silinecek taslak faturaların UUID listesi
	 * @returns {Promise<boolean>} - İşlem sonucunu belirten boolean değer
	 */
	async deleteDraftInvoices(uuids: string[]): Promise<boolean> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.DELETE;
		return this.apiClient.delete<boolean>(url, uuids);
	}

	/**
	 * Taslağın HTML formatını indirir.
	 * @param {string} uuid - HTML formatı istenen taslak faturanın UUID'si
	 * @returns {Promise<string>} - Taslak faturanın HTML içeriği
	 */
	async getDraftInvoiceHtml(uuid: string): Promise<string> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.HTML(uuid);
		return this.apiClient.get<string>(url);
	}

	/**
	 * Taslağın PDF formatını indirir.
	 * @param {string} uuid - PDF formatı istenen taslak faturanın UUID'si
	 * @returns {Promise<string>} - Taslak faturanın PDF içeriği (Base64 string)
	 */
	async getDraftInvoicePdf(uuid: string): Promise<string> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.PDF(uuid);
		return this.apiClient.get<string>(url);
	}

	/**
	 * Taslağın XML formatını indirir.
	 * @param {string} uuid - XML formatı istenen taslak faturanın UUID'si
	 * @returns {Promise<string>} - Taslak faturanın XML içeriği
	 */
	async getDraftInvoiceXml(uuid: string): Promise<string> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.XML(uuid);
		return this.apiClient.get<string>(url);
	}

	/**
	 * Taslağın modeli bilgilerini getirir.
	 * @param {string} uuid - Model bilgisi istenen taslak faturanın UUID'si
	 * @returns {Promise<ArchiveInvoiceModelResponse>} - Taslak faturanın modeli
	 */
	async getDraftInvoiceModel(uuid: string): Promise<ArchiveInvoiceModelResponse> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.MODEL(uuid);
		return this.apiClient.get<ArchiveInvoiceModelResponse>(url);
	}

	/**
	 * Taslak faturaları toplu olarak dışarı aktarır.
	 * @param {string[]} uuids - Dışarı aktarılacak faturaların UUID listesi
	 * @param {ExportType} fileType - Dışa aktarım türü (Xml, Pdf, OnePagePdf)
	 * @returns {Promise<string>} - Dışa aktarılan belgelerin URL'si
	 */
	async exportDraftInvoices(uuids: string[], fileType: ExportType): Promise<string> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.EXPORT(fileType);
		return this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Taslak faturayı onaylayıp gönderir.
	 * @param {string[]} uuids - Onaylanıp gönderilecek taslak faturaların UUID listesi
	 * @returns {Promise<string>} - İşlem sonucunda dönen mesaj
	 */
	async confirmAndSendDraftInvoices(uuids: string[]): Promise<string> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.CONFIRM_AND_SEND;
		return this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Yeni bir taslak fatura oluşturur.
	 * @param {CreateDraftInvoiceRequest} createDraftRequest - Oluşturulacak taslak fatura detayları
	 * @returns {Promise<CreateDraftInvoiceResponse>} - Oluşturulan taslak faturanın UUID ve fatura numarası
	 */
	async createDraftInvoice(createDraftRequest: CreateDraftEArchiveInvoiceRequest): Promise<CreateDraftEArchiveInvoiceResponse> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.CREATE;
		return this.apiClient.post<CreateDraftEArchiveInvoiceResponse>(url, createDraftRequest);
	}

	/**
	 * Toplu olarak taslak faturalar oluşturur.
	 * @param {CreateBulkDraftInvoiceRequest} createBulkRequest - Toplu taslak faturaların detaylarını içeren istek
	 * @returns {Promise<string[]>} - Başarı durumunda oluşturulan faturaların UUID'leri
	 */
	async createBulkDraftInvoices(createBulkRequest: CreateBulkDraftInvoiceRequest): Promise<string[]> {
		const url = EARCHIVE_ENDPOINTS.DRAFT.CREATE_BULK;
		return this.apiClient.post<string[]>(url, createBulkRequest);
	}
}
