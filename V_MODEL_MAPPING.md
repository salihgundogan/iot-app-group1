# V-Model ve Yazılım Test Seviyeleri Eşleştirmesi

Bu doküman, projenin V-Model (V-Tipi Geliştirme Modeli) prensiplerine nasıl uygun hale getirildiğini açıklar. Her geliştirme aşaması, projemizde karşılık gelen bir test seviyesi ile doğrulanmaktadır.

## 1. V-Model Haritası

| Geliştirme Aşaması | Test Seviyesi | Projedeki Karşılığı (Dosya Yolu) | Açıklama |
| :--- | :--- | :--- | :--- |
| **Gereksinim Analizi** | **Kabul / Sistem Testi** | `tests/system/UserFlow.system.test.jsx` | Kullanıcının Splash -> Giriş -> Dashboard akışını ve ana özelliklerini (E2E) doğrular. |
| **Sistem Tasarımı** | **Sistem Testi** | `tests/system/UserFlow.system.test.jsx` | Tüm alt sistemlerin (Tema, Enerji Ölçer, Log) bir arada doğru çalışmasını doğrular. |
| **Mimari Tasarım** | **Entegrasyon Testi** | `tests/integration/AppLogic.integration.test.jsx` | UI Bileşenleri (Component) ile İş Mantığı (Logic) arasındaki iletişimi doğrular. |
| **Detaylı Tasarım** | **Birim (Unit) Testi** | `tests/unit/lightControl.test.js` | Fonksiyonların (Açma/Kapama, Parlaklık Kontrolü) matematiksel ve mantıksal doğruluğunu test eder. |

## 2. Testleri Çalıştırma Senaryoları

Bu yapı sayesinde hocamızın isteyebileceği "Her aşamanın testini ayrı gösterin" talebi teknik olarak karşılanmıştır:

- **Birim Testlerini Göster:** `npm run test:unit`
- **Entegrasyon Testlerini Göster:** `npm run test:integration`
- **Sistem Testlerini Göster:** `npm run test:system`
- **Tümünü Göster:** `npm test`

## 3. İzlenebilirlik (Traceability)
Her bir birim testi (`unit`), bir detaylı tasarım kararına dayanır. Her bir entegrasyon testi, mimari bir bileşenin etkileşimini kontrol eder. Sistem testleri ise NFR (Fonksiyonel Olmayan Gereksinimler) ve ana fonksiyonların son kullanıcı gözüyle çalıştığını kanıtlar.
