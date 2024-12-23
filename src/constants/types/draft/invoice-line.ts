import { Tax } from './tax-type';

export interface InvoiceLine {
	Index: number; // Satır indeksi
	Name: string; // Satır adı
	Quantity: number; // Miktar
	UnitType: string; // Birim türü
	Price: number; // Satır fiyatı
	Description?: string; // Opsiyonel: Satır açıklaması
	Taxes?: Tax[]; // Opsiyonel: Vergi bilgileri
}
