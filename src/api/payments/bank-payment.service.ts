import { HttpClient } from '../common/http-client';

interface BankTotalRequest {
	fromDate: string;
	toDate: string;
}

interface BankTotalResponse {
	totalAmount: number;
}

export class BankPaymentsService {
	private httpClient: HttpClient;

	constructor(baseURL: string, apiKey: string) {
		this.httpClient = new HttpClient({
			baseURL,
			apiKey,
		});
	}

	async getBanksTotal(request: BankTotalRequest): Promise<BankTotalResponse> {
		return this.httpClient.post<BankTotalResponse>('/api/v1.0/payments/getbankstotal', request);
	}
}
