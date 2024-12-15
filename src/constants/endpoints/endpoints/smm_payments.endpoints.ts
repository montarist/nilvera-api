export const SMM_PAYMENTS_ENDPOINTS = {
  GET_PAYMENTS_SMM_ID: "/api/v1.0/payments/smm/{id}",
  POST_PAYMENTS_SMMS: "/api/v1.0/payments/smms",
  PUT_PAYMENTS_SMM: "/api/v1.0/payments/smm",
  PUT_PAYMENTS_UPDATE_ESMM_STATUS_ISACTIVE: "/api/v1.0/payments/update-esmm-status/{isActive}",
  DELETE_PAYMENTS_DELETESMM_ID: "/api/v1.0/payments/deletesmm/{id}",
  POST_PAYMENTS_SMMIMAGE: "/api/v1.0/payments/smmimage",
  GET_PAYMENTS_GETSMMIMAGE_ID: "/api/v1.0/payments/getsmmimage/{id}",
  GET_PAYMENTS_GETLASTSMMNUMBER: "/api/v1.0/payments/getlastsmmnumber",
  POST_PAYMENTS_CALCULATESMM: "/api/v1.0/payments/calculatesmm",
  GET_PAYMENTS_GETFONRATE: "/api/v1.0/payments/getfonrate",
  POST_PAYMENTS_SAVEESMMWITHXML: "/api/v1.0/payments/saveESmmWithXml",
  GET_PAYMENTS_GETSTOPAJRATE: "/api/v1.0/payments/getstopajrate",
  GET_PAYMENTS_MULTIPLEDOCUMENTDATA: "/api/v1.0/payments/multipleDocumentData",
  GET_PAYMENTS_DOCUMENTDATA: "/api/v1.0/payments/DocumentData",
  GET_PAYMENTS_SMM_ID_PREVIEW: "/api/v1.0/payments/smm/{id}/Preview",
  GET_PAYMENTS_DOCUMENTUBLDATA: "/api/v1.0/payments/DocumentUblData",
} as const;