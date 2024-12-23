import { InvoiceProfile, InvoiceType, SortType } from '../common';

export interface OldInvoiceRequest {
	Page?: number; // Hangi sayfanın alınacağı
	PageSize?: number; // Her sayfada gösterilecek öğe sayısı
	Search?: string; // Arama metni
	StartDate?: string; // Faturanın başlangıç tarihi (ISO formatında)
	EndDate?: string; // Faturanın bitiş tarihi (ISO formatında)
	SortColumn?: string; // Sıralama yapılacak sütun
	SortType?: SortType; // Sıralama türü (ASC veya DESC)
	InvoiceProfile?: InvoiceProfile[]; // Fatura profilleri
	InvoiceType?: InvoiceType[]; // Fatura türleri
	IsPrint?: boolean; // Yazdırılmış mı
	IsSale?: boolean; // Satış faturası mı
}
