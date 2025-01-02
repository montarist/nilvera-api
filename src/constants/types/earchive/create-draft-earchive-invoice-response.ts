export interface CreateDraftEArchiveInvoiceResponse {
	UUID: string; // Oluşturulan taslak faturanın benzersiz kimliği
	InvoiceNumber?: string; // Opsiyonel: Oluşturulan faturanın numarası
}