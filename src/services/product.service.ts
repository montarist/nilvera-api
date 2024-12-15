import { Brand, ProductRequest, PRODUCTS_ENDPOINTS, ProductsRequest, ProductsResponse } from '../constants';
import { BaseService } from './base.service';

export class ProductService extends BaseService {
	/**
	 * Method to retrieve the product list
	 * @param {ProductsRequest} request - Request object containing filtering and pagination parameters for the product list
	 * @returns {Promise<ProductsResponse>} Product list response
	 * @throws {Error} Throws error if API request fails
	 */
	async getProducts(request: ProductsRequest): Promise<ProductsResponse> {
		return this.apiClient.post<ProductsResponse>(PRODUCTS_ENDPOINTS.POST_PRODUCTS_PRODUCTS, request);
	}

	/**
	 * Method to create or update a product/service
	 * @param {ProductRequest} request - Request object containing product/service information
	 * @returns {Promise<any>} Operation result
	 * @throws {Error} Throws error if API request fails
	 */
	async createOrUpdateProduct(request: ProductRequest): Promise<any> {
		return this.apiClient.put(PRODUCTS_ENDPOINTS.PUT_PRODUCTS, request);
	}

	/**
	 * Method to create a new brand or update an existing one
	 * @param {Brand} brand - Object containing brand information
	 * @returns {Promise<any>} Operation result
	 * @throws {Error} Throws error if API request fails
	 * @description Creates new brand if id=0, updates existing brand if id>0
	 */
	async createOrUpdateBrand(brand: Brand): Promise<any> {
		const endpoint = brand.id === 0 ? PRODUCTS_ENDPOINTS.POST_PRODUCTS_PRODUCTS : PRODUCTS_ENDPOINTS.POST_PRODUCTS_PRODUCTS;
		return this.apiClient[brand.id === 0 ? 'post' : 'put'](endpoint, brand);
	}

	/**
	 * Method to bulk delete products or services
	 * @param {string[]} ids - Array containing IDs and type information of products/services to be deleted
	 * @returns {Promise<void>} Promise that resolves when operation is successful
	 * @throws {Error} Throws error if API request fails
	 * @example
	 * // Example usage:
	 * await deleteProducts(["123-1", "456-2"])  // Format: "id-type"
	 */
	async deleteProducts(ids: string[]): Promise<void> {
		const queryParams = ids.join(',');
		await this.apiClient.delete(`${PRODUCTS_ENDPOINTS.DELETE_PRODUCTS}?ids=${queryParams}`);
	}

	/**
	 * Method to retrieve detailed information of a specific product or service
	 * @param {number | string} id - Unique identifier of the product or service
	 * @param {number | string} type - Product/service type (1: Product, 2: Service)
	 * @returns {Promise<any>} Product/service detail information
	 * @throws {Error} Throws error if API request fails
	 * @example
	 * // Example usage:
	 * const productDetail = await getProductDetail(123, 1) // Product detail
	 * const serviceDetail = await getProductDetail(456, 2) // Service detail
	 */
	async getProductDetail(id: number | string, type: number | string): Promise<any> {
		const endpoint = PRODUCTS_ENDPOINTS.GET_PRODUCTS_ID_TYPE.replace('{id}', id.toString()).replace('{type}', type.toString());
		return this.apiClient.get(endpoint);
	}
}
