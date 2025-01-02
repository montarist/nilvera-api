import { EArchiveInvoiceLineDto, InvoiceInfoArchiveInvoiceInfoDto, PartyInfoDto } from './earchive-invoice-model-response';

export interface CreateDraftEArchiveInvoiceRequest {
	ArchiveInvoice: ArchiveInvoiceDto;
}

export interface CreateInvoiceModelRequest {
	ArchiveInvoice: ArchiveInvoiceDto;
}

export interface ArchiveInvoiceDto {
	InvoiceInfo: InvoiceInfoArchiveInvoiceInfoDto;
	CompanyInfo: PartyInfoDto;
	CustomerInfo: PartyInfoDto;
	InvoiceLines?: EArchiveInvoiceLineDto[]; // Opsiyonel: Fatura satırları
	Notes?: string[]; // Opsiyonel: Fatura notları
}
