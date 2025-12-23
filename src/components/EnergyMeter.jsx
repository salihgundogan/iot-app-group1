import React from 'react';
import PropTypes from 'prop-types';

const EnergyMeter = ({ brightness, isOn }) => {
    const watts = isOn ? (brightness * 0.12).toFixed(1) : '0.0';

    return (
        <div className="energy-meter" style={{
            // Absolute yerine relative ve inline stil
            background: 'var(--glass-bg)',
            padding: '6px 14px',
            borderRadius: '20px',
            fontSize: '12px',
            display: 'inline-flex', // inline-flex
            alignItems: 'center',
            gap: '8px',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'blur(4px)',
            boxShadow: 'var(--glass-shadow)'
        }}>
            <span style={{ color: '#4CAF50', textShadow: '0 0 5px rgba(76,175,80,0.5)' }}>⚡</span>
            <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--text-primary)' }}>{watts} W</span>
        </div>
    );
};

EnergyMeter.propTypes = {
    brightness: PropTypes.number.isRequired,
    isOn: PropTypes.bool.isRequired
};

export default EnergyMeter;
