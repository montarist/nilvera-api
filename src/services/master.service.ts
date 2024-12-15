import { EArchivePaymentTypesResponse, MASTER_ENDPOINTS, MasterRequest, MasterResponse } from '../constants';
import { BaseService } from './base.service';

/**
 * Service class for handling master data operations in the application
 * @extends BaseService
 */
export class MasterService extends BaseService {
	/**
	 * Retrieves a list of all countries
	 * @returns {Promise<MasterResponse>} Promise containing the list of countries
	 */
	async getCountries(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_COUNTRIES, request);
	}

	/**
	 * Retrieves cities for a specific country
	 * @param {string} countryName - The name of the country to filter cities
	 * @returns {Promise<MasterResponse>} Promise containing the list of cities
	 */
	async getCities(countryName: string): Promise<MasterResponse> {
		const request: MasterRequest = {
			filters: [{ columnName: 'country', operator: 'IsEqualTo', value: countryName }],
		};
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_CITIES, request);
	}

	/**
	 * Retrieves districts for a specific city
	 * @param {string} cityId - The ID of the city to filter districts
	 * @returns {Promise<MasterResponse>} Promise containing the list of districts
	 */
	async getDistricts(cityId: string): Promise<MasterResponse> {
		const request: MasterRequest = {
			filters: [{ columnName: 'cityId', operator: 'IsEqualTo', value: cityId }],
		};
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_DISTRICTS, request);
	}

	/**
	 * Retrieves all available unit sets
	 * @returns {Promise<MasterResponse>} Promise containing the list of unit sets
	 */
	async getUnitSets(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_UNITSETS, request);
	}

	/**
	 * Retrieves all available currencies
	 * @returns {Promise<MasterResponse>} Promise containing the list of currencies
	 */
	async getCurrencies(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_CURRENCIES, request);
	}

	/**
	 * Retrieves all available banks
	 * @returns {Promise<MasterResponse>} Promise containing the list of banks
	 */
	async getBanks(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_BANKS, request);
	}

	/**
	 * Retrieves bank branches for a specific bank code
	 * @param {string} bankCode - The code of the bank to filter branches
	 * @returns {Promise<MasterResponse>} Promise containing the list of bank branches
	 */
	async getBankBranchesWithCode(bankCode: string): Promise<MasterResponse> {
		const request: MasterRequest = {
			filters: [{ columnName: 'bankCode', operator: 'IsEqualTo', value: bankCode }],
		};
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_BANKBRANCHSWITHBANKCODE, request);
	}

	/**
	 * Retrieves all available additional taxes
	 * @returns {Promise<MasterResponse>} Promise containing the list of additional taxes
	 */
	async getAdditionalTaxes(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_ADDITIONALTAXES, request);
	}

	/**
	 * Retrieves all available VAT rates
	 * @returns {Promise<MasterResponse>} Promise containing the list of VAT rates
	 */
	async getVatRates(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_VATRATES, request);
	}

	/**
	 * Retrieves all available withholding rates
	 * @returns {Promise<MasterResponse>} Promise containing the list of withholding rates
	 */
	async getWithholdings(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_WITHHOLDINGS, request);
	}

	/**
	 * Retrieves all available brands
	 * @returns {Promise<MasterResponse>} Promise containing the list of brands
	 */
	async getBrands(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_BRANDS, request);
	}

	/**
	 * Retrieves all available stopaj codes
	 * @returns {Promise<MasterResponse>} Promise containing the list of stopaj codes
	 */
	async getStopajCodes(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_STOPAJCODES, request);
	}

	/**
	 * Retrieves all available GTip codes
	 * @returns {Promise<MasterResponse>} Promise containing the list of GTip codes
	 */
	async getGTipCodes(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_GTIPCODES, request);
	}

	/**
	 * Retrieves all available categories
	 * @returns {Promise<MasterResponse>} Promise containing the list of categories
	 */
	async getCategories(): Promise<MasterResponse> {
		const request: MasterRequest = { filters: [] };
		return this.apiClient.post<MasterResponse>(MASTER_ENDPOINTS.POST_MASTER_CATEGORIES, request);
	}

	/**
	 * Retrieves e-archive payment types using GET method
	 * @returns {Promise<EArchivePaymentTypesResponse>} Promise containing the list of e-archive payment types
	 */
	async getEArchivePaymentTypes(): Promise<EArchivePaymentTypesResponse> {
		return this.apiClient.get<EArchivePaymentTypesResponse>(MASTER_ENDPOINTS.GET_MASTER_EARCHIVEPAYMENTTYPES);
	}

	/**
	 * Retrieves filtered e-archive payment types using POST method
	 * @param {Record<string, any>} filters - Filter criteria for e-archive payment types
	 * @returns {Promise<EArchivePaymentTypesResponse>} Promise containing the filtered list of e-archive payment types
	 */
	async getListEArchivePaymentTypes(filters: Record<string, any> = {}): Promise<EArchivePaymentTypesResponse> {
		return this.apiClient.post<EArchivePaymentTypesResponse>(MASTER_ENDPOINTS.POST_MASTER_EARCHIVEPAYMENTTYPES, {
			filters,
		});
	}
}
