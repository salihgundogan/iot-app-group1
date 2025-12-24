import React from 'react';
import PropTypes from 'prop-types';

const LightStatus = ({ isOn, brightness, theme }) => {
    // Parlaklığa göre gölge ve parlama yoğunluğunu ayarla
    // brightness 0-100 arası bir değer
    const scale = brightness / 100;
    const shadowIntensity = 20 + (scale * 60); // 20px ile 80px arası
    const glowIntensity = 10 + (scale * 30); // 10px ile 40px arası
    const opacity = 0.4 + (scale * 0.5); // 0.4 ile 0.9 arası

    const shadowColor = theme === 'light'
        ? `rgba(255, 165, 0, ${opacity * 0.8})`
        : `rgba(255, 215, 0, ${opacity * 0.6})`;

    return (
        <div className="light-status-container" style={{ textAlign: 'center', padding: '15px' }}>
            <div
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: isOn
                        ? `radial-gradient(circle, rgba(255,215,0,${opacity}) 0%, rgba(255,215,0,${opacity * 0.2}) 70%)`
                        : 'var(--btn-bg)',
                    border: '1px solid var(--glass-border)',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                    boxShadow: isOn
                        ? `0 0 ${shadowIntensity}px ${shadowColor}, inset 0 0 ${glowIntensity}px rgba(255, 255, 255, ${opacity})`
                        : 'inset 0 0 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease-out',
                    backdropFilter: 'blur(5px)'
                }}
            >
                {isOn ? '💡' : '🌑'}
            </div>
            <h2 style={{
                marginTop: '15px',
                color: isOn ? `rgba(255, 215, 0, ${0.5 + scale * 0.5})` : 'var(--text-muted)',
                fontSize: '13px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                transition: 'color 0.3s ease'
            }}>
                {isOn ? 'Lights On' : 'Lights Off'}
            </h2>
        </div>
    );
};

LightStatus.propTypes = {
    isOn: PropTypes.bool.isRequired,
    brightness: PropTypes.number.isRequired,
    theme: PropTypes.string
};

export default LightStatus;
