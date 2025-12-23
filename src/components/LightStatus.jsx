import React from 'react';
import PropTypes from 'prop-types';

const LightStatus = ({ isOn, theme }) => {
    // Light modda açıkken gölge rengi biraz daha farklı olabilir
    const shadowColor = theme === 'light' ? 'rgba(255, 165, 0, 0.6)' : 'rgba(255, 215, 0, 0.4)';

    return (
        <div className="light-status-container" style={{ textAlign: 'center', padding: '20px' }}>
            <div
                style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    background: isOn
                        ? 'radial-gradient(circle, rgba(255,215,0,0.9) 0%, rgba(255,215,0,0.2) 70%)'
                        : 'var(--btn-bg)',
                    border: '1px solid var(--glass-border)',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '56px',
                    boxShadow: isOn
                        ? `0 0 50px ${shadowColor}, inset 0 0 20px rgba(255, 255, 255, 0.5)`
                        : 'inset 0 0 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                {isOn ? '💡' : '🌑'}
            </div>
            <h2 style={{
                marginTop: '20px',
                color: isOn ? '#FFD700' : 'var(--text-muted)', // Açıkken sarı, kapalıyken tema rengi
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            }}>
                {isOn ? 'Lights On' : 'Lights Off'}
            </h2>
        </div>
    );
};

LightStatus.propTypes = {
    isOn: PropTypes.bool.isRequired,
    theme: PropTypes.string
};

export default LightStatus;
