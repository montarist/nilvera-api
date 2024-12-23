export interface CreateDraftRequest {
	EInvoice: EInvoice;
	CustomerAlias: string;
}

export interface EInvoice {
	InvoiceInfo: InvoiceInfo;
	CompanyInfo: CompanyInfo;
	CustomerInfo: CustomerInfo;
	BuyerCustomerInfo?: CustomerInfo; // Opsiyonel: Alıcı müşteri bilgileri
	ExportCustomerInfo?: ExportCustomerInfo; // Opsiyonel: İhracat müşteri bilgileri
	InvoiceLines: InvoiceLine[];
	Notes?: string[]; // Opsiyonel: Notlar
}

export interface InvoiceInfo {
	UUID: string;
	TemplateUUID: string;
	TemplateBase64String: string;
	InvoiceType: string;
	InvoiceSerieOrNumber: string;
	IssueDate: string;
	CurrencyCode: string;
	ExchangeRate: number;
	InvoiceProfile: string;
	DespatchDocumentReference?: DespatchDocumentReference[]; // Opsiyonel: Sevk doküman referansı
	OrderReference?: OrderReference; // Opsiyonel: Sipariş referansı
	OrderReferenceDocument?: OrderReferenceDocument; // Opsiyonel: Sipariş doküman referansı
	AdditionalDocumentReferences?: AdditionalDocumentReference[]; // Opsiyonel: Ek doküman referansları
	TaxExemptionReasonInfo?: TaxExemptionReasonInfo; // Opsiyonel: Vergi muafiyet bilgileri
	PaymentTermsInfo?: PaymentTermsInfo; // Opsiyonel: Ödeme şartları
	PaymentMeansInfo?: PaymentMeansInfo; // Opsiyonel: Ödeme araç bilgileri
	OKCInfo?: OKCInfo; // Opsiyonel: OKC bilgisi
	ReturnInvoiceInfo?: ReturnInvoiceInfo[]; // Opsiyonel: İade faturası bilgileri
	AccountingCost?: string; // Opsiyonel: Muhasebe masraf bilgisi
	InvoicePeriod?: InvoicePeriod; // Opsiyonel: Fatura dönemi
	SGKInfo?: SGKInfo; // Opsiyonel: SGK bilgisi
	LineExtensionAmount?: number; // Opsiyonel: Satır uzantı miktarı
	GeneralAllowanceTotal?: number; // Opsiyonel: Genel iskonto toplamı
	PayableAmount?: number; // Opsiyonel: Ödenecek toplam tutar
	KdvTotal?: number; // Opsiyonel: KDV toplamı
}

export interface CompanyInfo {
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

export interface CustomerInfo {
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

export interface ExportCustomerInfo {
	TaxNumber: string;
	LegalRegistrationName: string;
	PersonName: string;
	PersonSurName: string;
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

export interface InvoiceLine {
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
	Taxes?: Tax[];
}

export interface Tax {
	TaxCode: string;
	Total: number;
	Percent: number;
	ReasonCode?: string;
	ReasonDesc?: string;
}

export interface DespatchDocumentReference {
	IssueDate: string; // Sevk dokümanının düzenlenme tarihi
	Value: string; // Sevk dokümanına ait değer
}

export interface OrderReference {
	IssueDate: string; // Siparişin düzenlenme tarihi
	Value: string; // Sipariş referans değeri
}

export interface OrderReferenceDocument {
	ID: string; // Doküman kimliği
	IssueDate: string; // Doküman düzenlenme tarihi
	DocumentType: string; // Doküman türü
	DocumentTypeCode: string; // Doküman türü kodu
	DocumentDescription: string; // Doküman açıklaması
	Attachment: Attachment; // Dokümana ait ek dosya
}

export interface Attachment {
	Base64Data: string; // Ek dosyanın Base64 kodlu verisi
	MimeCode: string; // Ek dosyanın MIME türü
	FileName: string; // Ek dosya adı
}

export interface AdditionalDocumentReference {
	ID: string; // Ek doküman kimliği
	IssueDate: string; // Ek doküman düzenlenme tarihi
	DocumentType: string; // Ek doküman türü
	DocumentTypeCode: string; // Ek doküman türü kodu
	DocumentDescription: string; // Ek doküman açıklaması
	Attachment: Attachment; // Ek dosya bilgisi
}

export interface TaxExemptionReasonInfo {
	KDVExemptionReasonCode: string; // KDV muafiyet sebep kodu
	OTVExemptionReasonCode: string; // ÖTV muafiyet sebep kodu
	OzelMatrahExemptionReasonCode: string; // Özel Matrah muafiyet sebep kodu
}

export interface PaymentTermsInfo {
	Percent: number; // Ödeme yüzdesi
	Amount: number; // Ödenecek tutar
	Note: string; // Ödeme notu
}

export interface PaymentMeansInfo {
	Code: string; // Ödeme yöntemi kodu
	ChannelCode: string; // Ödeme kanalı kodu
	DueDate: string; // Ödeme vadesi
	PayeeFinancialAccountID: string; // Alıcı finansal hesap kimliği
	Note: string; // Ödeme notu
}

export interface OKCInfo {
	ID: string; // OKC kimliği
	IssueDate: string; // OKC düzenlenme tarihi
	Time: string; // OKC zamanı
	ZNo: string; // Z no
	EndPointID: string; // Endpoint kimliği
	DocumentDescription: string; // Doküman açıklaması
}

export interface ReturnInvoiceInfo {
	InvoiceNumber: string; // İade edilen faturanın numarası
	IssueDate: string; // İade edilen faturanın düzenlenme tarihi
}

export interface InvoicePeriod {
	StartDate: string; // Dönemin başlangıç tarihi
	StartTime?: string; // Opsiyonel: Başlangıç zamanı
	EndDate: string; // Dönemin bitiş tarihi
	EndTime?: string; // Opsiyonel: Bitiş zamanı
	DurationMeasureValue?: number; // Opsiyonel: Süre ölçüm değeri
	Description?: string; // Opsiyonel: Açıklama
}

export interface SGKInfo {
	RegisterName: string; // Kayıt adı
	DocumentNumber: string; // SGK doküman numarası
	RegisterCode: string; // SGK kayıt kodu
}

export interface PartyIdentification {
	SchemeID: string; // Şema kimliği
	Value: string; // Değer
}
