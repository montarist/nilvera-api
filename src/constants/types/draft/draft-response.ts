export interface DraftResponse {
  Page: number;        // Geçerli sayfa numarası
  PageSize: number;    // Sayfa başına gösterilen kayıt sayısı
  TotalCount: number;  // Toplam kayıt sayısı
  TotalPages: number;  // Toplam sayfa sayısı
  Content: DraftContent[]; // Fatura içerikleri
}

export interface DraftContent {
  UUID: string;                     // Faturanın benzersiz kimliği
  TaxNumber: string;                // Vergi numarası
  InvoiceNumber: string;            // Fatura numarası
  InvoiceProfile: string;           // Fatura profili (ör. TEMELFATURA)
  InvoiceStatusDescription: string; // Fatura durumu açıklaması
  InvoiceType: string;              // Fatura türü (ör. SATIS)
  IssueDate: string;                // Faturanın düzenlenme tarihi (ISO 8601 formatında)
  CreatedDate: string;              // Faturanın oluşturulma tarihi (ISO 8601 formatında)
  Status: number;                   // Fatura durumu (0: beklemede, 1: onaylı, vb.)
  CurrencyCode: string;             // Döviz cinsi (ör. "TRY", "USD")
  PayableAmount: number;            // Ödenecek toplam tutar
  Alias: string;                    // Gönderen alias bilgisi
  ReceiverName: string;             // Alıcı adı
  ReceiverTaxNumber: string;        // Alıcı vergi numarası
  ReceiverAlias: string;            // Alıcı alias bilgisi
  IsPrint: boolean;                 // Faturanın yazdırılıp yazdırılmadığı
  Tags: Tag[];                      // Fatura için etiketler
  SpecialCode: string;              // Faturaya atanmış özel kod
}

export interface Tag {
  UUID: string;       // Etiket benzersiz kimliği
  Description: string; // Etiket açıklaması
  Name: string;        // Etiket adı
  Color: string;       // Etiket rengi
}
