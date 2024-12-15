import { BaseService } from './base.service';

export class InvoiceService extends BaseService {
	async getInvoices(): Promise<any> {
		return this.apiClient.get('/api/v1.0/invoices');
	}
}
