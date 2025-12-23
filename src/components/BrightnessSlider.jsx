import React from 'react';
import PropTypes from 'prop-types';

const BrightnessSlider = ({ brightness, onChange, disabled }) => {
    // Slider arka planı için dinamik gradient (dolu kısım renkli, boş kısım şeffaf)
    const bgStyle = {
        background: `linear-gradient(to right, var(--accent-color) 0%, var(--accent-color) ${brightness}%, var(--slider-track) ${brightness}%, var(--slider-track) 100%)`
    };

    return (
        <div style={{ padding: '10px 0', width: '100%', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '600' }}>
                <span style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Parlaklık</span>
                <span style={{ color: 'var(--text-primary)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>%{brightness}</span>
            </div>

            <div style={{ position: 'relative', height: '30px', display: 'flex', alignItems: 'center' }}>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={brightness}
                    onChange={(e) => onChange(Number(e.target.value))}
                    disabled={disabled}
                    className="custom-slider"
                    style={bgStyle}
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
