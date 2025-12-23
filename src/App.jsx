import { useState, useCallback, useEffect } from 'react';
import LightStatus from './components/LightStatus';
import BrightnessSlider from './components/BrightnessSlider';
import ControlPanel from './components/ControlPanel';
import ErrorDisplay from './components/ErrorDisplay';
import SplashScreen from './components/SplashScreen';
import AuthContainer from './components/AuthContainer';
import ActivityLog from './components/ActivityLog';
import EnergyMeter from './components/EnergyMeter';
import AutoOffTimer from './components/AutoOffTimer';
import './App.css';

function App() {
  // --- Faz 3.5: Ekran Yönetimi ve Loglar ---
  const [screen, setScreen] = useState('splash'); // splash, auth, dashboard
  const [logs, setLogs] = useState([]);

  // Log ekleme fonksiyonu (Tarih saatli)
  const addLog = useCallback((message) => {
    const time = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, { time, message }]);
  }, []);

  // --- Faz 3: Mevcut State'ler ---
  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [isConnected, setIsConnected] = useState(true);
  const [error, setError] = useState('');

  // Hata mesajını otomatik temizleme
  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => {
        setError('');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  // Işık Kontrolü
  const toggleLight = useCallback(() => {
    if (!isConnected) {
      setError('Bağlantı hatası: Cihaza ulaşılamıyor. (Offline Mod)');
      addLog('Bağlantı Hatası: Komut iletilemedi.');
      return;
    }

    // Simüle edilmiş gecikme
    setTimeout(() => {
      setIsOn((prev) => {
        const newState = !prev;
        addLog(newState ? 'Işık açıldı.' : 'Işık kapatıldı.');
        return newState;
      });
    }, 100);
  }, [isConnected, addLog]);

  // Parlaklık Kontrolü
  const handleBrightnessChange = useCallback((value) => {
    setBrightness(value);
    // Her değişimde log basmamak için ("debounce" simülasyonu - burada sade bırakıyoruz)
  }, []);

  // Bağlantı Simülasyonu
  const toggleConnection = useCallback(() => {
    try {
      setIsConnected((prev) => {
        const newState = !prev;
        if (!newState) {
          setError('Cihaz bağlantısı kesildi.');
          addLog('Sistem: Bağlantı Koptu (Offline)');
        } else {
          setError('');
          addLog('Sistem: Bağlantı Kuruldu (Online)');
        }
        return newState;
      });
    } catch (err) {
      setError('Bağlantı işlemi sırasında beklenmeyen hata.');
      console.error(err);
    }
  }, [addLog]);

  // Otomatik Kapatma
  const handleAutoTurnOff = useCallback(() => {
    if (isOn) {
      setIsOn(false);
      addLog('Zamanlayıcı: Işık otomatik kapatıldı.');
    }
  }, [isOn, addLog]);

  // --- Ekran Akış Kontrolü ---

  if (screen === 'splash') {
    return <SplashScreen onFinish={() => setScreen('auth')} />;
  }

  if (screen === 'auth') {
    return (
      <div className="app-container" style={{ justifyContent: 'center' }}>
        <AuthContainer onLogin={() => {
          setScreen('dashboard');
          addLog('Oturum açıldı: Kullanıcı girişi başarılı.');
        }} />
      </div>
    );
  }

  // --- Dashboard ---
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>IoT Akıllı Ev Kontrolü</h1>
        <div className={`connection-badge ${isConnected ? 'online' : 'offline'}`}>
          {isConnected ? 'Online' : 'Offline'}
        </div>
      </header>

      <EnergyMeter brightness={brightness} isOn={isOn} />

      <main className="app-content">
        <LightStatus isOn={isOn} />

        <div className="controls-wrapper">
          <BrightnessSlider
            brightness={brightness}
            onChange={handleBrightnessChange}
            disabled={!isOn || !isConnected}
          />

          <AutoOffTimer isOn={isOn} onTurnOff={handleAutoTurnOff} />

          <ControlPanel
            onToggleLight={toggleLight}
            isLightOn={isOn}
            onToggleConnection={toggleConnection}
            isConnected={isConnected}
          />
        </div>

        <ErrorDisplay message={error} />

        <ActivityLog logs={logs} />
      </main>

      <footer className="app-footer">
        Faz 3: Geliştirme ve Kalite Raporu
      </footer>
    </div>
  );
}

export default App;
