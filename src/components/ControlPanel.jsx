import React from 'react';
import PropTypes from 'prop-types';

const ControlPanel = ({ onToggleLight, isLightOn, onToggleConnection, isConnected, disabled }) => {
    return (
        <div className="control-panel" style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
            <button
                onClick={onToggleLight}
                disabled={!isConnected || disabled}
                style={{
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: isLightOn ? '#f44336' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: (!isConnected || disabled) ? 'not-allowed' : 'pointer',
                    opacity: (!isConnected || disabled) ? 0.6 : 1,
                    width: '200px',
                    fontWeight: 'bold',
                    transition: 'background-color 0.3s'
                }}
            >
                {isLightOn ? 'Işığı Kapat' : 'Işığı Aç'}
            </button>

            <button
                onClick={onToggleConnection}
                style={{
                    padding: '10px 20px',
                    fontSize: '14px',
                    backgroundColor: '#607D8B',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    width: '200px',
                    transition: 'background-color 0.3s'
                }}
            >
                {isConnected ? 'Bağlantıyı Kes' : 'Bağlan'}
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

ControlPanel.defaultProps = {
    disabled: false
};

export default ControlPanel;
