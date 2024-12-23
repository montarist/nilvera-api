import { EINVOICE_ENDPOINTS } from '../constants/endpoints/einvoice.endpoints';
import { ExportType, OldInvoiceRequest, OldInvoiceResponse, OperationType } from '../constants/types';
import { BaseService } from './base.service';

/**
 * OldInvoiceService
 * Taslak faturalarla ilgili işlemleri yöneten servis.
 */
export class OldInvoiceService extends BaseService {
	/**
	 * Eski faturaları listeler.
	 * @param {OldInvoiceRequest} params - Eski faturaları listelemek için sorgu parametreleri
	 * @returns {Promise<OldInvoiceResponse>} - Eski faturaların yanıtı
	 */
	async listOldInvoices(params?: OldInvoiceRequest): Promise<OldInvoiceResponse> {
		const url = EINVOICE_ENDPOINTS.OLD.LIST;
		return this.apiClient.get<OldInvoiceResponse>(url, params);
	}

	/**
	 * Eski faturaları yükler.
	 * @param {File} file - Yüklenecek eski faturaları içeren dosya
	 * @returns {Promise<string>} - Başarı durumunda dönen yanıt
	 */
	async uploadOldInvoices(file: File): Promise<string> {
		const url = EINVOICE_ENDPOINTS.OLD.UPLOAD;

		// FormData kullanılarak dosya gönderimi yapılır
		const formData = new FormData();
		formData.append('file', file);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		return this.apiClient.post<string>(url, formData, config);
	}

	/**
	 * Eski faturanın HTML formatını indirir.
	 * @param {string} uuid - HTML formatı istenen eski faturanın UUID'si
	 * @returns {Promise<string>} - Faturanın HTML içeriği
	 */
	async getOldInvoiceHtml(uuid: string): Promise<string> {
		const url = EINVOICE_ENDPOINTS.OLD.HTML(uuid);
		return this.apiClient.get<string>(url);
	}

	/**
	 * Eski faturanın PDF formatını indirir.
	 * @param {string} uuid - PDF formatı istenen eski faturanın UUID'si
	 * @returns {Promise<string>} - Faturanın PDF içeriği
	 */
	async getOldInvoicePdf(uuid: string): Promise<string> {
		const url = EINVOICE_ENDPOINTS.OLD.PDF(uuid);
		return this.apiClient.get<string>(url);
	}

	/**
	 * Eski faturanın XML formatını indirir.
	 * @param {string} uuid - XML formatı istenen eski faturanın UUID'si
	 * @returns {Promise<string>} - Faturanın XML içeriği
	 */
	async getOldInvoiceXml(uuid: string): Promise<string> {
		const url = EINVOICE_ENDPOINTS.OLD.XML(uuid);
		return this.apiClient.get<string>(url);
	}

	/**
	 * Eski faturaları toplu olarak dışarı aktarır.
	 * @param {string[]} uuids - Dışarı aktarılacak faturaların UUID listesi
	 * @param {OldExportType} fileType - Dışa aktarım türü (Xml, Pdf, OnePagePdf)
	 * @returns {Promise<string>} - Başarı durumunda dönen dosya URL'si
	 */
	async exportOldInvoices(uuids: string[], fileType: ExportType): Promise<string> {
		const url = EINVOICE_ENDPOINTS.OLD.EXPORT(fileType);
		return this.apiClient.post<string>(url, uuids);
	}

	/**
	 * Eski faturalara toplu olarak yeni durum atar.
	 * @param {string[]} uuids - Durum atanacak faturaların UUID listesi
	 * @param {OldOperationType} operationType - Yeni durum türü (UnPrint, Print)
	 * @returns {Promise<string[]>} - İşlem sonucunda güncellenen faturaların UUID listesi
	 */
	async assignNewStatusToOldInvoices(uuids: string[], operationType: OperationType): Promise<string[]> {
		const url = EINVOICE_ENDPOINTS.OLD.OPERATION(operationType);
		return this.apiClient.put<string[]>(url, uuids);
	}
}
