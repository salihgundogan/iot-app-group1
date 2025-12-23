import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const SplashScreen = ({ onFinish }) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(0);
        }, 2000);

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
            background: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: opacity,
            transition: 'opacity 0.5s ease-out',
            zIndex: 9999
        }}>
            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                marginBottom: '30px',
                animation: 'float 3s ease-in-out infinite'
            }}>
                💡
            </div>

            <h1 style={{
                color: 'white',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                letterSpacing: '5px',
                fontSize: '24px',
                textShadow: '0 0 10px rgba(255,255,255,0.3)'
            }}>
                IOT CONTROL
            </h1>

            <div style={{
                width: '150px',
                height: '4px',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '2px',
                marginTop: '20px',
                overflow: 'hidden'
            }}>
                <div style={{
                    height: '100%',
                    width: '50%',
                    background: '#FFD700',
                    animation: 'loading 1.5s infinite ease-in-out',
                    borderRadius: '2px'
                }} />
            </div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
        </div>
    );
};

SplashScreen.propTypes = {
    onFinish: PropTypes.func.isRequired
};

export default SplashScreen;
