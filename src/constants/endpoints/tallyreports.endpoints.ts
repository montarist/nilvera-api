export const TALLYREPORT_TALLYREPORTS_ENDPOINTS = {
	POST_TALLYREPORTSLIST: '/api/v1.0/tallyreportslist',
	GET_TALLYREPORTS_ID: '/api/v1.0/tallyreports/{id}',
	DELETE_TALLYREPORTS_ID: '/api/v1.0/tallyreports/{id}',
	PUT_GENERATETALLYREPORTS_ID: '/api/v1.0/generatetallyreports/{id}',
	PUT_TALLYREPORTS: '/api/v1.0/tallyreports',
	POST_EXECUTETALLYREPORTSJOB: '/api/v1.0/executetallyreportsjob',
	GET_EXPORTTALLYREPORTSEXCEL_ID: '/api/v1.0/exporttallyreportsexcel/{id}',
} as const;
