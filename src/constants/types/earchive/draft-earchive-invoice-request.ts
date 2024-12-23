export interface DraftEArchiveInvoiceRequest {
	Page?: number; // Sayfa numarası
	PageSize?: number; // Sayfa boyutu
	Search?: string; // Arama metni
	StartDate?: string; // Başlangıç tarihi (ISO formatında)
	EndDate?: string; // Bitiş tarihi (ISO formatında)
}
