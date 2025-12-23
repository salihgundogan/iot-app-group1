import React from 'react';
import PropTypes from 'prop-types';

const BrightnessSlider = ({ brightness, onChange, disabled }) => {
    return (
        <div className="brightness-slider-container" style={{ padding: '20px 0', width: '100%', maxWidth: '300px', margin: '0 auto' }}>
            <label
                htmlFor="brightness"
                style={{
                    display: 'block',
                    marginBottom: '10px',
                    fontWeight: '500',
                    color: disabled ? '#666' : '#fff'
                }}
            >
                Parlaklık: %{brightness}
            </label>
            <input
                id="brightness"
                type="range"
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => onChange(Number(e.target.value))}
                disabled={disabled}
                style={{
                    width: '100%',
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    opacity: disabled ? 0.5 : 1
                }}
            />
        </div>
    );
};

BrightnessSlider.propTypes = {
    brightness: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};

BrightnessSlider.defaultProps = {
    disabled: false,
};

export default BrightnessSlider;
