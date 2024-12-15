import { FirmType, ItemType, Withholding } from './common.types';

/**
 * Represents a customer entity for invoice operations
 * @interface Customer
 */
export interface Customer {
	/** Optional customer code identifier */
	code?: string;
	/** Customer's full name */
	name?: string;
	/** Tax identification number or Turkish Citizen Number (TCKN) */
	tcknVkn: string;
	/** Name of the tax office where customer is registered */
	taxOffice?: string;
	/** Customer's country */
	country?: string;
	/** Customer's city */
	city?: string;
	/** Customer's district */
	district?: string;
	/** Customer's full address */
	address?: string;
	/** Flag to indicate if withholding tax should not be applied */
	notApplyWithHolding?: boolean;
	/** Indicates if the customer is an individual (true) or corporate (false) */
	isPerson: boolean;
}

/**
 * Details of a product or service
 * @interface ProductDetail
 */
export interface ProductDetail {
	/** Unique identifier code for the item */
	itemCode: string;
	/** Type of item (1: Product, 2: Service) */
	itemType: ItemType;
	/** Name of the product or service */
	name: string;
	/** VAT rate as percentage */
	vat: number;
	/** Optional withholding tax information */
	withholding?: Withholding;
}

/**
 * Detailed information for a sales invoice line item
 * @interface SalesInvoiceDetail
 */
export interface SalesInvoiceDetail {
	/** Quantity of items */
	quantity: number;
	/** Tax rate as percentage */
	taxRate: number;
	/** Unit price */
	price: number;
	/** Description of the line item */
	description: string;
	/** Product details */
	productDetail: ProductDetail;
	/** VAT exemption code if applicable */
	vatExemptionCode?: string;
	/** Stoppage code if applicable */
	stoppageCode?: string;
	/** Stoppage rate as percentage */
	stoppageRate?: number;
}

/**
 * Base interface for invoice requests
 * @interface InvoiceRequestBase
 */
export interface InvoiceRequestBase {
	/** Invoice ID (0 for new, >0 for updates) */
	id: number;
	/** Customer information */
	customer: Customer;
	/** Invoice date in ISO format */
	invoiceDate: string;
	/** Currency code (e.g., 'TL') */
	currency: string;
	/** Exchange rate for the currency */
	exchangeRate: number;
	/** Optional invoice description */
	description?: string;
	/** Array of sales invoice line items */
	salesInvoiceDetails: SalesInvoiceDetail[];
}

/**
 * Standard invoice request extending the base
 * @interface InvoiceRequest
 * @extends {InvoiceRequestBase}
 */
export interface InvoiceRequest extends InvoiceRequestBase {
	/** Optional e-government invoice details */
	eGovernmentInvoice?: Partial<EGovernmentInvoice>;
}

/**
 * Internet sales specific invoice request
 * @interface InternetSalesInvoiceRequest
 * @extends {InvoiceRequestBase}
 */
export interface InternetSalesInvoiceRequest extends InvoiceRequestBase {
	/** Sending date in ISO format */
	sendingDate: string;
	/** Shipment agent information */
	shipmentAgentItem: ShipmentAgent;
	/** Required e-government invoice details */
	eGovernmentInvoice: EGovernmentInvoice;
}

/**
 * E-Government invoice details
 * @interface EGovernmentInvoice
 */
export interface EGovernmentInvoice {
	/** Invoice type (3: e-Archive Internet Invoice) */
	invoiceTypeForEinvoice: number;
	/** Payment type from /api/v1.0/master/eArchivePaymentTypes */
	eArchivePaymentType: number;
	/** Payment date in ISO format */
	eArchivePaymentDate: string;
	/** Website URL (e.g., www.example.com) */
	website: string;
}

/**
 * E-Archive portal invoice details
 * @interface EArchivePortalInvoice
 */
export interface EArchivePortalInvoice {
	/** Indicates if this is an e-Archive Portal Invoice */
	isEArchive: boolean;
	/** Indicates if dispatch note is included */
	dispatchIncluded: boolean;
	/** E-Government type from /api/v1.0/master/eInvoiceTypes */
	eGovernmentType: number;
}

/**
 * Shipment agent information
 * @interface ShipmentAgent
 */
export interface ShipmentAgent {
	/** Agent's first name */
	name: string;
	/** Agent's surname */
	surName: string;
	/** Identifier (TCKN for individual, VKN for corporate) */
	identifier: string;
	/** Type of firm (0: Individual, 1: Corporate) */
	firmType: FirmType;
}

/**
 * E-Archive payment type details
 * @interface EArchivePaymentType
 */
export interface EArchivePaymentType {
	/** Payment type ID */
	id: number;
	/** Payment type name */
	name: string;
	/** Indicates if VAT should not be applied */
	notApplyVat: boolean;
	/** Indicates if withholding should not be applied */
	notApplyWithHolding: boolean;
	/** Indicates if additional tax should not be applied */
	notApplyAdditionalTax: boolean;
	/** Payment type number */
	type: number;
}

/**
 * Response structure for e-Archive payment types
 * @interface EArchivePaymentTypesResponse
 */
export interface EArchivePaymentTypesResponse {
	/** Response code */
	code: number;
	/** Response message */
	message: string;
	/** Error flag */
	isError: boolean;
	/** Response data */
	data: EArchivePaymentType[] | { count: number; data: EArchivePaymentType[] };
}
