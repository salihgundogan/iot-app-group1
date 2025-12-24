# IoT Akıllı Ev Projesi - Yazılım Kalite Güvence ve Test Raporu

## 1. Giriş ve Amaç
Bu proje kapsamında, yazılım kalitesini en üst düzeye çıkarmak ve hataları erken aşamalarda tespit etmek amacıyla **V-Model (Verification and Validation Model)** geliştirme metodolojisi benimsenmiştir. V-Model, her geliştirme aşamasının (Analiz, Tasarım, Kodlama) karşılığında bir test aşamasının bulunmasını öngörür. Bu yaklaşım, projemizin **ISO 25010** kalite standartlarına uygunluğunu teknik olarak kanıtlamamızı sağlamıştır.

## 2. V-Model Uygulama Haritası

Projemizde V-Model'in sol kanadındaki (Geliştirme) aşamalar, sağ kanadındaki (Test) aşamalarla aşağıdaki gibi eşleştirilmiştir:

| Geliştirme Aşaması (Sol Kanat) | Test Seviyesi (Sağ Kanat) | Test Dosyası ve Kapsam |
| :--- | :--- | :--- |
| **Gereksinim Analizi** | **Kabul / Sistem Testleri** | `tests/system/UserFlow.system.test.jsx`<br>Kullanıcının uygulamayı baştan sona (E2E) kullanımı test edilir. |
| **Mimari Tasarım** | **Entegrasyon Testleri** | `tests/integration/AppLogic.integration.test.jsx`<br>Arayüz (UI) ve Mantık (Logic) katmanlarının uyumu test edilir. |
| **Detaylı Tasarım** | **Birim (Unit) Testleri** | `tests/unit/lightControl.test.js`<br>Tekil fonksiyonların matematiksel doğruluğu test edilir. |

## 3. Test Seviyeleri ve Teknik Detaylar

### 3.1. Birim (Unit) Testleri - Detaylı Tasarım Doğrulaması
*   **Amaç:** Sistemin en küçük yapı taşı olan iş mantığının (Business Logic) hatasız çalıştığını doğrulamak.
*   **Kullanılan Dosya:** `tests/unit/lightControl.test.js`
*   **Neyi Test Ettik?**
    *   Işık açma/kapama mantığının internet bağlantısı varken ve yokken doğru çalışması.
    *   Parlaklık değerinin (0-100) sınırları dışında girilmesi durumunda sistemin hata fırlatması.
*   **ISO 25010 İlişkisi (Reliability):** **Güvenilirlik (NFR-2)** gereksinimi kapsamında, sistemin hata durumlarında çökmediği ("Fail Gracefully") kanıtlanmıştır.

### 3.2. Entegrasyon (Integration) Testleri - Mimari Tasarım Doğrulaması
*   **Amaç:** Farklı modüllerin (Örn: Arayüz ve Arka Plan Mantığı) birbiriyle uyumlu çalıştığını doğrulamak.
*   **Kullanılan Dosya:** `tests/integration/AppLogic.integration.test.jsx`
*   **Neyi Test Ettik?**
    *   Kullanıcı "AÇ" butonuna bastığında arayüzün güncellenmesi.
    *   Simüle edilmiş bir ağ gecikmesi (100ms) altında sistemin tepki süresi.
    *   Bağlantı koptuğunda butonların devre dışı (disabled) bırakılması.
*   **ISO 25010 İlişkisi (Performance):** **Performans Verimliliği (NFR-1)** gereksinimi kapsamında, sistemin kullanıcı komutlarına 500ms altında tepki verdiği doğrulanmıştır.

### 3.3. Sistem (System) Testleri - Gereksinim Analizi Doğrulaması
*   **Amaç:** Yazılımın bir bütün olarak, son kullanıcı gereksinimlerini karşılayıp karşılamadığını doğrulamak.
*   **Kullanılan Dosya:** `tests/system/UserFlow.system.test.jsx`
*   **Neyi Test Ettik?**
    *   Splash ekranından Giriş ekranına geçiş.
    *   Başarılı kullanıcı girişi ve Dashboard'a yönlendirme.
    *   Tema değiştirme (Dark/Light Mode) fonksiyonu.
    *   Oturum kapatma işlemi.
*   **ISO 25010 İlişkisi (Usability):** **Kullanılabilirlik (NFR-3)** gereksinimi kapsamında, arayüz akışının ve etkileşim öğelerinin (butonlar, temalar) doğru çalıştığı kanıtlanmıştır.

## 4. Testlerin Yürütülmesi ve Raporlama

Test altyapısı olarak **Jest** ve **React Testing Library** kullanılmıştır. Testlerin çalıştırılması için `package.json` dosyasında özel scriptler tanımlanmıştır.

**Uygulama Adımları:**
1.  Proje dizininde terminal açılır.
2.  Tüm testleri çalıştırmak ve rapor almak için şu komut kullanılır:
    ```bash
    npm run test:report
    ```
3.  Bu komut, hem Unit, hem Integration hem de System testlerini sırasıyla çalıştırır.
4.  Sonuçlar `test-sonuclari.txt` dosyasına otomatik olarak kaydedilir.

**Mevcut Başarı Durumu:**
*   **Toplam Test Sayısı:** 9
*   **Başarılı Test Sayısı:** 9 (%100 Başarı)
*   **Toplam Süre:** ~6.3 Saniye

## 5. Sonuç
Bu test çalışması ile IoT Akıllı Ev projesinin sadece kodlanmış bir yazılım olmadığı; **güvenilir**, **performanslı** ve **kullanılabilir** olduğu uluslararası standartlara (V-Model ve ISO 25010) uygun test senaryolarıyla doğrulanmıştır.
