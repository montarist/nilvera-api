import { InvoiceLine } from './invoice-line';

export interface EditAndSendDraftRequest {
	UUID: string; // Düzenlenecek taslak faturanın UUID'si
	InvoiceLines: InvoiceLine[]; // Faturanın satır bilgileri
	Notes?: string[]; // Opsiyonel: Fatura notları
	IssueDate?: string; // Opsiyonel: Faturanın düzenlenme tarihi (ISO formatında)
	ReceiverAlias?: string; // Opsiyonel: Alıcının Alias bilgisi
}
