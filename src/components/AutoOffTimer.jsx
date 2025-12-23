import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const AutoOffTimer = ({ isOn, onTurnOff }) => {
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        let timer;
        if (timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0) {
            onTurnOff();
            setTimeLeft(null);
        }
        return () => clearTimeout(timer);
    }, [timeLeft, onTurnOff]);

    const startTimer = () => {
        if (isOn) setTimeLeft(5);
    };

    const cancelTimer = () => {
        setTimeLeft(null);
    };

    if (!isOn) return null;

    return (
        <div className="auto-off-timer" style={{ marginTop: '5px', marginBottom: '15px', width: '100%', textAlign: 'center' }}>
            {timeLeft === null ? (
                <button
                    onClick={startTimer}
                    style={{
                        background: 'transparent',
                        border: '1px solid var(--text-muted)',
                        color: 'var(--text-secondary)',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '11px',
                        transition: 'all 0.3s',
                        fontWeight: '600'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.color = 'var(--text-primary)';
                        e.target.style.borderColor = 'var(--text-primary)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.color = 'var(--text-secondary)';
                        e.target.style.borderColor = 'var(--text-muted)';
                    }}
                >
                    ⏱️ 5sn Sonra Kapat
                </button>
            ) : (
                <button
                    onClick={cancelTimer}
                    style={{
                        background: 'rgba(255, 152, 0, 0.2)',
                        border: '1px solid rgba(255, 152, 0, 0.5)',
                        color: '#FF9800',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        fontSize: '11px',
                        fontWeight: 'bold',
                        animation: 'pulse 1s infinite'
                    }}
                >
                    İptal Et ({timeLeft})
                    <style>{`
            @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.8; }
              100% { opacity: 1; }
            }
          `}</style>
                </button>
            )}
        </div>
    );
};

AutoOffTimer.propTypes = {
    isOn: PropTypes.bool.isRequired,
    onTurnOff: PropTypes.func.isRequired
};

export default AutoOffTimer;
