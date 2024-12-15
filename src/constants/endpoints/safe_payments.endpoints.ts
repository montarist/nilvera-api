export const SAFE_PAYMENTS_ENDPOINTS = {
	GET_PAYMENTS_SAFE_TRANSACTION_ID: '/api/v1.0/payments/safe/transaction/{id}',
	POST_PAYMENTS_GETSAFESTOTAL: '/api/v1.0/payments/getsafestotal',
	POST_PAYMENTS_SAFES: '/api/v1.0/payments/safes',
	GET_PAYMENTS_SAFE_SAFEID: '/api/v1.0/payments/safe/{safeId}',
	DELETE_PAYMENTS_SAFE_SAFEID: '/api/v1.0/payments/safe/{safeId}',
	PUT_PAYMENTS_SAFE_SAFE: '/api/v1.0/payments/safe/safe',
	GET_PAYMENTS_SAFE_TRANSACTION_ID_PREVIEW: '/api/v1.0/payments/safe/transaction/{id}/preview',
} as const;
