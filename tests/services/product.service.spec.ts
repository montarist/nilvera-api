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
		it('should call post with correct endpoint and request body', async () => {
			const request = {
				filters: [],
				sorting: { name: 0 },
				paging: { currentPage: 1, pageSize: 10 },
				columnNames: null,
				count: true,
				excel: { export: false, allowedColumns: null, lucaExport: false },
			};

			await productService.getProducts(request);
			expect(mockApiClient.post).toHaveBeenCalledWith('/api/v1.0/products/products', request);
		});
	});

	describe('createOrUpdateProduct', () => {
		it('should call put with correct endpoint and product data', async () => {
			const request = {
				id: 0,
				isActive: true,
				stockTracking: false,
				name: 'Test Product',
				code: 'P001',
				type: 1,
				units: [{ id: 1, name: 'Unit', code: 'U01', universalUnitCode: 'UU01' }],
				unitSet: { id: 1, name: 'Unit Set', code: 'US01' },
				mainUnit: { id: 1, name: 'Unit', code: 'U01', universalUnitCode: 'UU01' },
				vatRate: 18,
				prices: [{ priceid: '0', type: 1, price: 100, currency: 'TL', unit: 'U01' }],
				additionalTax: null,
				withholding: null,
				currency: 'TL',
			};

			await productService.createOrUpdateProduct(request);
			expect(mockApiClient.put).toHaveBeenCalledWith('/api/v1.0/products', request);
		});
	});
});
