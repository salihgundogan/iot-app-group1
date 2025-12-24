# Birim (Unit) Test Dokümantasyonu

Projeye ait birim testleri çalıştırmak ve sonuçlarını raporlayan arkadaşına iletmek için aşağıdaki adımları takip edebilirsin.

## 1. Testleri Çalıştırma

Terminalden (proje dizininde olduğundan emin ol) şu komutu çalıştırarak testleri görebilirsin:

```bash
# Tüm testleri çalıştır
npm test

# Sadece Birim (Unit) Testleri
npm run test:unit

# Sadece Entegrasyon Testleri
npm run test:integration

# Sadece Sistem/Kabul Testleri
npm run test:system
```

## 2. Çıktıyı Dosyaya Kaydetme (Arkadaşına Atmak İçin)

Eğer test sonuçlarını bir dosya olarak arkadaşına göndermek istiyorsan, terminalde şu komutu çalıştır:

```bash
npm test > test-sonuclari.txt 2>&1
```

Bu komut, terminalde göreceğin her şeyi `test-sonuclari.txt` adında bir dosyaya kaydeder. Bu dosyayı arkadaşına gönderebilirsin.

## 3. Test İçeriği
Şu an projede `src/logic/lightControl.test.js` dosyasında aşağıdaki kontroller yapılmaktadır:
- Işık açma/kapama mantığı (Bağlantı varken)
- Bağlantı hatası durumunda hata fırlatılması
- Parlaklık değeri doğrulama (0-100 arası kontrolü)
