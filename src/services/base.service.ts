import { ApiClient } from './api-client.service';

export class BaseService {
	protected apiClient: ApiClient;

	constructor(apiClient: ApiClient) {
		this.apiClient = apiClient;
	}
}
