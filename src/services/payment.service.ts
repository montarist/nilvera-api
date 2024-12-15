import { BaseService } from './base.service';

export class PaymentService extends BaseService {
	async getPayments(): Promise<any> {
		return this.apiClient.get('/api/v1.0/payments/bank/integrations');
	}
}
