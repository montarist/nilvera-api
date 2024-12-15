import { ApiClient } from './api-client.service';

/**
 * Base service class that provides common functionality for all services
 * in the application. This class serves as a foundation for other service classes
 * by managing the API client instance.
 *
 * @class BaseService
 * @abstract
 * @description Handles common service operations and maintains the API client instance
 * that will be used for making HTTP requests.
 *
 * @example
 * ```typescript
 * class UserService extends BaseService {
 *   constructor(apiClient: ApiClient) {
 *     super(apiClient);
 *   }
 * }
 * ```
 */
export class BaseService {
	protected apiClient: ApiClient;

	constructor(apiClient: ApiClient) {
		this.apiClient = apiClient;
	}
}
