import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = ({ onToggleLight, isLightOn, onToggleConnection, isConnected, disabled }) => {
    return (
        <div className="control-panel" style={{ marginTop: '20px', display: 'flex', gap: '15px', width: '100%' }}>
            <button
                onClick={onToggleLight}
                disabled={!isConnected || disabled}
                className={`glass-btn ${isLightOn ? 'power-on' : 'power-off'}`}
                style={{
                    flex: 1,
                    fontWeight: '600'
                }}
            >
                {isLightOn ? 'KAPAT' : 'AÇ'}
            </button>

            <button
                onClick={onToggleConnection}
                className={`glass-btn ${isConnected ? 'connected' : 'disconnected'}`}
                style={{
                    flex: 1
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
