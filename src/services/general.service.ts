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
}
