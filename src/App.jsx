import { useState, useCallback, useEffect } from 'react';
import LightStatus from './components/LightStatus';
import BrightnessSlider from './components/BrightnessSlider';
import ControlPanel from './components/ControlPanel';
import ErrorDisplay from './components/ErrorDisplay';
import './App.css';

function App() {
  // State tanımları (R2 - Ortak State Yönetimi)
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [isConnected, setIsConnected] = useState(true);
  const [error, setError] = useState('');

  // Hata mesajını otomatik temizleme (R6 - Bellek Sızıntısı Önlemi)
  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => clearTimeout(timer); // Cleanup function
  }, [error]);

  // Işık Kontrolü (FR-1, NFR-1 Performans)
  const toggleLight = useCallback(() => {
    if (!isConnected) {
      setError('Bağlantı hatası: Cihaza ulaşılamıyor. (Offline Mod)');
      return;
    }

    // Simüle edilmiş gecikme testi (NFR-1)
    setTimeout(() => {
      setIsOn((prev) => !prev);
    }, 100); // 500ms altında, 100ms makul
  }, [isConnected]);

  // Parlaklık Kontrolü (FR-2)
  const handleBrightnessChange = useCallback((value) => {
    setBrightness(value);
  }, []);

  // Bağlantı Simülasyonu (FR-3, NFR-2)
  const toggleConnection = useCallback(() => {
    // try-catch bloğu (R4 - Hata Yönetimi) - Simülasyon için sembolik
    try {
      setIsConnected((prev) => {
        const newState = !prev;
        if (!newState) {
          setError('Cihaz bağlantısı kesildi.');
        } else {
          setError('');
        }
        return newState;
      });
    } catch (err) {
      setError('Bağlantı işlemi sırasında beklenmeyen hata.');
      console.error(err);
    }
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>IoT Akıllı Ev Kontrolü</h1>
        <div className={`connection-badge ${isConnected ? 'online' : 'offline'}`}>
          {isConnected ? 'Online' : 'Offline'}
        </div>
      </header>

      <main className="app-content">
        <LightStatus isOn={isOn} />

        <div className="controls-wrapper">
          <BrightnessSlider
            brightness={brightness}
            onChange={handleBrightnessChange}
            disabled={!isOn || !isConnected}
          />

          <ControlPanel
            onToggleLight={toggleLight}
            isLightOn={isOn}
            onToggleConnection={toggleConnection}
            isConnected={isConnected}
          />
        </div>

        <ErrorDisplay message={error} />
      </main>

      <footer className="app-footer">
        Faz 3: Geliştirme ve Kalite Raporu
      </footer>
    </div>
  );
}

export default App;
