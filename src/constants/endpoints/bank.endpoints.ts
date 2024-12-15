import { BASE_API } from './base.endpoints';

export const BANK_PAYMENTS_ENDPOINTS = {
	GET_BANK_BY_ID: (bankId: number | string): string => `${BASE_API}/payments/bank/${bankId}`,
	SAVE_OR_UPDATE_BANK_LIST: `${BASE_API}/payments/bank/bank/list`,
	SAVE_OR_UPDATE_BANK: `${BASE_API}/payments/bank/bank`,
	E_LOGO_TEST_ASYNC: `${BASE_API}/payments/eLogoTestAsync`,
	GET_BANK_INTEGRATION_TRANSACTIONS: `${BASE_API}/payments/bank/integration/transactions`,
	GET_ALL_INTEGRATED_BANK_ACCOUNTS: `${BASE_API}/payments/bank/allintegratedaccounts`,
	GET_BANK_LIST_TOTAL: `${BASE_API}/payments/getbankstotal`,
	GET_BANK_TRANSACTION_BY_ID: (id: number | string): string => `${BASE_API}/payments/bank/transaction/${id}`,
	GET_BANK_LIST: `${BASE_API}/payments/banks`,
	GET_BANK_INTEGRATION_ACCOUNTS: (id: number | string): string => `${BASE_API}/payments/bank/integration/${id}/accounts`,
	DELETE_BANK_BY_ID: (bankId: number | string): string => `${BASE_API}/payments/bank/integration/${bankId}/accounts`,
	DELETE_BANK_ACCOUNT: (bankAccountId: number | string): string => `${BASE_API}/payments/bankAccount/${bankAccountId}`,
	GET_BANK_INTEGRATIONS: `${BASE_API}/payments/bank/integrations`,
	GET_BANK_TRANSACTION_PREVIEW: (id: number | string): string => `${BASE_API}/payments/bank/transaction/${id}/Preview`,
	GET_BANK_BRANCH_BY_ID: (bankId: number | string): string => `${BASE_API}/payments/bankbranch/${bankId}`,
	GET_RECONCILIATION_LIST: `${BASE_API}/payments/bank/reconciliationlist`,
	GET_RECONCILIATION_DETAIL_LIST_DAILY: (id: number | string): string => `${BASE_API}/payments/bank/reconciliationdetaildaily/${id}`,
} as const;
