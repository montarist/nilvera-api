import { ExchangeRateResponse, GENERAL_ENDPOINTS } from '../constants';
import { ApiResponse } from '../types';
import { BaseService } from './base.service';

/**
 * GeneralService
 * Service for managing general operations.
 */
export class GeneralService extends BaseService {
	/**
	 * Gets exchange rates.
	 * @returns {Promise<ApiResponse<ExchangeRateResponse>>} - Exchange rates information with curl command
	 */
	async getExchangeRates(): Promise<ApiResponse<ExchangeRateResponse>> {
		const url = GENERAL_ENDPOINTS.EXCHANGE_RATE.GET;
		return await this.apiClient.get<ExchangeRateResponse>(url);
	}

	/**
	 * Checks if a taxpayer is an e-invoice taxpayer.
	 * @param {string} taxNumber - Tax number
	 * @returns {Promise<ApiResponse<any[]>>} - Information about taxpayer's e-invoice status with curl command
	 */
	async checkIfGlobalCustomer(taxNumber: string): Promise<ApiResponse<any[]>> {
		const url = GENERAL_ENDPOINTS.GLOBAL_COMPANY.CHECK_BY_TAX(taxNumber);
		return await this.apiClient.get<any[]>(url);
	}
}
