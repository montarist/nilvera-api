export const EXPORTDATA_EXPORTDATA_ENDPOINTS = {
	POST_EXPORTDATA_GETLIST: '/api/v1.0/exportdata/getlist',
	GET_EXPORTDATA_GETEXPORTDATA_ID: '/api/v1.0/exportdata/getExportData/{id}',
	PUT_EXPORTDATA_CREATEORUPDATE: '/api/v1.0/exportdata/createorupdate',
	DELETE_EXPORTDATA_DELETE_ID: '/api/v1.0/exportdata/delete/{id}',
	POST_EXPORTDATA_EXECUTEDATAREPORTSJOB: '/api/v1.0/exportdata/executedatareportsjob',
	GET_EXPORTDATA_EXPORTDATAREPORTSEXCEL_ID: '/api/v1.0/exportdata/exportdatareportsexcel/{id}',
} as const;
