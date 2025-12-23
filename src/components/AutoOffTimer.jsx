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
        if (isOn) setTimeLeft(10);
    };

    const cancelTimer = () => {
        setTimeLeft(null);
    };

    if (!isOn) return null;

    return (
        <div className="auto-off-timer" style={{ marginTop: '15px' }}>
            {timeLeft === null ? (
                <button
                    onClick={startTimer}
                    style={{
                        backgroundColor: 'transparent',
                        border: '1px solid #777',
                        color: '#ccc',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px'
                    }}
                >
                    ⏱️ 10sn Sonra Kapat
                </button>
            ) : (
                <button
                    onClick={cancelTimer}
                    style={{
                        backgroundColor: '#FF9800',
                        border: 'none',
                        color: 'white',
                        padding: '5px 10px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '12px',
                        animation: 'pulse 1s infinite'
                    }}
                >
                    İptal Et ({timeLeft})
                    <style>{`
            @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.7; }
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
