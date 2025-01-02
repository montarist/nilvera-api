export const EARCHIVE_ENDPOINTS = {
	DRAFT: {
		LIST: '/earchive/Draft', // GET - Taslak faturaları listeler
		DELETE: '/earchive/Draft', // DELETE - Taslak faturaları siler
		HTML: (uuid: string) => `/earchive/Draft/${uuid}/html`, // GET - HTML dosyasını indirir
		PDF: (uuid: string) => `/earchive/Draft/${uuid}/pdf`, // GET - PDF dosyasını indirir
		XML: (uuid: string) => `/earchive/Draft/${uuid}/xml`, // GET - XML dosyasını indirir
		MODEL: (uuid: string) => `/earchive/Draft/${uuid}/model`, // GET - Model dosyasını indirir
		ASSIGN_TAGS: '/earchive/Draft/Tags', // PUT - Taslak faturaya etiket atar
		GET_TAGS: (uuid: string) => `/earchive/Draft/${uuid}/Tags`, // GET - Taslak faturanın etiket bilgilerini getirir
		EXPORT: (fileType: string) => `/earchive/Draft/Export/${fileType}`, // POST - Belgeleri toplu olarak dışa aktarır
		OPERATION: (operationType: string) => `/earchive/Draft/Operation/${operationType}`, // PUT - Toplu durum atama
		CONFIRM_AND_SEND: '/earchive/Draft/ConfirmAndSend', // POST - Taslak faturayı onaylayıp gönderir
		EDIT_AND_SEND: '/earchive/Draft/EditAndSend', // POST - Taslak faturayı düzenleyerek gönderir
		CREATE: '/earchive/Draft/Create', // POST - Taslak fatura oluşturur
		CREATE_BULK: '/earchive/Draft/CreateBulk', // POST - Toplu taslak fatura oluşturur
		WHATSAPP_HISTORY: (uuid: string) => `/earchive/Draft/${uuid}/Whatsapphistories`, // GET - WhatsApp işlem geçmişini getirir
		SEND_VIA_WHATSAPP: '/earchive/Draft/Whatsapp/Send', // POST - Taslak faturayı WhatsApp üzerinden gönderir
		UPDATE_SPECIAL_CODE: '/earchive/Draft/SpecialCode', // PUT - Taslak faturaya özel kod atar
	},
	GIB: {
		PURCHASE: '/earchive/Gib/Purchase', // GET - GİB E-Arşiv Faturalarını listeler
	},
	INVOICES: {
		LIST: '/earchive/Invoices', // GET - Faturaları listeler
		HTML: (uuid: string) => `/earchive/Invoices/${uuid}/html`, // GET - Faturanın HTML formatını indirir
		PDF: (uuid: string) => `/earchive/Invoices/${uuid}/pdf`, // GET - Faturanın PDF formatını indirir
		XML: (uuid: string) => `/earchive/Invoices/${uuid}/xml`, // GET - Faturanın XML formatını indirir
		DETAIL: (uuid: string) => `/earchive/Invoices/${uuid}`, // GET - Fatura detaylarını getirir
	},
	SEND: {
		MODEL: '/earchive/Send/Model', // POST - Fatura modeli oluşturur
	},
	REPORT: {
		LIST: '/earchive/Report', // GET - Raporları listeler
		DETAIL: (uuid: string) => `/earchive/Report/${uuid}`, // GET - Rapor detaylarını getirir
		GENERATE: '/earchive/Report/Generate', // POST - Yeni rapor oluşturur
	},
	DOCUMENTS: {
		HTML: (uuid: string) => `/earchive/Documents/${uuid}/html`, // GET - Belgelerin HTML formatını indirir
		PDF: (uuid: string) => `/earchive/Documents/${uuid}/pdf`, // GET - Belgelerin PDF formatını indirir
		XML: (uuid: string) => `/earchive/Documents/${uuid}/xml`, // GET - Belgelerin XML formatını indirir
	},
	SETTINGS: {
		GET_CONFIG: '/earchive/Settings', // GET - Ayarları getirir
		UPDATE_CONFIG: '/earchive/Settings', // PUT - Ayarları günceller
	},
	STATUS: {
		CHECK: '/earchive/Status', // GET - Sistem durumunu kontrol eder
	},
};
