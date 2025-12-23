import React from 'react';
import PropTypes from 'prop-types';

const ErrorDisplay = ({ message }) => {
    if (!message) return null;

    return (
        <div
            className="error-display"
            style={{
                backgroundColor: '#D32F2F',
                color: 'white',
                padding: '15px',
                borderRadius: '8px',
                marginTop: '20px',
                textAlign: 'center',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                animation: 'fadeIn 0.3s',
                maxWidth: '300px',
                margin: '20px auto'
            }}
        >
            ⚠️ {message}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
};

ErrorDisplay.propTypes = {
    message: PropTypes.string,
};

ErrorDisplay.defaultProps = {
    message: '',
};

export default ErrorDisplay;
