export const GENERAL_ENDPOINTS = {
	ALERTS: {
		LIST: '/general/Alerts', // GET - Uyarı mesajlarını getirir
	},
	CAMPAIGNS: {
		LIST: '/general/Campaigns', // GET - Kampanyaları getirir
	},
	COMPANY: {
		GET: '/general/Company', // GET - Firma bilgilerini getirir
		UPDATE: '/general/Company', // PUT - Firma bilgilerini günceller
		MODULES: '/general/Company/Modules', // GET - Firma modüllerini getirir
		CERTIFICATES: {
			LIST: '/general/Company/Certificate', // GET - Firma sertifikalarını getirir
			ADD: '/general/Company/Certificate', // POST - Firmaya sertifika ekler
			UPDATE: '/general/Company/Certificate', // PUT - Firma sertifikasını günceller
			GET_BY_SERIAL: (serialNumber: string) => `/general/Company/Certificate/${serialNumber}`, // GET - Seri numarasına göre sertifika getirir
			DELETE: (id: number) => `/general/Company/Certificate/${id}`, // DELETE - Firma sertifikasını siler
		},
		LIST: '/general/Company/List', // GET - Kullanıcıya tanımlı firmaları getirir
	},
	COMPANY_IDENTIFICATION: {
		LIST: '/general/CompanyIdentification', // GET - Firma kimlik bilgilerini listeler
		ADD: '/general/CompanyIdentification', // POST - Firmaya yeni kimlik bilgisi ekler
		DELETE: (id: number) => `/general/CompanyIdentification/${id}`, // DELETE - Firmadan kimlik bilgisi siler
	},
	CREDITS: {
		GET: '/general/Credits', // GET - Kredi bilgisi getirir
	},
	CUSTOMERS: {
		LIST: '/general/Customers', // GET - Müşteri listeler
		ADD: '/general/Customers', // POST - Müşteri ekler
		UPDATE: '/general/Customers', // PUT - Müşteri günceller
		DELETE: (id: number) => `/general/Customers/${id}`, // DELETE - Müşteri siler
		DELETE_BULK: '/general/Customers/Bulk', // DELETE - Müşteri toplu siler
		SEARCH: (searchText: string) => `/general/Customers/Search/${searchText}`, // GET - Müşteri arar
		GET_BY_TAX_NUMBER: (taxNumber: string) => `/general/Customers/GetCustomerInfo/${taxNumber}`, // GET - Müşteri bilgisini getirir
	},
	EXCHANGE_RATE: {
		GET: '/general/ExchangeRate', // GET - Döviz kurlarını getirir
	},
	GIB_EARCHIVE_ACCOUNT: {
		GET: '/general/GibEArchiveAccount', // GET - Gib kullanıcı adı ve parola getirir
		UPDATE: '/general/GibEArchiveAccount', // PUT - Gib kullanıcı adı ve parola günceller
	},
	GLOBAL_COMPANY: {
		LIST: '/general/GlobalCompany', // GET - Mükellef listesi getirir
		SEARCH: (searchText: string) => `/general/GlobalCompany/Search/${searchText}`, // GET - Mükellef listesi içerisinde arama yapar
		GET_INFO_BY_TAX: (taxNumber: string) => `/general/GlobalCompany/GetGlobalCustomerInfo/${taxNumber}`, // GET - Mükellef bilgisini getirir
		GET_INFO_BULK: '/general/GlobalCompany/GetGlobalCustomerInfo', // POST - Mükellef bilgisini liste halinde getirir
		CHECK_BY_TAX: (taxNumber: string) => `/general/GlobalCompany/Check/TaxNumber/${taxNumber}`, // GET - Vergi numarasından mükellef olup olmadığını sorgular
		CHECK_BY_NAME: (name: string) => `/general/GlobalCompany/Check/Name/${name}`, // GET - Ünvanından mükellef olup olmadığını sorgular
		ZIP: (aliasType: string, globalUserType: string) => `/general/GlobalCompany/${aliasType}/${globalUserType}`, // GET - Mükellef listesi ZIP olarak döner
	},
	MAILING: {
		SETTINGS: '/general/Mailing/Setting', // GET - Mail ayarlarını getirir
		WHATSAPP_TOGGLE: (isActive: boolean) => `/general/Mailing/Whatsapp/Setting/${isActive}`, // POST - WhatsApp özelliğini değiştirir
		EMAIL_TOGGLE: (isActive: boolean) => `/general/Mailing/Email/Setting/${isActive}`, // POST - Mail özelliğini değiştirir
		SMS_TOGGLE: (isActive: boolean) => `/general/Mailing/Sms/Setting/${isActive}`, // POST - Sms özelliğini değiştirir
	},
	STOCKS: {
		LIST: '/general/Stocks', // GET - Stokları getirir
		ADD: '/general/Stocks', // POST - Stok ekler
		UPDATE: '/general/Stocks', // PUT - Stok günceller
		DELETE: (id: number) => `/general/Stocks/${id}`, // DELETE - Stok siler
		DELETE_BULK: '/general/Stocks/Bulk', // DELETE - Stokları toplu siler
		SEARCH: (searchText: string) => `/general/Stocks/SearchStock/${searchText}`, // GET - Stok arar
	},
};
