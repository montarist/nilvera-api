export interface DraftRequest {
    PageSize?: number; // Sayfa başına döndürülecek kayıt sayısı
    Page?: number;     // Hangi sayfanın getirileceği
    Search?: string;   // Arama yapılacak metin
    StartDate?: string; // Başlangıç tarihi (ISO 8601 formatında, örn. '2024-12-23T10:00:00Z')
    EndDate?: string;   // Bitiş tarihi (ISO 8601 formatında)
  }
  
  