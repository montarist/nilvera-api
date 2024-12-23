import {
	AdditionalDocumentReference,
	DespatchDocumentReference,
	InvoicePeriod,
	OKCInfo,
	OrderReference,
	OrderReferenceDocument,
	PartyIdentification,
	PaymentMeansInfo,
	PaymentTermsInfo,
	ReturnInvoiceInfo,
	TaxExemptionReasonInfo,
} from '../draft';

export interface ArchiveInvoiceModelResponse {
	InvoiceInfo: InvoiceInfoArchiveInvoiceInfoDto;
	CompanyInfo: PartyInfoDto;
	CustomerInfo: PartyInfoDto;
	InvoiceLines?: EArchiveInvoiceLineDto[]; // Opsiyonel: Fatura satırları
	Notes?: string[]; // Opsiyonel: Fatura notları
}

export interface InvoiceInfoArchiveInvoiceInfoDto {
	UUID: string;
	TemplateUUID: string;
	TemplateBase64String: string;
	InvoiceType: string;
	InvoiceSerieOrNumber: string;
	IssueDate: string;
	CurrencyCode: string;
	ExchangeRate: number;
	DespatchDocumentReference?: DespatchDocumentReference[];
	OrderReference?: OrderReference;
	OrderReferenceDocument?: OrderReferenceDocument;
	AdditionalDocumentReferences?: AdditionalDocumentReference[];
	TaxExemptionReasonInfo?: TaxExemptionReasonInfo;
	PaymentTermsInfo?: PaymentTermsInfo;
	PaymentMeansInfo?: PaymentMeansInfo;
	OKCInfo?: OKCInfo;
	ESUReportInfo?: ESUReportInfo;
	InvoicePeriod?: InvoicePeriod;
	ReturnInvoiceInfo?: ReturnInvoiceInfo[];
	Expenses?: Expense[];
	ISDespatch: boolean;
	SalesPlatform: string;
	SendType: string;
	InternetInfo?: InternetInfo;
	AccountingCost: string;
	LineExtensionAmount: number;
	GeneralKDV1Total: number;
	GeneralKDV8Total: number;
	GeneralKDV18Total: number;
	GeneralKDV10Total: number;
	GeneralKDV20Total: number;
	GeneralAllowanceTotal: number;
	PayableAmount: number;
	KdvTotal: number;
}

export interface PartyInfoDto {
	TaxNumber: string;
	Name: string;
	TaxOffice: string;
	PartyIdentifications?: PartyIdentification[];
	AgentPartyIdentifications?: PartyIdentification[];
	Address: string;
	District: string;
	City: string;
	Country: string;
	PostalCode: string;
	Phone?: string;
	Fax?: string;
	Mail?: string;
	WebSite?: string;
}

export interface EArchiveInvoiceLineDto {
	Index: string;
	SellerCode: string;
	BuyerCode: string;
	Name: string;
	Description?: string;
	Quantity: number;
	UnitType: string;
	Price: number;
	AllowanceTotal?: number;
	KDVPercent?: number;
	KDVTotal?: number;
	Taxes?: TaxDto[];
	ManufacturerCode?: string;
	BrandName?: string;
	ModelName?: string;
	Note?: string;
	SerialID?: string;
	OzelMatrahReason?: string;
	OzelMatrahTotal?: number;
	VatAmountWithoutTevkifat?: number;
	AdditionalItemIdentification?: AdditionalItemIdentificationDto;
}

export interface TaxDto {
	TaxCode: string;
	Total: number;
	Percent: number;
	ReasonCode?: string;
	ReasonDesc?: string;
}

export interface AdditionalItemIdentificationDto {
	TagNumber: string;
	OwnerName: string;
	OwnerTaxNumber: string;
}

export interface Expense {
	ExpenseType: string; // Örneğin, "HKSKOMISYON"
	Percent: number;
	Amount: number;
}

export interface InternetInfo {
	WebSite: string;
	PaymentMethod: string;
	PaymentMethodName: string;
	PaymentAgentName: string;
	PaymentDate: string; // ISO formatında tarih
	TransporterName: string;
	TransporterRegisterNumber: string;
	TransportDate: string; // ISO formatında tarih
}

export interface ESUReportInfo {
	ID: string;
	IssueDate: string; // ISO formatında tarih
}
