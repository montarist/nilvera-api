export const INVOICE_PROFILE = {
	TEMELFATURA: 'TEMELFATURA',
	TICARIFATURA: 'TICARIFATURA',
} as const;

export type InvoiceProfile = (typeof INVOICE_PROFILE)[keyof typeof INVOICE_PROFILE];
