import { ExchangeRateResponse, GENERAL_ENDPOINTS } from '../constants';
import { BaseService } from './base.service';

/**
 * GeneralService
 * Genel işlemleri yöneten servis.
 */
export class GeneralService extends BaseService {
	/**
	 * Döviz kurlarını getirir.
	 * @returns {Promise<ExchangeRateResponse>} - Döviz kurları bilgisi
	 */
	async getExchangeRates(): Promise<ExchangeRateResponse> {
		const url = GENERAL_ENDPOINTS.EXCHANGE_RATE.GET;
		return this.apiClient.get<ExchangeRateResponse>(url);
	}

	/**
	 * Mükellefin e-fatura mükellefi olup olmadığını kontrol eder.
	 * @param {string} taxNumber - Vergi numarası
	 * @returns {Promise<boolean>} - Mükellefin e-fatura mükellefi olup olmadığı
	 */
	async checkIfGlobalCustomer(taxNumber: string): Promise<any[]> {
		const url = GENERAL_ENDPOINTS.GLOBAL_COMPANY.CHECK_BY_TAX(taxNumber);
		return this.apiClient.get<any[]>(url);
	}
}
