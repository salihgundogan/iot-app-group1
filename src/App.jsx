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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [screen, setScreen] = useState('splash');
  const [logs, setLogs] = useState([]);

  const addLog = useCallback((message) => {
    const time = new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setLogs(prev => [...prev, { time, message }]);
  }, []);

  const [isOn, setIsOn] = useState(false);
  const [brightness, setBrightness] = useState(50);
  const [isConnected, setIsConnected] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let timer;
    if (error) {
      timer = setTimeout(() => setError(''), 3000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  const toggleLight = useCallback(() => {
    if (!isConnected) {
      setError('Bağlantı hatası: Cihaza ulaşılamıyor. (Offline Mod)');
      addLog('Bağlantı Hatası: Komut iletilemedi.');
      return;
    }
    setTimeout(() => {
      setIsOn((prev) => {
        const newState = !prev;
        addLog(newState ? 'Işık açıldı.' : 'Işık kapatıldı.');
        return newState;
      });
    }, 100);
  }, [isConnected, addLog]);

  const handleBrightnessChange = useCallback((value) => {
    setBrightness(value);
  }, []);

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

  const handleAutoTurnOff = useCallback(() => {
    if (isOn) {
      setIsOn(false);
      addLog('Zamanlayıcı: Işık otomatik kapatıldı.');
    }
  }, [isOn, addLog]);

  if (screen === 'splash') {
    return <SplashScreen onFinish={() => setScreen('auth')} />;
  }

  if (screen === 'auth') {
    return (
      <div className="app-container" style={{ justifyContent: 'center', position: 'relative' }}>
        <button onClick={toggleTheme} className="theme-toggle" style={{ position: 'absolute', top: '20px', right: '20px' }}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <AuthContainer onLogin={() => {
          setScreen('dashboard');
          addLog('Oturum açıldı: Kullanıcı girişi başarılı.');
        }} theme={theme} />
      </div>
    );
  }

  return (
    <div className="app-container">
      {/* Header Alanı */}
      <header className="app-header">
        <div className="heading-wrapper">
          <h1>IoT Akıllı Ev</h1>
        </div>

        <div className="header-actions">
          <div className={`connection-badge ${isConnected ? 'online' : 'offline'}`}>
            {isConnected ? 'Online' : 'Offline'}
          </div>

          <button onClick={toggleTheme} className="theme-toggle" title="Temayı Değiştir">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => {
              setScreen('auth');
              addLog('Oturum kapatıldı.');
            }}
            className="theme-toggle"
            title="Çıkış Yap"
            style={{ marginLeft: '5px' }}
          >
            🚪
          </button>
        </div>
      </header>

      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <EnergyMeter brightness={brightness} isOn={isOn} />
      </div>

      <main className="app-content">
        <LightStatus isOn={isOn} theme={theme} />

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
