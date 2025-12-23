# 📂 ANTIGRAVITY: IoT Akıllı Ev - Işık Kontrol Arayüzü

**Proje Kodu:** ANTIGRAVITY | **Faz:** 3 (Geliştirme ve Kalite Raporu)

Bu proje, **ISO 25010** yazılım kalite standartlarına uygun olarak geliştirilmiş, React tabanlı bir akıllı ev simülasyon arayüzüdür. Kullanıcıların bir ışık kaynağını uzaktan kontrol etmesini, parlaklık seviyesini ayarlamasını ve bağlantı durumlarını simüle etmesini sağlar.

## 🚀 Proje Hakkında

**Hedef:** Güvenilir, performanslı ve kullanıcı dostu (mobil uyumlu) bir IoT kontrol paneli geliştirmek.
**Yöntem:** V-Modeli
**Mimari:** Sanal Cihaz (Mock Device) Mimarisi

### Öne Çıkan Özellikler

*   **⚡ Durum Kontrolü (LightStatus):** Işık durumu anlık olarak görselleştirilir (Açık/Kapalı ikon ve renk değişimi).
*   **💡 Parlaklık Ayarı (BrightnessSlider):** %0 ile %100 arasında hassas parlaklık kontrolü.
*   **🔌 Bağlantı Simülasyonu (Offline Mod):** Gerçek hayat senaryolarını test etmek için "Bağlantıyı Kes/Bağlan" özelliği.
*   **♿ Erişilebilirlik (A11y):** Renk körü dostu tasarım, minimum 44px buton boyutları ve açıklayıcı hata mesajları.
*   **🛡️ Hata Yönetimi:** Bağlantı koptuğunda veya hata oluştuğunda kullanıcıyı bilgilendiren **ErrorDisplay** bileşeni.

## 🛠️ Teknolojiler

*   **Frontend:** React (Vite)
*   **Dil:** JavaScript (ES6+)
*   **Stil:** CSS3 (Responsive Design, Flexbox)
*   **Kalite Kontrol:** ESLint, Prettier, PropTypes

## ⚙️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Repoyu Klonlayın:**
    ```bash
    git clone https://github.com/salihgundogan/iot-app-group1.git
    cd proje3
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    # veya
    yarn
    ```

3.  **Uygulamayı Başlatın:**
    ```bash
    npm run dev
    ```
    Uygulama genellikle `http://localhost:5173` adresinde çalışacaktır.

## 📁 Proje Yapısı

```
proje3/
├── src/
│   ├── components/       # UI Bileşenleri (LightStatus, ControlPanel vb.)
│   ├── services/         # (Planlanan) API servisleri
│   ├── App.jsx           # Ana uygulama mantığı ve State yönetimi
│   ├── App.css           # Global ve bileşen stilleri
│   └── main.jsx          # Uygulama giriş noktası
├── eslint.config.js      # Kod kalitesi kuralları
└── index.html            # Ana HTML şablonu
```

## 👥 Proje Ekibi

*   **Zeynep:** Frontend Geliştirme & UI Tasarımı (Faz 3 Sorumlusu)
*   **Salih:** Backend & Test Otomasyonu
*   **Alper:** Kalite Güvence (QA) & Raporlama

---
*Bu proje Yazılım Kalite Standartları dersi final ödevi kapsamında geliştirilmiştir.*
