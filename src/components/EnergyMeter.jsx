import React from 'react';
import PropTypes from 'prop-types';

const EnergyMeter = ({ brightness, isOn }) => {
    const watts = isOn ? (brightness * 0.12).toFixed(1) : '0.0';

    return (
        <div className="energy-meter" style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255, 255, 255, 0.05)',
            padding: '6px 12px',
            borderRadius: '20px',
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
            <span style={{ color: '#4CAF50', textShadow: '0 0 5px rgba(76,175,80,0.5)' }}>⚡</span>
            <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>{watts} W</span>
        </div>
    );
};

EnergyMeter.propTypes = {
    brightness: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired
};

export default EnergyMeter;
