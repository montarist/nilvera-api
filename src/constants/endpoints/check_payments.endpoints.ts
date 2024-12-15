export const CHECK_PAYMENTS_ENDPOINTS = {
	GET_PAYMENTS_CHECKRECEIPT_ID: '/api/v1.0/payments/checkreceipt/{id}',
	GET_PAYMENTS_CHECKRECEIPT_ID_PREVIEW: '/api/v1.0/payments/checkreceipt/{id}/preview',
	GET_PAYMENTS_TURNOVERRECEIPT_ID: '/api/v1.0/payments/turnoverreceipt/{id}',
	PUT_PAYMENTS_CHECKRECEIPT: '/api/v1.0/payments/checkreceipt',
	PUT_PAYMENTS_TURNOVER: '/api/v1.0/payments/turnover',
	DELETE_PAYMENTS_DELETECHECKRECEIPT_ID: '/api/v1.0/payments/deletecheckreceipt/{id}',
	DELETE_PAYMENTS_DELETETURNOVERRECEIPT_ID: '/api/v1.0/payments/deleteturnoverreceipt/{id}',
	POST_PAYMENTS_CHECKRECEIPTS: '/api/v1.0/payments/checkreceipts',
	POST_PAYMENTS_PAYMENTCHECKLIST: '/api/v1.0/payments/paymentchecklist',
	POST_PAYMENTS_CHECKRECEIPTTRANSACTIONDETAIL: '/api/v1.0/payments/checkreceipttransactiondetail',
	GET_PAYMENTS_GETCHECKRECEIPTIMAGE_ID: '/api/v1.0/payments/getcheckreceiptimage/{id}',
} as const;
