export const IVD_IVD_ENDPOINTS = {
	GET_IVD_STARTSESSION: '/api/v1.0/ivd/startsession',
	POST_IVD_LOGINSESSION: '/api/v1.0/ivd/loginsession',
	DELETE_IVD_LOGOUTSESSION_SESSIONID: '/api/v1.0/ivd/logoutsession/{sessionId}',
	POST_IVD_GETINVOICES: '/api/v1.0/ivd/getinvoices',
} as const;
