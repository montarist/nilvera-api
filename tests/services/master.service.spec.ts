import { ApiClient } from '../../src/services/api-client.service';
import { MasterService } from '../../src/services/master.service';

describe('MasterService', () => {
	let masterService: MasterService;
	let mockApiClient: jest.Mocked<ApiClient>;

	beforeEach(() => {
		mockApiClient = {
			get: jest.fn(),
			post: jest.fn(),
			put: jest.fn(),
			delete: jest.fn(),
		} as any;

		masterService = new MasterService(mockApiClient);
	});

	describe('getCountries', () => {
		it('should call post with correct endpoint and empty filters', async () => {
			await masterService.getCountries();
			expect(mockApiClient.post).toHaveBeenCalledWith('/api/v1.0/master/countries', { filters: [] });
		});
	});

	describe('getCities', () => {
		it('should call post with correct endpoint and country filter', async () => {
			const countryName = 'Turkey';
			await masterService.getCities(countryName);
			expect(mockApiClient.post).toHaveBeenCalledWith('/api/v1.0/master/cities', {
				filters: [{ columnName: 'country', operator: 'IsEqualTo', value: countryName }],
			});
		});
	});

	describe('getBankBranchesWithCode', () => {
		it('should call post with correct endpoint and bank code filter', async () => {
			const bankCode = '123';
			await masterService.getBankBranchesWithCode(bankCode);
			expect(mockApiClient.post).toHaveBeenCalledWith('/api/v1.0/master/bankbranchswithbankcode', {
				filters: [{ columnName: 'bankCode', operator: 'IsEqualTo', value: bankCode }],
			});
		});
	});
});
