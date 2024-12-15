import { ApiClient } from '../../src/services/api-client.service';
import { PaymentService } from '../../src/services/payment.service';

describe('PaymentService', () => {
	let paymentService: PaymentService;
	let mockApiClient: jest.Mocked<ApiClient>;

	beforeEach(() => {
		mockApiClient = {
			get: jest.fn(),
			post: jest.fn(),
			put: jest.fn(),
			delete: jest.fn(),
		} as any;

		paymentService = new PaymentService(mockApiClient);
	});

	describe('getPaymentsBanksIntegration', () => {
		it('should call get with correct endpoint', async () => {
			await paymentService.getPaymentsBanksIntegration();
			expect(mockApiClient.get).toHaveBeenCalledWith('/api/v1.0/payments/bank/integrations');
		});
	});

	describe('getBankById', () => {
		it('should call get with correct endpoint and bankId', async () => {
			const bankId = '123';
			await paymentService.getBankById(bankId);
			expect(mockApiClient.get).toHaveBeenCalledWith(`/api/v1.0/payments/bank/${bankId}`);
		});
	});
});
