export interface OldInvoiceResponse {
	Page: number; // Geçerli sayfa numarası
	PageSize: number; // Sayfa başına gösterilen öğe sayısı
	TotalCount: number; // Toplam fatura sayısı
	TotalPages: number; // Toplam sayfa sayısı
	Content: OldInvoice[]; // Fatura detaylarını içeren liste
}

export interface OldInvoice {
	UUID: string; // Faturanın benzersiz kimliği
	InvoiceNumber: string; // Fatura numarası
	IssueDate: string; // Faturanın düzenlenme tarihi (ISO formatında)
	TotalAmount: number; // Fatura toplam tutarı
	CurrencyCode: string; // Döviz kodu
	Status: string; // Fatura durumu
}
