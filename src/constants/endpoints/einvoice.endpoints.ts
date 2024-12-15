export const EINVOICE_E_INVOICES_ENDPOINTS = {
	GET_EINVOICES_DOCUMENTDATA: '/api/v1.0/einvoices/DocumentData',
	POST_EINVOICES_SET_OUTGOING_INVOICES: '/api/v1.0/einvoices/set-outgoing-invoices',
	GET_EINVOICES_DOCUMENTUBLDATA: '/api/v1.0/einvoices/DocumentUblData',
	GET_EINVOICES_DOCUMENTUBLDATAWITHUUID: '/api/v1.0/einvoices/DocumentUblDatawithuuid',
	POST_EINVOICES_EINVOICEWITHJSON: '/api/v1.0/einvoices/eInvoiceWithJson',
	POST_EINVOICES_EINVOICESENDTOGIB: '/api/v1.0/einvoices/eInvoicesendtogib',
	POST_EINVOICES_SIGN_EAPORTAL_INVOICE: '/api/v1.0/einvoices/sign-eaportal-invoice',
	POST_EINVOICES_SIGN_EAPORTAL_MULTIPLE_INVOICE: '/api/v1.0/einvoices/sign-eaportal-multiple-invoice',
	POST_EINVOICES_VALIDATE_SIGN_EAPORTAL_INVOICE: '/api/v1.0/einvoices/validate-sign-eaportal-invoice',
	POST_EINVOICES_VALIDATE_SIGN_EAPORTAL_MULTIPLE_INVOICE: '/api/v1.0/einvoices/validate-sign-eaportal-multiple-invoice',
	POST_EINVOICES_PRINT_EAPORTAL_INVOICE: '/api/v1.0/einvoices/print-eaportal-invoice',
	POST_EINVOICES_PRINT_EAPORTAL_INVOICE_PDF: '/api/v1.0/einvoices/print-eaportal-invoice-pdf',
	POST_EINVOICES_EINVOICEDRAFT: '/api/v1.0/einvoices/eInvoiceDraft',
	GET_EINVOICES_DOCUMENTDATAWITHUUID: '/api/v1.0/einvoices/DocumentDatawithuuid',
	GET_EINVOICES_DOCUMENTDATAWITHUUIDFROMELOGO: '/api/v1.0/einvoices/DocumentDatawithUuidFromELogo',
	GET_EINVOICES_CREDIT: '/api/v1.0/einvoices/Credit',
	GET_EINVOICES_RESPONSE: '/api/v1.0/einvoices/Response',
	PUT_EINVOICES_UPDATETENANTEINVOICES: '/api/v1.0/einvoices/updatetenanteinvoices',
	POST_EINVOICES_MYINVOICES: '/api/v1.0/einvoices/myinvoices',
	POST_EINVOICES_GETOUTGOINGINVOICEDATALIST: '/api/v1.0/einvoices/GetOutgoingInvoiceDataList',
	POST_EINVOICES_SETMYINVOICES: '/api/v1.0/einvoices/setmyinvoices',
	GET_EINVOICES_GETINVOICE: '/api/v1.0/einvoices/getinvoice',
	GET_EINVOICES_GETINVOICEFIRM: '/api/v1.0/einvoices/getinvoicefirm',
	GET_EINVOICES_GETSTATUS: '/api/v1.0/einvoices/GetStatus',
} as const;
