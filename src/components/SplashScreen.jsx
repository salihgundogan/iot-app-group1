import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SplashScreen = ({ onFinish }) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // 2 saniye sonra kaybolmaya başla
        const timer = setTimeout(() => {
            setOpacity(0);
        }, 2000);

        // Animasyon bitince (2.5sn) componenti sonlandır
        const finishTimer = setTimeout(() => {
            onFinish();
        }, 2500);

        return () => {
            clearTimeout(timer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div className="splash-screen" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#212121',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: opacity,
            transition: 'opacity 0.5s ease-out',
            zIndex: 9999
        }}>
            <div style={{ fontSize: '64px', marginBottom: '20px', animation: 'bounce 1s infinite' }}>
                🏠
            </div>
            <h1 style={{ color: '#FFD700', fontFamily: 'monospace' }}>IoT CONTROL</h1>
            <p style={{ color: '#888', marginTop: '10px' }}>Yükleniyor...</p>

            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
        </div>
    );
};

SplashScreen.propTypes = {
    onFinish: PropTypes.func.isRequired
};

export default SplashScreen;
