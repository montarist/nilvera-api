export interface Tax {
	TaxCode: string; // Vergi kodu
	Total: number; // Toplam tutar
	Percent: number; // Vergi oranı
	ReasonCode?: string; // Opsiyonel: Vergi muafiyet sebep kodu
	ReasonDesc?: string; // Opsiyonel: Vergi muafiyet açıklaması
}
