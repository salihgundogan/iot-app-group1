import React from 'react';
import PropTypes from 'prop-types';

const LightStatus = ({ isOn }) => {
    return (
        <div className="light-status-container" style={{ textAlign: 'center', padding: '20px' }}>
            <div
                style={{
                    width: '140px',
                    height: '140px',
                    borderRadius: '50%',
                    // Cam efekti ve dinamik renk
                    background: isOn
                        ? 'radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0.1) 70%)'
                        : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '56px',
                    boxShadow: isOn
                        ? '0 0 50px rgba(255, 215, 0, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.5)'
                        : 'inset 0 0 20px rgba(0,0,0,0.5)',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    backdropFilter: 'blur(5px)'
                }}
            >
                {isOn ? '💡' : '🌑'}
            </div>
            <h2 style={{
                marginTop: '20px',
                color: isOn ? '#FFD700' : 'rgba(255,255,255,0.3)',
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase'
            }}>
                {isOn ? 'Lights On' : 'Lights Off'}
            </h2>
        </div>
    );
};

LightStatus.propTypes = {
    isOn: PropTypes.bool.isRequired,
};

export default LightStatus;
