import { Withholding } from './common.types';

/**
 * Interface representing filter criteria for product queries
 * @interface ProductFilter
 * @property {string} columnName - The name of the column to filter (e.g., type, category, isActive)
 * @property {string} operator - The comparison operator code (e.g., IsEqualTo: 3, In: 17)
 * @property {string | number | boolean | (string | number)[]} value - The filter value
 */
export interface ProductFilter {
	columnName: string;
	operator: string;
	value: string | number | boolean | (string | number)[];
}

/**
 * Interface for product sorting configuration
 * @interface ProductSorting
 * @property {number} [name] - Sort by name (0: Sort by name)
 * @property {number} [date] - Sort by date (1: Sort by date)
 */
export interface ProductSorting {
	name?: number;
	date?: number;
}

/**
 * Interface for pagination configuration
 * @interface ProductPaging
 * @property {number} currentPage - Current page number
 * @property {number} pageSize - Number of items per page
 */
export interface ProductPaging {
	currentPage: number;
	pageSize: number;
}

/**
 * Interface for Excel export configuration
 * @interface ProductExcelExport
 * @property {boolean} export - Whether to export to Excel
 * @property {string[] | null} [allowedColumns] - List of columns to include in export
 * @property {boolean} lucaExport - Whether to use Luca export format
 */
export interface ProductExcelExport {
	export: boolean;
	allowedColumns?: string[] | null;
	lucaExport: boolean;
}

/**
 * Interface for product list request parameters
 * @interface ProductsRequest
 * @property {ProductFilter[]} filters - Array of filter criteria
 * @property {ProductSorting} sorting - Sorting configuration
 * @property {ProductPaging} paging - Pagination configuration
 * @property {string[] | null} [columnNames] - Specific columns to retrieve
 * @property {boolean} count - Whether to include total count in response
 * @property {ProductExcelExport} excel - Excel export configuration
 */
export interface ProductsRequest {
	filters: ProductFilter[];
	sorting: ProductSorting;
	paging: ProductPaging;
	columnNames?: string[] | null;
	count: boolean;
	excel: ProductExcelExport;
}

/**
 * Interface for product list response
 * @interface ProductsResponse
 * @property {any[]} data - Array of product data
 * @property {number} [count] - Total number of records
 */
export interface ProductsResponse {
	data: any[];
	count?: number;
}

/**
 * Interface for single product request
 * @interface ProductRequest
 * @property {number} id - Product ID
 * @property {boolean} isActive - Product active status
 * @property {boolean} stockTracking - Whether stock tracking is enabled
 * @property {string} name - Product name
 * @property {string} code - Product code
 * @property {number} type - Product type (1: Product, 2: Service)
 * @property {Unit[]} units - Array of units associated with the product
 * @property {UnitSet} unitSet - Unit set configuration
 * @property {Unit} mainUnit - Primary unit of the product
 * @property {number} vatRate - VAT rate percentage
 * @property {Price[]} prices - Array of price configurations
 * @property {AdditionalTax | null} [additionalTax] - Additional tax configuration
 * @property {Withholding | null} [withholding] - Withholding tax configuration
 * @property {string} currency - Default currency code
 */
export interface ProductRequest {
	id: number;
	isActive: boolean;
	stockTracking: boolean;
	name: string;
	code: string;
	type: number;
	units: Unit[];
	unitSet: UnitSet;
	mainUnit: Unit;
	vatRate: number;
	prices: Price[];
	additionalTax?: AdditionalTax | null;
	withholding?: Withholding | null;
	currency: string;
}

/**
 * Interface representing a unit of measurement
 * @interface Unit
 * @property {number} id - Unit ID
 * @property {string} name - Unit name
 * @property {string} code - Unit code
 * @property {string} universalUnitCode - Universal unit code identifier
 */
export interface Unit {
	id: number;
	name: string;
	code: string;
	universalUnitCode: string;
}

/**
 * Interface representing a unit set configuration
 * @interface UnitSet
 * @property {number} id - Unit set ID
 * @property {string} name - Unit set name
 * @property {string} code - Unit set code
 */
export interface UnitSet {
	id: number;
	name: string;
	code: string;
}

/**
 * Interface for price configuration
 * @interface Price
 * @property {string} priceid - Price identifier
 * @property {number} type - Price type (1: Sales, 2: Purchase)
 * @property {number} price - Price amount
 * @property {string} currency - Currency code
 * @property {string} unit - Unit code
 */
export interface Price {
	priceid: string;
	type: number;
	price: number;
	currency: string;
	unit: string;
}

/**
 * Interface for additional tax configuration
 * @interface AdditionalTax
 * @property {string} code - Tax code
 * @property {string} name - Tax name
 * @property {string} type - Tax type (RATE or AMOUNT)
 * @property {number} value - Tax value
 */
export interface AdditionalTax {
	code: string;
	name: string;
	type: string;
	value: number;
}

/**
 * Interface for brand information
 * @interface Brand
 * @property {number} id - Brand ID
 * @property {string} name - Brand name
 * @property {number} type - Brand type (0: Default)
 */
export interface Brand {
	id: number;
	name: string;
	type: number;
}
