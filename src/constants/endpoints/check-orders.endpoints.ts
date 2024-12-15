import { BASE_API } from './base.endpoints';

export const CHECK_ORDERS_ENDPOINTS = {
	SET_CHECK_IMAGE: (type: number): string => `${BASE_API}/payments/checkreceiptimage?type=${type}`,
} as const;
