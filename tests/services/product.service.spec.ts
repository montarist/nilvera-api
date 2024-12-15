import { ApiClient } from '../../src/services/api-client.service';
import { ProductService } from '../../src/services/product.service';

describe('ProductService', () => {
	let productService: ProductService;
	let mockApiClient: jest.Mocked<ApiClient>;

	beforeEach(() => {
		mockApiClient = {
			get: jest.fn(),
			post: jest.fn(),
			put: jest.fn(),
			delete: jest.fn(),
		} as any;

		productService = new ProductService(mockApiClient);
	});

	describe('getProducts', () => {
		it('should call post with correct endpoint and request', async () => {
			const request = { page: 1, pageSize: 10 };
			await productService.getProducts(request);
			expect(mockApiClient.post).toHaveBeenCalledWith('/api/v1.0/products/products', request);
		});
	});

	describe('createOrUpdateProduct', () => {
		it('should call put with correct endpoint and request', async () => {
			const request = { name: 'Test Product', price: 100 };
			await productService.createOrUpdateProduct(request);
			expect(mockApiClient.put).toHaveBeenCalledWith('/api/v1.0/products', request);
		});
	});
});
