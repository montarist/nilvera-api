
  // KDV Muafiyet Sebepleri
  export const VAT_EXEMPTION_REASONS = {
    KULTUR_EGITIM_AMACI: 201, // 17/1 Kültür ve Eğitim Amacı Taşıyan İşlemler
    SAGLIK_CEVRE_SOSYAL_YARDIM_AMACI: 202, // 17/2-a Sağlık, Çevre ve Sosyal Yardım Amaçlı İşlemler
    YABANCI_DIPLOMATIK_ORGAN_BAGIS: 204, // 17/2-c Yabancı Diplomatik Organ ve Hayır Kurumlarının Bağışları
    TASINMAZ_KULTUR_VARLIK_HIZMETLERI: 205, // 17/2-d Taşınmaz Kültür Varlıklarına İlişkin Teslimler ve Mimarlık Hizmetleri
    MESLEKI_KURULUSLAR_ISLEMLERI: 206, // 17/2-e Mesleki Kuruluşların İşlemleri
    ASKERI_ISLEMLER: 207, // 17/3 Askeri Fabrika, Tersane ve Atölyelerin İşlemleri
    BIRLESME_DEVIR_DONUSUM_BOLUNME: 208, // 17/4-c Birleşme, Devir, Dönüşüm ve Bölünme İşlemleri
    BANKA_SIGORTA_MUALEMLERI: 209, // 17/4-e Banka ve Sigorta Muameleleri Vergisi Kapsamına Giren İşlemler
    ZIRAI_SU_TESLIMLERI: 211, // 17/4-h Zirai Amaçlı Su Teslimleri ve Köy Tüzel Kişiliklerince İçme Suyu Teslimleri
    SERBEST_BOLGELERDE_HIZMETLER: 212, // 17/4-ı Serbest Bölgelerde Verilen Hizmetler
    PETROL_VE_GAZ_TASIMACILIGI: 213, // 17/4-j Boru Hattı ile Yapılan Petrol ve Gaz Taşımacılığı
    OSB_VE_KONUT_TESLIMLERI: 214, // 17/4-k Organize Sanayi Bölgeleri Arsa ve İşyeri Teslimleri ile Konut Yapı Kooperatiflerinin Teslimleri
    VARLIK_YONETIM_ISLEMLERI: 215, // 17/4-l Varlık Yönetim Şirketlerinin İşlemleri
    TASARRUF_MEVDUATI_FONU: 216, // 17/4-m Tasarruf Mevduatı Sigorta Fonunun İşlemleri
    HABER_HIZMETLERI: 217, // 17/4-n Basın-Yayın ve Enformasyon Genel Müdürlüğüne Verilen Haber Hizmetleri
    KDV_ANTREPO_HIZMETLERI: 218, // KDV 17/4-o Gümrük Antrepoları, Geçici Depolama Yerleri ve Vergisiz Satış Yapılan İşyeri Hizmetleri
    HAZINE_ARSASI_ISLEMLERI: 219, // 17/4-p Hazine ve Arsa Ofisi Genel Müdürlüğünün İşlemleri
    TAM_YIL_TASINMAZ_SATISLARI: 220, // 17/4-r İki Tam Yıl Süreyle Sahip Olunan Taşınmaz Satışları
    KONUT_YAPI_INSAAT_TAAHHUT: 221, // Geçici 15 Konut Yapı Kooperatiflerine İnşaat Taahhüt Hizmetleri
    TEKNOLOJI_BOLGELERI_ISLEMLER: 223, // Geçici 20/1 Teknoloji Geliştirme Bölgelerinde Yapılan İşlemler
    BILGISAYAR_BAGISLARI: 225, // Geçici 23 Milli Eğitim Bakanlığına Bilgisayar Bağışları
    OZEL_OKUL_BEDAVA_EGITIM: 226, // 17/2-b Özel Okullarda Verilen Bedelsiz Eğitim Hizmetleri
    KURUMLARA_BEDAVA_HIZMET: 227, // 17/2-b Kanun Gereği Bedelsiz Hizmet Teslimleri
    GIDA_BANKACILIGI_BAGIS: 229, // 17/2-b Gıda Bankacılığı Faaliyetlerinde Bulunanlara Bağış
    KULCE_ALTIN_GUMUS: 230, // 17/4-g Külçe Altın ve Gümüş Teslimi
    HURDA_VE_ATIK_TESLIMI: 231, // 17/4-g Hurda ve Atık Teslimleri
    DOVIZ_VE_TAHSILAT: 232, // 17/4-g Döviz, Para ve Damga Pulu Teslimi
    IPOTEKLI_KONUT: 234, // 17/4-ş İpotekli Konut Teslimleri
    TRANSIT_MALLAR: 235, // 16/1-c Transit ve Gümrük Antrepo Rejimine Tabi Mallar
    ULUSLARARASI_ANLASMALAR: 236, // 19/2 Usulüne Göre Uluslararası Anlaşmalar Kapsamındaki İstisnalar
    URUN_SENETLERI_TESLIMI: 237, // 17/4-t Ürün Senetlerinin Teslimi
    VARLIK_KIRALAMA_DEVRI: 238, // 17/4-u Varlık Kiralama Şirketlerine Devri
    FINANSAL_KIRALAMA: 239, // 17/4-y Finansal Kiralama Şirketi İşlemleri
    PATENT_HAKLARI: 240, // 17/4-z Patent ve Faydalı Model Belgeleri ile İlgili Haklar
    TURK_AKIM_HIZMETLER: 241, // Türk Akım Gaz Boru Hattı Projesi Hizmetleri
    GUMRUK_HIZMETLERI: 242, // KDV 17/4-ö Gümrük Antrepolarında Hizmetler
    KISMI_ISTISNA_DIGERLERI: 250, // Kısmi İstisna Diğerleri
    MAL_IHRACATI: 301, // 11/1-a Mal İhracatı
    HIZMET_IHRACATI: 302, // 11/1-a Hizmet İhracatı
    ROAMING_HIZMETLERI: 303, // 11/1-a Roaming Hizmetleri
    DENIZ_HAVA_TASIMA_ARACLARI: 304, // 13/a Deniz, Hava ve Demiryolu Araçları Teslimleri
    LIMAN_VE_HAVA_HIZMETLERI: 305, // 13/b Liman ve Hava Meydanlarında Yapılan Hizmetler
    PETROL_ARAMA_HIZMETLERI: 306, // 13/c Petrol Aramaları ve Boru Hatları Hizmetleri
    MADEN_ARAMA_ISLEMLERI: 307, // 13/c Maden Arama ve İşleme Hizmetleri
    TESVIKLI_YATIRIM_MALLARI: 308, // 13/d Teşvikli Yatırım Malları Teslimleri
    LIMAN_INSA_YENILEME: 309, // 13/e Liman ve Hava Meydanlarının İnşası ve Yenilenmesi
    ULUSAL_GUVENLIK_HIZMETLERI: 310, // 13/f Ulusal Güvenlik Amaçlı Teslim ve Hizmetler
    ULUSLARARASI_TASIMACILIK: 311, // 14/1 Uluslararası Taşımacılık
    DIPLOMATIK_ORGAN_HIZMETLERI: 312, // 15/a Diplomatik Organlara Teslim ve Hizmetler
    ULUSLARARASI_KURULUSLAR: 313, // 15/b Uluslararası Kuruluşlara Teslim ve Hizmetler
    MOTORIN_TESLIMLERI: 315, // 14/3 Motorin Teslimleri
    SERBEST_BOLGEDE_FASON: 316, // 11/1-a Serbest Bölgelerde Fason Hizmetler
    ENGELLILERE_OZEL_HIZMETLER: 317, // 17/4-s Engellilere Yönelik Hizmetler
    IMALAT_SANAYII_PROJELERI: 318, // Geçici 29 İmalat Sanayi Projeleri
    BASBAKANLIK_ARACLARI: 319, // 13/g Başbakanlık Araç Teslimleri
    ISTANBUL_PROJE_KOORDINASYON: 320, // Geçici 16 İstanbul Proje Koordinasyon Birimi
    BIRLES_MILLETLER_NATO: 321, // Geçici 26 BM, NATO ve Bağlı Kuruluşlara Teslimler
    TURKIYEDE_IKAMET_ETMEYENLER: 322, // 11/1-a Türkiye'de İkamet Etmeyenlere Yapılan Teslimler
    TURKIYE_KIZILAY: 324, // 13/h Türkiye Kızılay Derneği Hizmetleri
    YEM_TESLIMLERI: 325, // 13/ı Yem Teslimleri
    GUBRE_TESLIMLERI: 326, // 13/ı Gıda, Tarım ve Hayvancılık Bakanlığı Tarafından Tescil Edilmiş Gübre Teslimleri
    GUBRE_HAMMADDELERI: 327, // 13/ı Gıda, Tarım ve Hayvancılık Bakanlığı Tarafından Tescil Edilmiş Gübre Hammaddelerinin Teslimleri
    KONUT_ISYERI_TESLIMLERI: 328, // 13/i Konut veya İşyeri Teslimleri
    OSB_KUCUK_SANAYI: 330, // KDV 13/j Organize Sanayi Bölgeleri ve Küçük Sanayi Siteleri Teslimleri
    ARGE_YENILIK_TASARIM: 331, // KDV 13/m Ar-Ge, Yenilik ve Tasarım Faaliyetlerine Yönelik Teslimler
    IMALAT_SANAYI_MAKINE: 332, // KDV Geçici 39 İmalat Sanayinde Kullanılan Makine ve Teçhizat Teslimleri
    KAMU_IDARELERI_BAGIS: 333, // KDV 13/k Kamu İdarelerine Bağışlanan Tesislerin Teslimleri
    YABANCILARA_SAGLIK_HIZMETLERI: 334, // KDV 13/l Yabancılara Verilen Sağlık Hizmetleri
    BASILI_KITAP_VE_YAYIN: 335, // KDV 13/n Basılı Kitap ve Süreli Yayınların Teslimleri
    UEFA_MUSABAKALARI: 336, // Geçici 40 UEFA Müsabakaları Kapsamında Yapılacak Teslim ve Hizmetler
    TURK_AKIM_GAZ_TASIMA: 337, // Türk Akım Gaz Boru Hattı Projesi Hizmetleri
    IMALATCILARIN_IHRACATLARI: 338, // İmalatçıların Mal İhracatları
    IMALAT_TURIZM_YATIRIMLARI: 339, // İmalat Sanayii ile Turizme Yönelik Yatırım Teşvik Belgeleri
    ELEKTRIK_ARACLARI_MUHENDISLIK: 340, // Elektrik Motorlu Taşıt Araçlarının Geliştirilmesine Yönelik Mühendislik Hizmetleri
    ISTISNA_DIGER: 350, // İstisna Diğer
  };
