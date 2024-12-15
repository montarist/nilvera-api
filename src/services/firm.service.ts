import { FIRM_ENDPOINTS, FirmRequest, FirmsRequest, FirmsResponse } from '../constants';
import { BaseService } from './base.service';

/**
 * Service class for handling firm-related operations.
 * Extends the BaseService class to utilize common service functionalities.
 * @class FirmService
 * @extends {BaseService}
 */
export class FirmService extends BaseService {
	/**
	 * Retrieves a list of firms based on the provided request parameters.
	 * @async
	 * @param {FirmsRequest} request - The request object containing filter criteria and pagination parameters
	 * @returns {Promise<FirmsResponse>} A promise that resolves to the firms response containing the list of firms
	 * @throws {Error} If the API request fails
	 */
	async getFirms(request: FirmsRequest): Promise<FirmsResponse> {
		return this.apiClient.post<FirmsResponse>(FIRM_ENDPOINTS.POST_FIRMS_FIRMS, request);
	}

	/**
	 * Retrieves detailed information about a specific firm by its ID.
	 * @async
	 * @param {number | string} id - The unique identifier of the firm
	 * @returns {Promise<any>} A promise that resolves to the firm details
	 * @throws {Error} If the API request fails or the firm is not found
	 */
	async getFirmById(id: number | string): Promise<any> {
		const endpoint = FIRM_ENDPOINTS.GET_FIRMS_ID.replace('{id}', id.toString());
		return this.apiClient.get(endpoint);
	}

	/**
	 * Creates a new firm or updates an existing one based on the provided request data.
	 * @async
	 * @param {FirmRequest} request - The request object containing the firm data to be created or updated
	 * @returns {Promise<any>} A promise that resolves to the created or updated firm data
	 * @throws {Error} If the API request fails or validation errors occur
	 */
	async createOrUpdateFirm(request: FirmRequest): Promise<any> {
		return this.apiClient.put(FIRM_ENDPOINTS.POST_FIRMS_FIRMS, request);
	}
}
