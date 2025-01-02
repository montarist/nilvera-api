import { NilveraApiClient } from '../src/NilveraApiClient';
import { ApiClient, EArchiveService, EInvoiceService, GeneralService, OldInvoiceService } from '../src/services';

describe('NilveraApiClient', () => {
	const apiKey = 'test-api-key';
	const baseUrl = 'https://api.test.com';
	let client: NilveraApiClient; // Added semicolon here

	beforeEach(() => {
		client = new NilveraApiClient(apiKey, baseUrl);
	});

	it('should initialize ApiClient correctly', () => {
		expect(client['apiClient']).toBeInstanceOf(ApiClient);
	});

	it('should return an instance of EInvoiceService', () => {
		const eInvoiceService = client.draftEInvoice;
		expect(eInvoiceService).toBeInstanceOf(EInvoiceService);
	});

	it('should return an instance of EArchiveService', () => {
		const earchiveService = client.earchive;
		expect(earchiveService).toBeInstanceOf(EArchiveService);
	});

	it('should return an instance of OldInvoiceService', () => {
		const oldInvoiceService = client.oldInvoice;
		expect(oldInvoiceService).toBeInstanceOf(OldInvoiceService);
	});

	it('should return an instance of GeneralService', () => {
		const generalService = client.general;
		expect(generalService).toBeInstanceOf(GeneralService);
	});

	it('should throw an error if API client is not initialized for EInvoiceService', () => {
		client['apiClient'] = undefined;
		expect(() => client.draftEInvoice).toThrow('API client not initialized');
	});

	it('should throw an error if API client is not initialized for EArchiveService', () => {
		client['apiClient'] = undefined;
		expect(() => client.earchive).toThrow('API client not initialized');
	});

	it('should throw an error if API client is not initialized for OldInvoiceService', () => {
		client['apiClient'] = undefined;
		expect(() => client.oldInvoice).toThrow('API client not initialized');
	});

	it('should throw an error if API client is not initialized for GeneralService', () => {
		client['apiClient'] = undefined;
		expect(() => client.general).toThrow('API client not initialized');
	});
});
