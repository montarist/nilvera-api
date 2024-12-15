export const GSTR_GSTR_ENDPOINTS = {
  POST_GSTR: "/api/v1.0/gstr",
  PUT_GSTR: "/api/v1.0/gstr",
  GET_GSTR_GETLASTGSTRNUMBER: "/api/v1.0/gstr/getlastgstrnumber",
  GET_GSTR_ID: "/api/v1.0/gstr/{id}",
  DELETE_GSTR_ID: "/api/v1.0/gstr/{id}",
  PUT_GSTR_CREATEDATA_ID: "/api/v1.0/gstr/createdata/{id}",
  GET_GSTR_GETEXCEL_ID: "/api/v1.0/gstr/getexcel/{id}",
  GET_GSTR_GETJSON_ID: "/api/v1.0/gstr/getjson/{id}",
} as const;