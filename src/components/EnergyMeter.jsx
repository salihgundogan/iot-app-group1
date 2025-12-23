import React from 'react';
import PropTypes from 'prop-types';

const EnergyMeter = ({ brightness, isOn }) => {
    // Basit formül: Max 12W, %1 parlaklık = 0.12W
    const watts = isOn ? (brightness * 0.12).toFixed(1) : '0.0';

    return (
        <div className="energy-meter" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: '5px 10px',
            borderRadius: '15px',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            border: '1px solid #555'
        }}>
            <span style={{ color: '#4CAF50' }}>⚡</span>
            {watts} W
        </div>
    );
};

EnergyMeter.propTypes = {
    brightness: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired
};

export default EnergyMeter;
