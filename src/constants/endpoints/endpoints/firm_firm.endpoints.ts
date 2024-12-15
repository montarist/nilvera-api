export const FIRM_FIRM_ENDPOINTS = {
  POST_FIRMS_FIRMS: "/api/v1.0/firms/firms",
  POST_FIRMS_ACTIVATE: "/api/v1.0/firms/activate",
  POST_FIRMS_DEACTIVATE: "/api/v1.0/firms/deactivate",
  GET_FIRMS_GETLASTFIRMNUMBER: "/api/v1.0/firms/getlastfirmnumber",
  GET_FIRMS_ID: "/api/v1.0/firms/{id}",
  GET_FIRMS_INVOICETYPEFOREINVOICE_ID_INVOICEDATE: "/api/v1.0/firms/invoicetypeforeinvoice/{id}/{invoiceDate}",
  GET_FIRMS_EDISPATCHTYPE_ID_DISPATCHDATE: "/api/v1.0/firms/edispatchtype/{id}/{dispatchDate}",
  GET_FIRMS_REPORT_ID: "/api/v1.0/firms/Report/{id}",
  GET_FIRMS_REPORT_ID_PREVIEW: "/api/v1.0/firms/Report/{id}/Preview",
  GET_FIRMS_ID_PREVIEW: "/api/v1.0/firms/{id}/Preview",
  PUT_FIRMS: "/api/v1.0/firms",
  DELETE_FIRMS: "/api/v1.0/firms",
  POST_FIRMS_FIRMFILEINSERT: "/api/v1.0/firms/firmfileinsert",
  POST_FIRMS_IMPORT: "/api/v1.0/firms/import",
  PUT_FIRMS_DELIVERY_ADDRESS: "/api/v1.0/firms/delivery-address",
  PUT_FIRMS_FIRMLIST: "/api/v1.0/firms/firmlist",
  DELETE_FIRMS_FIRM_TRANSACTION_ID: "/api/v1.0/firms/firm/transaction/{id}",
  GET_FIRMS_FIRM_TRANSACTION_ID: "/api/v1.0/firms/firm/transaction/{id}",
  PUT_FIRMS_FIRM_TRANSACTION: "/api/v1.0/firms/firm/transaction",
  GET_FIRMS_FIRM_TRANSACTION_ID_PREVIEW: "/api/v1.0/firms/firm/transaction/{id}/preview",
  GET_FIRMS_FIRMBALANCES_DATE: "/api/v1.0/firms/firmbalances/{date}",
  GET_FIRMS_GETCUSTOMERINFORMATION_TAXNO: "/api/v1.0/firms/getcustomerinformation/{taxNo}",
} as const;