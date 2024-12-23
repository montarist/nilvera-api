import { EInvoice } from './create-draft-request';

export interface CreateBulkDraftRequest {
	EInvoices: BulkEInvoice[]; // Toplu taslak fatura listesi
}

export interface BulkEInvoice {
	EInvoice: EInvoice; // Tek bir taslak faturayı temsil eder
	CustomerAlias: string; // Alıcının Alias bilgisi
}
