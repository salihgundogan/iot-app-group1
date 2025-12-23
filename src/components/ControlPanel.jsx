import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = ({ onToggleLight, isLightOn, onToggleConnection, isConnected, disabled }) => {
    return (
        <div className="control-panel" style={{ marginTop: '20px', display: 'flex', gap: '15px', width: '100%' }}>
            <button
                onClick={onToggleLight}
                disabled={!isConnected || disabled}
                className="glass-btn"
                style={{
                    flex: 1,
                    background: isLightOn ? 'rgba(244, 67, 54, 0.2)' : 'rgba(76, 175, 80, 0.2)',
                    borderColor: isLightOn ? 'rgba(244, 67, 54, 0.4)' : 'rgba(76, 175, 80, 0.4)',
                    color: isLightOn ? '#ff8a80' : '#b9f6ca',
                    fontWeight: '600'
                }}
            >
                {isLightOn ? 'KAPAT' : 'AÇ'}
            </button>

            <button
                onClick={onToggleConnection}
                className="glass-btn"
                style={{
                    flex: 1,
                    background: isConnected ? 'rgba(255, 255, 255, 0.05)' : 'rgba(33, 150, 243, 0.2)',
                    color: isConnected ? 'rgba(255,255,255,0.7)' : '#90caf9'
                }}
            >
                {isConnected ? 'BAĞLANTIYI KES' : 'BAĞLAN'}
            </button>
        </div>
    );
};

ControlPanel.propTypes = {
    onToggleLight: PropTypes.func.isRequired,
    isLightOn: PropTypes.bool.isRequired,
    onToggleConnection: PropTypes.func.isRequired,
    isConnected: PropTypes.bool.isRequired,
    disabled: PropTypes.bool
};

export default ControlPanel;
