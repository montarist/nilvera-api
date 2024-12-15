import { BASE_API } from './base.endpoints';

export const CHECK_PAYMENTS_ENDPOINTS = {
	DELETE_CHECK_RECEIPT_BY_ID: (id: number | string): string => `${BASE_API}/payments/deletecheckreceipt/${id}`,
	GET_CHECK_LIST: `${BASE_API}/payments/checkreceipts`,
	GET_PAYMENT_CHECK_LIST: `${BASE_API}/payments/paymentchecklist`,
	SAVE_OR_UPDATE_TURNOVER: `${BASE_API}/payments/turnover`,
	GET_TURNOVER_RECEIPT_BY_ID: (id: number | string): string => `${BASE_API}/payments/turnoverreceipt/${id}`,
	GET_CHECK_BY_ID: (id: number | string): string => `${BASE_API}/payments/checkreceipt/${id}`,
	GET_CHECK_IMAGE: (id: number | string, type: number): string => `${BASE_API}/payments/getcheckreceiptimage/${id}?type=${type}`,
	GET_CHECK_TRANSACTION_DETAIL_LIST: `${BASE_API}/payments/checkreceipttransactiondetail`,
	SAVE_OR_UPDATE_CS_ROLL: `${BASE_API}/payments/checkreceipt`,
	GET_CHECK_IMAGE_PREVIEW_BY_ID: (id: number | string): string => `${BASE_API}/payments/checkreceipt/${id}/preview`,
	SAFE_AND_BANK_CASH_TRANSACTION_DETAIL_BY_ID: (id: string): string => `${BASE_API}/payments/SafeAndBankCashTransactionDetailById?id=${id}`,
	SAFE_AND_BANK_CASH_TRANSACTION_DETAIL_LIST_PREVIEW: (id: string): string => `${BASE_API}/payments/SafeAndBankCashTransactionDetailFilter/Preview?id=${id}`,
} as const;
