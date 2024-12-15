import { ApiClient } from './services/api-client.service';
import { InvoiceService } from './services/invoice.service';
import { LoginService } from './services/login.service';
import { PaymentService } from './services/payment.service';

export class LogoApiClient {
	private apiClient?: ApiClient;
	private isLoggedIn = false;

	private paymentService?: PaymentService;
	private invoiceService?: InvoiceService;

	constructor(
		private apiKey: string,
		private baseUrl: string,
		private username: string,
		private password: string,
	) {}

	// Login durumunu kontrol eder ve gerekirse login yapar
	private async ensureLogin() {
		if (!this.isLoggedIn) {
			const loginService = new LoginService(this.apiKey, this.baseUrl);
			const { accessToken, tenantId, baseUrl } = await loginService.login(this.username, this.password);

			this.apiClient = new ApiClient(baseUrl, accessToken, tenantId);
			this.isLoggedIn = true;
		}
	}

	// PaymentService'e erişim
	get payments(): PaymentService {
		if (!this.paymentService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.paymentService = new PaymentService(this.apiClient);
		}
		return this.paymentService;
	}

	// InvoiceService'e erişim
	get invoices(): InvoiceService {
		if (!this.invoiceService) {
			if (!this.apiClient) throw new Error('API client not initialized');
			this.invoiceService = new InvoiceService(this.apiClient);
		}
		return this.invoiceService;
	}

	// Tüm işlemleri başlatan async initializer
	async initialize() {
		await this.ensureLogin();
	}
}
