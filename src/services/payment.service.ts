import { BANK_PAYMENTS_ENDPOINTS } from '../constants';
import { BaseService } from './base.service';

/**
 * Service class for handling payment-related operations and bank integrations
 * @extends BaseService
 */
export class PaymentService extends BaseService {
	/**
	 * Retrieves all available bank payment integrations
	 * @async
	 * @returns {Promise<any>} A promise that resolves to the list of bank payment integrations
	 * @throws {Error} If the API request fails
	 * @example
	 * const paymentService = new PaymentService();
	 * const bankIntegrations = await paymentService.getPaymentsBanksIntegration();
	 */
	async getPaymentsBanksIntegration(): Promise<any> {
		return this.apiClient.get(BANK_PAYMENTS_ENDPOINTS.GET_PAYMENTS_BANK_INTEGRATIONS);
	}

	/**
	 * Retrieves detailed information about a specific bank by its ID
	 * @async
	 * @param {string} bankId - The unique identifier of the bank
	 * @returns {Promise<any>} A promise that resolves to the bank's detailed information
	 * @throws {Error} If the API request fails or if the bank ID is invalid
	 * @example
	 * const paymentService = new PaymentService();
	 * const bankDetails = await paymentService.getBankById('123456');
	 */
	async getBankById(bankId: string): Promise<any> {
		const endpoint = BANK_PAYMENTS_ENDPOINTS.GET_PAYMENTS_BANK_BANKID.replace('{bankId}', bankId);
		return this.apiClient.get(endpoint);
	}
}
