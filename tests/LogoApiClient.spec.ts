import { LogoApiClient } from '../src/LogoApiClient';
import { ApiClient } from '../src/services/api-client.service';
import { LoginService } from '../src/services/login.service';

jest.mock('../src/services/login.service');
jest.mock('../src/services/api-client.service');

describe('LogoApiClient', () => {
	let client: LogoApiClient;
	const mockConfig = {
		apiKey: 'test-api-key',
		baseUrl: 'http://test-api.com',
		username: 'test-user',
		password: 'test-pass',
	};

	beforeEach(() => {
		client = new LogoApiClient(mockConfig.apiKey, mockConfig.baseUrl, mockConfig.username, mockConfig.password);
	});

	describe('initialize', () => {
		it('should login and setup API client successfully', async () => {
			const mockLoginResponse = {
				accessToken: 'test-token',
				tenantId: 'test-tenant',
				baseUrl: 'http://test-api.com',
			};

			(LoginService as jest.MockedClass<typeof LoginService>).prototype.login.mockResolvedValue(mockLoginResponse);

			await client.initialize();

			expect(LoginService).toHaveBeenCalledWith(mockConfig.apiKey, mockConfig.baseUrl);
			expect(ApiClient).toHaveBeenCalledWith(mockLoginResponse.baseUrl, mockLoginResponse.accessToken, mockLoginResponse.tenantId, mockConfig.apiKey);
		});

		it('should throw error if login fails', async () => {
			const errorMessage = 'Login failed';
			(LoginService as jest.MockedClass<typeof LoginService>).prototype.login.mockRejectedValue(new Error(errorMessage));

			await expect(client.initialize()).rejects.toThrow(errorMessage);
		});
	});

	describe('service getters', () => {
		beforeEach(async () => {
			const mockLoginResponse = {
				accessToken: 'test-token',
				tenantId: 'test-tenant',
				baseUrl: 'http://test-api.com',
			};
			(LoginService as jest.MockedClass<typeof LoginService>).prototype.login.mockResolvedValue(mockLoginResponse);
			await client.initialize();
		});

		it('should return payments service', () => {
			expect(client.payments).toBeDefined();
		});

		it('should return firm service', () => {
			expect(client.firm).toBeDefined();
		});

		it('should return einvoices service', () => {
			expect(client.einvoices).toBeDefined();
		});

		it('should return products service', () => {
			expect(client.products).toBeDefined();
		});

		it('should return master service', () => {
			expect(client.master).toBeDefined();
		});

		it('should throw error if accessing service before initialization', () => {
			const newClient = new LogoApiClient(mockConfig.apiKey, mockConfig.baseUrl, mockConfig.username, mockConfig.password);

			expect(() => newClient.payments).toThrow('API client not initialized');
			expect(() => newClient.firm).toThrow('API client not initialized');
			expect(() => newClient.einvoices).toThrow('API client not initialized');
			expect(() => newClient.products).toThrow('API client not initialized');
			expect(() => newClient.master).toThrow('API client not initialized');
		});
	});
});
