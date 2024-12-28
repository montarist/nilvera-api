export const INVOICE_TYPE = {
	SATIS: 'SATIS',
	ALIS: 'ALIS',
	ISTISNA: 'ISTISNA',
} as const;

export type InvoiceType = (typeof INVOICE_TYPE)[keyof typeof INVOICE_TYPE];
