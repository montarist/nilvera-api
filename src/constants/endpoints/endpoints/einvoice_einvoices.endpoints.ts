export const EINVOICE_EINVOICES_ENDPOINTS = {
  POST_EINVOICES_MYINVOICESLIST: "/api/v1.0/einvoices/myInvoicesList",
  GET_EINVOICES_INCOMINGEINVOICE_UUID_MATCH: "/api/v1.0/einvoices/incomingeinvoice/{uuid}/match",
  POST_EINVOICES_INCOMINGEINVOICE_UUID_IMPORTBYUUID: "/api/v1.0/einvoices/incomingeinvoice/{uuid}/importbyuuid",
  POST_EINVOICES_INCOMINGEINVOICE_UUID_AUTOIMPORTBYUUID: "/api/v1.0/einvoices/incomingeinvoice/{uuid}/autoimportbyuuid",
  POST_EINVOICES_INCOMINGEINVOICE_ID_IMPORTBYID: "/api/v1.0/einvoices/incomingeinvoice/{id}/importbyid",
  GET_EINVOICES_GETINVOICEFIRMS: "/api/v1.0/einvoices/getinvoicefirms",
  POST_EINVOICES_STATUS: "/api/v1.0/einvoices/status",
  PUT_EINVOICES_UUID_SETACCOUNTEDSTATUS: "/api/v1.0/einvoices/{uuid}/setaccountedstatus",
  PUT_EINVOICES_SETACCOUNTEDSTATUSFORLIST: "/api/v1.0/einvoices/setaccountedstatusforlist",
  POST_EINVOICES_SENTEINVOICETOMYCOMPANY: "/api/v1.0/einvoices/senteinvoicetomycompany",
  GET_EINVOICES_UPDATEINTEGRATIONINVOICESTATUS: "/api/v1.0/einvoices/updateintegrationinvoicestatus",
  GET_EINVOICES_INTEGRATIONINVOICEREPORT: "/api/v1.0/einvoices/IntegrationInvoiceReport",
  POST_EINVOICES_GETINTEGRATIONINVOICEREPORT: "/api/v1.0/einvoices/getintegrationinvoicereport",
  PUT_EINVOICES_UPDATE_GTP_NO_ID: "/api/v1.0/einvoices/update-gtp-no/{id}",
} as const;