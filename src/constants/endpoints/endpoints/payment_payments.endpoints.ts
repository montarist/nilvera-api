export const PAYMENT_PAYMENTS_ENDPOINTS = {
  DELETE_PAYMENTS_BANK_TRANSACTION_ID: "/api/v1.0/payments/bank/transaction/{id}",
  POST_PAYMENTS_ORDER_TRANSACTIONS: "/api/v1.0/payments/order/transactions",
  PUT_PAYMENTS_ORDERPAYMENT: "/api/v1.0/payments/orderpayment",
  POST_PAYMENTS_SMM_TRANSACTIONS: "/api/v1.0/payments/smm/transactions",
  POST_PAYMENTS_INVOICE_TRANSACTIONS: "/api/v1.0/payments/invoice/transactions",
  GET_PAYMENTS_INVOICE_TRANSACTIONS_INVOICEID: "/api/v1.0/payments/invoice/transactions/{invoiceId}",
  PUT_PAYMENTS_INVOICEPAYMENT: "/api/v1.0/payments/invoicepayment",
  POST_PAYMENTS_PAYMENTINVOICELIST: "/api/v1.0/payments/paymentinvoicelist",
  PUT_PAYMENTS_TRANSACTION_TRANSACTION: "/api/v1.0/payments/transaction/transaction",
  PUT_PAYMENTS_ONLINEPAYMENT_CONVERSATIONID: "/api/v1.0/payments/onlinepayment/{conversationId}",
  GET_PAYMENTS_SAFE_TRANSACTION_HEADER_ID_TYPE: "/api/v1.0/payments/safe/transaction/header/{id}/{type}",
  DELETE_PAYMENTS_SAFE_TRANSACTION_ID: "/api/v1.0/payments/safe/transaction/{id}",
  GET_PAYMENTS_SAFEANDBANKCASHTRANSACTIONDETAILBYID: "/api/v1.0/payments/SafeAndBankCashTransactionDetailById",
  GET_PAYMENTS_SAFEANDBANKCASHTRANSACTIONDETAILBYID_PREVIEW: "/api/v1.0/payments/SafeAndBankCashTransactionDetailById/Preview",
  GET_PAYMENTS_SAFEANDBANKCASHTRANSACTIONDETAILFILTER: "/api/v1.0/payments/SafeAndBankCashTransactionDetailFilter",
  GET_PAYMENTS_SAFEANDBANKCASHTRANSACTIONDETAILFILTER_PREVIEW: "/api/v1.0/payments/SafeAndBankCashTransactionDetailFilter/Preview",
  POST_PAYMENTS_SAFEANDBANKCASHTRANSACTIONDETAIL: "/api/v1.0/payments/safeandbankcashtransactiondetail",
  POST_PAYMENTS_FIRMTRANSACTIONDETAIL: "/api/v1.0/payments/firmtransactiondetail",
  GET_PAYMENTS_BANK_RECONCILIATIONDETAIL_ID: "/api/v1.0/payments/bank/reconciliationdetail/{id}",
  GET_PAYMENTS_BANK_RECONCILIATIONDETAILDAILY_ID: "/api/v1.0/payments/bank/reconciliationdetaildaily/{id}",
  DELETE_PAYMENTS_BANK_DELETERECONCILIATION_ID: "/api/v1.0/payments/bank/deletereconciliation/{id}",
  POST_PAYMENTS_BANK_RECONCILIATIONLIST: "/api/v1.0/payments/bank/reconciliationlist",
  POST_PAYMENTS_BANK_DODETAILEDRECONCILIATION: "/api/v1.0/payments/bank/dodetailedreconciliation",
} as const;