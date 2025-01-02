export interface CreateDraftResponse {
	UUID: string; // Oluşturulan taslak faturanın benzersiz kimliği
	InvoiceNumber: string; // Oluşturulan taslak faturanın numarası
}

export interface CreateEInvoiceModelResponse {
	UUID: string; // Oluşturulan taslak faturanın benzersiz kimliği
	InvoiceNumber?: string; // Oluşturulan faturanın numarası
}
