export const STOCKTRANSACTION_STOCKS_ENDPOINTS = {
  POST_STOCK_STOCKTRANSACTIONHEADERLIST: "/api/v1.0/stock/stocktransactionheaderlist",
  POST_STOCK_STOCKTRANSACTIONLIST_ID: "/api/v1.0/stock/stocktransactionlist/{id}",
  GET_STOCK_ID_STOCKLINES: "/api/v1.0/stock/{id}/StockLines",
  GET_STOCK_ID_STOCKLINES_PREVIEW: "/api/v1.0/stock/{id}/StockLines/Preview",
  GET_STOCK_ID: "/api/v1.0/stock/{id}",
  GET_STOCK_ID_PREVIEW: "/api/v1.0/stock/{id}/Preview",
  DELETE_STOCK: "/api/v1.0/stock",
  PUT_STOCK: "/api/v1.0/stock",
  POST_STOCK_CALCULATELINE: "/api/v1.0/stock/calculateline",
} as const;