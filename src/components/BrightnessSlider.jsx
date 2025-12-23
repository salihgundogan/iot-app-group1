import React from 'react';
import PropTypes from 'prop-types';

const BrightnessSlider = ({ brightness, onChange, disabled }) => {
    return (
        <div style={{ padding: '10px 0', width: '100%', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                <span>Parlaklık</span>
                <span>%{brightness}</span>
            </div>

            <div style={{ position: 'relative', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    height: '100%',
                    width: `${brightness}%`,
                    background: 'linear-gradient(90deg, #FFD700, #FFA500)',
                    boxShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
                    transition: 'width 0.1s ease',
                    borderRadius: '4px'
                }} />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={disabled}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                    }}
                />
            </div>
        </div>
    );
};

BrightnessSlider.propTypes = {
    brightness: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

export default BrightnessSlider;
