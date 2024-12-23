import { TagInfo } from '../common';

export interface DraftEArchiveInvoiceResponse {
	Page: number; // Geçerli sayfa numarası
	PageSize: number; // Sayfa başına gösterilen öğe sayısı
	TotalCount?: number; // Toplam kayıt sayısı
	TotalPages?: number; // Toplam sayfa sayısı
	Content?: DraftEArchiveInvoice[]; // Taslak fatura detaylarını içeren liste
}

export interface DraftEArchiveInvoice {
	UUID: string; // Faturanın benzersiz kimliği
	TaxNumber: string; // Vergi numarası
	InvoiceNumber: string; // Fatura numarası
	InvoiceProfile: string; // Fatura profili (ör. TEMELFATURA)
	InvoiceStatusDescription: string; // Fatura durumu açıklaması
	InvoiceType: string; // Fatura türü (ör. SATIS)
	IssueDate: string; // Faturanın düzenlenme tarihi (ISO formatında)
	CreatedDate: string; // Faturanın oluşturulma tarihi (ISO formatında)
	Status: number; // Fatura durumu
	CurrencyCode: string; // Döviz kodu (ör. TRY)
	PayableAmount: number; // Ödenecek toplam tutar
	Alias: string; // Alıcının alias bilgisi
	ReceiverName: string; // Alıcının adı
	ReceiverTaxNumber: string; // Alıcının vergi numarası
	IsPrint: boolean; // Yazdırılmış mı
	Tags?: TagInfo[]; // Faturaya ait etiketler
	SpecialCode?: string; // Özel kod
}
