/**
 * Represents a filter configuration for querying firms
 * @interface Filter
 */
export interface Filter {
	/** Column name to filter on (e.g., firmType, balance, isActive) */
	columnName: string;
	/** Numeric operator code (e.g., 3 for IsEqualTo) */
	operator: number;
	/** Filter value that can be string, number, or boolean */
	value: string | number | boolean;
}

/**
 * Defines sorting parameters for firm listings
 * @interface Sorting
 */
export interface Sorting {
	/** List type to sort by (0: Name, 1: Date) */
	listName: number;
}

/**
 * Pagination configuration for firm queries
 * @interface Paging
 */
export interface Paging {
	/** Current page number */
	currentPage: number;
	/** Number of items per page */
	pageSize: number;
}

/**
 * Configuration for Excel export operations
 * @interface ExcelExport
 */
export interface ExcelExport {
	/** Whether to enable export functionality */
	export: boolean;
	/** Optional array of column names to include in export */
	allowedColumns?: string[] | null;
	/** Whether to enable Luca export format */
	lucaExport: boolean;
}

/**
 * Complete request structure for querying firms
 * @interface FirmsRequest
 */
export interface FirmsRequest {
	/** Array of filter conditions */
	filters: Filter[];
	/** Sorting configuration */
	sorting: Sorting;
	/** Pagination settings */
	paging: Paging;
	/** Optional array of specific columns to retrieve */
	columnNames?: string[] | null;
	/** Whether to include total count in response */
	count: boolean;
	/** Excel export configuration */
	excel: ExcelExport;
}

/**
 * Response structure for firm queries
 * @interface FirmsResponse
 */
export interface FirmsResponse {
	/** Array of firm data */
	data: any[];
	/** Optional total count of records */
	count?: number;
}

/**
 * Structure for individual firm creation/update requests
 * @interface FirmRequest
 */
export interface FirmRequest {
	/** Unique identifier for the firm */
	id: number;
	/** Whether the firm is currently active */
	isActive: boolean;
	/** Optional flag to exclude VAT applications */
	notApplyVat?: boolean;
	/** Optional flag to exclude withholding tax */
	notApplyWithHolding?: boolean;
	/** Optional flag to exclude additional tax */
	notApplyAdditionalTax?: boolean;
	/** Optional firm code */
	code?: string | null;
	/** Firm type (1: Customer, 2: Supplier, 3: Both) */
	firmType: number;
	/** Optional first name for individual firms */
	firstname?: string | null;
	/** Optional last name for individual firms */
	lastname?: string | null;
	/** Optional company name */
	name?: string | null;
	/** Tax ID or personal ID number */
	taxOrPersonalId: string;
	/** Tax office name */
	taxOffice: string;
	/** Currency code */
	currency: string;
	/** Initial balance amount */
	beginningBalance: number;
	/** Initial balance date in ISO format */
	beginningBalanceDate: string;
	/** Physical address */
	address: string;
	/** Country name */
	country: string;
	/** City name */
	city: string;
	/** District/region name */
	district: string;
}

/**
 * Filter structure for master data queries
 * @interface MasterFilter
 */
export interface MasterFilter {
	/** Column name to filter on */
	columnName: string;
	/** String operator type (e.g., "IsEqualTo") */
	operator: string;
	/** Filter value */
	value: string | number;
}

/**
 * Request structure for master data queries
 * @interface MasterRequest
 */
export interface MasterRequest {
	/** Array of filter conditions */
	filters: MasterFilter[];
}

/**
 * Response structure for master data queries
 * @interface MasterResponse
 */
export interface MasterResponse {
	/** Array of master data items with ID and name */
	data: { id: string; name: string }[];
}
