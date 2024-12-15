import { ApiClient } from '../../src/services/api-client.service';
import { EInvoiceService } from '../../src/services/einvoice.service';

describe('EInvoiceService', () => {
	let eInvoiceService: EInvoiceService;
	let mockApiClient: jest.Mocked<ApiClient>;

	beforeEach(() => {
		mockApiClient = {
			get: jest.fn(),
			post: jest.fn(),
			put: jest.fn(),
			delete: jest.fn(),
		} as any;

		eInvoiceService = new EInvoiceService(mockApiClient);
	});

	describe('deleteInvoices', () => {
		it('should throw error if no IDs provided', async () => {
			await expect(eInvoiceService.deleteInvoices([])).rejects.toThrow('At least one invoice ID must be provided to delete.');
		});

		it('should call delete with correct endpoint and query params', async () => {
			const ids = [1, 2, 3];
			await eInvoiceService.deleteInvoices(ids);
			expect(mockApiClient.delete).toHaveBeenCalledWith('/api/v1.0/invoices?Ids=1,2,3');
		});
	});
});
