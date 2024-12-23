export const EINVOICE_ENDPOINTS = {
	DRAFT: {
		LIST: '/einvoice/Draft', // GET - Taslak faturaları listeler
		DELETE: '/einvoice/Draft', // DELETE - Taslak faturaları siler
		HTML: (uuid: string) => `/einvoice/Draft/${uuid}/html`, // GET - HTML dosyasını indirir
		PDF: (uuid: string) => `/einvoice/Draft/${uuid}/pdf`, // GET - PDF dosyasını indirir
		XML: (uuid: string) => `/einvoice/Draft/${uuid}/xml`, // GET - XML dosyasını indirir
		MODEL: (uuid: string) => `/einvoice/Draft/${uuid}/model`, // GET - Model olarak indirir
		ASSIGN_TAGS: '/einvoice/Draft/Tags', // PUT - Taslak faturaya etiket atar
		GET_TAGS: (uuid: string) => `/einvoice/Draft/${uuid}/Tags`, // GET - Taslak faturanın etiket bilgilerini getirir
		EXPORT: (fileType: string) => `/einvoice/Draft/Export/${fileType}`, // POST - Belgeleri toplu olarak dışa aktarır
		OPERATION: (operationType: string) => `/einvoice/Draft/Operation/${operationType}`, // PUT - Toplu durum atama
		CONFIRM_AND_SEND: '/einvoice/Draft/ConfirmAndSend', // POST - Taslak faturayı onaylayıp gönderir
		EDIT_AND_SEND: '/einvoice/Draft/EditAndSend', // POST - Taslak faturayı düzenleyerek gönderir
		CREATE: '/einvoice/Draft/Create', // POST - Taslak fatura oluşturur
		CREATE_BULK: '/einvoice/Draft/CreateBulk', // POST - Toplu taslak fatura oluşturur
		WHATSAPP_HISTORY: (uuid: string) => `/einvoice/Draft/${uuid}/Whatsapphistories`, // GET - WhatsApp işlem geçmişini getirir
		SEND_VIA_WHATSAPP: '/einvoice/Draft/Whatsapp/Send', // POST - Taslak faturayı WhatsApp üzerinden gönderir
		UPDATE_SPECIAL_CODE: '/einvoice/Draft/SpecialCode', // PUT - Taslak faturaya özel kod atar
	},
	NOTIFICATION: {
		SALE: {
			LIST: '/einvoice/Notification/Sale', // GET - Satış faturası bildirim kurallarını listeler
			CREATE: '/einvoice/Notification/Sale', // POST - Satış faturası bildirim kuralı oluşturur
			UPDATE: '/einvoice/Notification/Sale', // PUT - Satış faturası bildirim kuralını günceller
			DELETE: (id: number) => `/einvoice/Notification/Sale/${id}`, // DELETE - Satış faturası bildirim kuralını siler
			GET: (id: number) => `/einvoice/Notification/Sale/${id}`, // GET - Satış faturası bildirim kuralını getirir
		},
		PURCHASE: {
			LIST: '/einvoice/Notification/Purchase', // GET - Alış faturası bildirim kurallarını listeler
			CREATE: '/einvoice/Notification/Purchase', // POST - Alış faturası bildirim kuralı oluşturur
			UPDATE: '/einvoice/Notification/Purchase', // PUT - Alış faturası bildirim kuralını günceller
			DELETE: (id: number) => `/einvoice/Notification/Purchase/${id}`, // DELETE - Alış faturası bildirim kuralını siler
			GET: (id: number) => `/einvoice/Notification/Purchase/${id}`, // GET - Alış faturası bildirim kuralını getirir
		},
	},
	OLD: {
		LIST: '/einvoice/Old', // GET - Eski faturaları listeler
		UPLOAD: '/einvoice/Old', // POST - Eski faturaları yükler
		HTML: (uuid: string) => `/einvoice/Old/${uuid}/html`, // GET - HTML dosyasını indirir
		PDF: (uuid: string) => `/einvoice/Old/${uuid}/pdf`, // GET - PDF dosyasını indirir
		XML: (uuid: string) => `/einvoice/Old/${uuid}/xml`, // GET - XML dosyasını indirir
		EXPORT: (fileType: string) => `/einvoice/Old/Export/${fileType}`, // POST - Faturaları toplu olarak dışa aktarır
		OPERATION: (operationType: string) => `/einvoice/Old/Operation/${operationType}`, // PUT - Toplu durum atama
	},
	PURCHASE: {
		LIST: '/einvoice/Purchase', // GET - Gelen faturaları listeler
		HTML: (uuid: string) => `/einvoice/Purchase/${uuid}/html`, // GET - HTML dosyasını indirir
		PDF: (uuid: string) => `/einvoice/Purchase/${uuid}/pdf`, // GET - PDF dosyasını indirir
		XML: (uuid: string) => `/einvoice/Purchase/${uuid}/xml`, // GET - XML dosyasını indirir
	},
};
