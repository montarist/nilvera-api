  
  // KDV Tevkifat Kodları
  export const VAT_WITHHOLDING_CODES = {
    YAPIM_ISLERI_VE_MUHENDISLIK_HIZMETLERI: 601, // 40% Yapım İşleri ile Bu İşlerle Birlikte İfa Edilen Mühendislik-Mimarlık ve Etüt-Proje Hizmetleri
    ETUT_PLAN_PROJE_HIZMETLERI: 602, // 90% Etüt, Plan-Proje, Danışmanlık, Denetim ve Benzeri Hizmetler
    MAKINE_TECIHAZ_VE_TASIT_BAKIM_ONARIM: 603, // 70% Makine, Teçhizat, Demirbaş ve Taşıtlara Ait Tadil, Bakım, Onarım Hizmetleri
    YEMEK_SERVISI: 604, // 50% Yemek Servis Hizmeti
    ORGANIZASYON_HIZMETLERI: 605, // 50% Organizasyon Hizmeti
    ISGUCU_TEMIN_HIZMETLERI: 606, // 90% İşgücü Temin Hizmetleri
    OZEL_GUVENLIK_HIZMETLERI: 607, // 90% Özel Güvenlik Hizmeti
    YAPI_DENETIM_HIZMETLERI: 608, // 90% Yapı Denetim Hizmetleri
    TEKSTIL_VE_KONFEKSIYON: 609, // 70% Fason Tekstil ve Konfeksiyon İşleri
    TURISTIK_MAGAZA_HIZMETLERI: 610, // 90% Turistik Mağazalara Verilen Müşteri Bulma/Götürme Hizmetleri
    SPOR_KULUPLERI_REKLAM_ISIM_HAKKI: 611, // 90% Spor Kulüplerinin Yayın, Reklam ve İsim Hakkı İşlemleri
    TEMIZLIK_HIZMETLERI: 612, // 90% Temizlik Hizmeti
    CEVRE_VE_BAHCE_BAKIM_HIZMETLERI: 613, // 90% Çevre ve Bahçe Bakım Hizmetleri
    SERVIS_TASIMACILIGI_HIZMETLERI: 614, // 50% Servis Taşımacılığı Hizmeti
    BASKI_VE_BASIM_HIZMETLERI: 615, // 70% Baskı ve Basım Hizmetleri
    HURDA_METAL_KULCE_TESLIMI: 617, // 70% Hurda Metalden Elde Edilen Külçe Teslimleri
    DIGER_METALLER_KULCE_TESLIMI: 618, // 70% Bakır, Çinko, Demir-Çelik, Alüminyum ve Kurşun Külçe Teslimleri
    BAKIR_VE_ALUMINYUM_TESLIMLERI: 619, // 70% Bakır, Çinko ve Alüminyum Ürünlerinin Teslimi
    HURDA_VE_ATIK_TESLIMLERI: 620, // 70% İstisnadan Vazgeçenlerin Hurda ve Atık Teslimleri
    HURDADAN_HAMMADDE: 621, // 90% Metal, Plastik, Lastik, Kauçuk, Kağıt ve Cam Hurda ve Atıklardan Elde Edilen Hammadde Teslimi
    PAMUK_VE_TIFTIK: 622, // 90% Pamuk, Tiftik, Yün ve Ham Post ve Deri Teslimleri
    AGAC_ORMAN_URUNLERI: 623, // 50% Ağaç ve Orman Ürünleri Teslimi
    YUK_TASIMACILIGI: 624, // 20% Yük Taşımacılığı Hizmeti
    TICARI_REKLAM_HIZMETLERI: 625, // 30% Ticari Reklam Hizmetleri
    DEMIR_CELIK_URUNLERI: 627, // 50% Demir-Çelik Ürünlerinin Teslimi
    YAPIM_ISLERI_MUHENDISLIK_100: 801, // 100% Yapım İşleri ile Bu İşlerle Birlikte İfa Edilen Mühendislik-Mimarlık ve Etüt-Proje Hizmetleri
    ETUT_PLAN_PROJE_100: 802, // 100% Etüt, Plan-Proje, Danışmanlık, Denetim ve Benzeri Hizmetler
    MAKINE_BAKIM_ONARIM_100: 803, // 100% Makine, Teçhizat, Demirbaş ve Taşıtlara Ait Tadil, Bakım, Onarım Hizmetleri
    YEMEK_SERVISI_100: 804, // 100% Yemek Servis Hizmeti
    ORGANIZASYON_HIZMETLERI_100: 805, // 100% Organizasyon Hizmeti
    ISGUCU_TEMIN_100: 806, // 100% İşgücü Temin Hizmetleri
    OZEL_GUVENLIK_100: 807, // 100% Özel Güvenlik Hizmeti
    YAPI_DENETIM_100: 808, // 100% Yapı Denetim Hizmetleri
    FASON_TEKSTIL_100: 809, // 100% Fason Olarak Yaptırılan Tekstil ve Konfeksiyon İşleri
    TURISTIK_MAGAZA_HIZMETLERI_100: 810, // 100% Turistik Mağazalara Verilen Müşteri Bulma/Götürme Hizmetleri
    SPOR_KULUPLERI_REKLAM_ISIM_HAKKI_100: 811, // 100% Spor Kulüplerinin Yayın, Reklam ve İsim Hakkı İşlemleri
    TEMIZLIK_HIZMETLERI_100: 812, // 100% Temizlik Hizmeti
    CEVRE_BAHCE_BAKIM_100: 813, // 100% Çevre ve Bahçe Bakım Hizmetleri
    SERVIS_TASIMACILIGI_100: 814, // 100% Servis Taşımacılığı Hizmeti
    BASKI_BASIM_HIZMETLERI_100: 815, // 100% Baskı ve Basım Hizmetleri
    HURDA_METALDEN_KULCE_100: 816, // 100% Hurda Metalden Elde Edilen Külçe Teslimleri
    DIGER_METALLER_KULCE_100: 817, // 100% Hurda Metalden Elde Edilenler Dışındaki Bakır, Çinko, Demir-Çelik, Alüminyum ve Kurşun Külçe Teslimleri
    BAKIR_CINKO_ALUMINYUM_100: 818, // 100% Bakır, Çinko ve Alüminyum Ürünlerinin Teslimi
    ISTISNADAN_VAZGECENLER_HURDA_100: 819, // 100% İstisnadan Vazgeçenlerin Hurda ve Atık Teslimi
    HURDA_ATIK_HAMMADDE_100: 820, // 100% Metal, Plastik, Lastik, Kauçuk, Kağıt ve Cam Hurda ve Atıklardan Elde Edilen Hammadde Teslimi
    PAMUK_TIFTIK_YUN_100: 821, // 100% Pamuk, Tiftik, Yün ve Ham Post ve Deri Teslimleri
    AGAC_ORMAN_URUNLERI_100: 822, // 100% Ağaç ve Orman Ürünleri Teslimi
    YUK_TASIMACILIGI_100: 823, // 100% Yük Taşımacılığı Hizmeti
    TICARI_REKLAM_HIZMETLERI_100: 824, // 100% Ticari Reklam Hizmetleri
    DEMIR_CELIK_URUNLERI_100: 825, // 100% Demir-Çelik Ürünlerinin Teslimi
  };
  
