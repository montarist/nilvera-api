export const PRODUCTS_ENDPOINTS = {
	POST_PRODUCTS_PRODUCTS: '/api/v1.0/products/products',
	POST_PRODUCTS_SERVICETRANSACTIONDETAILLIST: '/api/v1.0/products/servicetransactiondetaillist',
	POST_PRODUCTS_SERVICETRANSACTIONHEADERLIST: '/api/v1.0/products/servicetransactionheaderlist',
	POST_PRODUCTS_GETPURCHASESERVICES: '/api/v1.0/products/getpurchaseservices',
	POST_PRODUCTS_CALCULATEPRICE_VAT: '/api/v1.0/products/calculateprice/{vat}',
	POST_PRODUCTS_ACTIVATE: '/api/v1.0/products/activate',
	POST_PRODUCTS_DEACTIVATE: '/api/v1.0/products/deactivate',
	GET_PRODUCTS_ID_TYPE: '/api/v1.0/products/{id}/{type}',
	GET_PRODUCTS_WITHCODE_CODE_TYPE: '/api/v1.0/products/withcode/{code}/{type}',
	GET_PRODUCTS_BARCODE: '/api/v1.0/products/{barcode}',
	GET_PRODUCTS_GETLASTPRODUCTNUMBER_TYPE: '/api/v1.0/products/getlastproductnumber/{type}',
	PUT_PRODUCTS: '/api/v1.0/products',
	DELETE_PRODUCTS: '/api/v1.0/products',
	GET_PRODUCTS_TRANSACTION_STATUS_ID_TYPE: '/api/v1.0/products/transaction_status/{id}/{type}',
	POST_PRODUCTS_PRODUCTFILEINSERT: '/api/v1.0/products/productfileinsert',
	POST_PRODUCTS_IMPORT: '/api/v1.0/products/import',
	POST_PRODUCTS_PRODUCTSERVICETRANSACTIONLISTREPORT: '/api/v1.0/products/productservicetransactionlistreport',
	GET_PRODUCTS_BRANDS_ID: '/api/v1.0/products/brands/{id}',
	PUT_PRODUCTS_BRANDS: '/api/v1.0/products/brands',
	DELETE_PRODUCTS_BRAND: '/api/v1.0/products/brand',
	POST_PRODUCTS_GETERRORFILEDOWNLOAD: '/api/v1.0/products/geterrorfiledownload',
	POST_PRODUCTS_PRODUCTIMAGE: '/api/v1.0/products/productimage',
	GET_PRODUCTS_GETPRODUCTIMAGE_ID: '/api/v1.0/products/getproductimage/{id}',
	PUT_PRODUCTS_SETSTOREFRONTSTATUS: '/api/v1.0/products/setstorefrontstatus',
	PUT_PRODUCTS_SETSTOREFRONTSTATUSALLPRODUCT: '/api/v1.0/products/setstorefrontstatusallproduct',
	GET_PRODUCTS_PRODUCTWITHSTOCK_ID_TYPE: '/api/v1.0/products/productwithstock/{id}/{type}',
	POST_PRODUCTS_DISTRIBUTE: '/api/v1.0/products/distribute',
	GET_PRODUCTS_DISTRIBUTION_RESULT_DISTRIBUTIONID: '/api/v1.0/products/distribution-result/{distributionId}',
} as const;
