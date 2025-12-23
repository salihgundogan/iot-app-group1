import React from 'react';
import PropTypes from 'prop-types';

const LightStatus = ({ isOn }) => {
    return (
        <div className="light-status-container" style={{ textAlign: 'center', padding: '20px' }}>
            <div
                className="status-indicator"
                style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    backgroundColor: isOn ? '#FFD700' : '#424242',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '48px',
                    boxShadow: isOn ? '0 0 60px rgba(255, 215, 0, 0.6)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                }}
            >
                {isOn ? '💡' : '🌑'}
            </div>
            <h2 style={{ marginTop: '15px', color: isOn ? '#FFD700' : '#aaa' }}>
                {isOn ? 'AÇIK' : 'KAPALI'}
            </h2>
        </div>
    );
};

LightStatus.propTypes = {
    isOn: PropTypes.bool.isRequired,
};

export default LightStatus;
