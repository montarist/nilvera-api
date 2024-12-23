import { ArchiveInvoiceDto } from './create-draft-earchive-invoice-request';

export interface CreateBulkDraftInvoiceRequest {
	EArchiveInvoices: BulkEArchiveInvoiceDto[];
}

export interface BulkEArchiveInvoiceDto {
	ArchiveInvoice: ArchiveInvoiceDto;
}
