import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActivityLog = ({ logs }) => {
    const logEndRef = useRef(null);

    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    return (
        <div className="activity-log" style={{
            marginTop: '20px',
            width: '100%',
            background: 'rgba(0, 0, 0, 0.3)', // Daha koyu cam
            borderRadius: '12px',
            padding: '15px',
            boxSizing: 'border-box',
            border: '1px solid rgba(255,255,255,0.05)',
            maxHeight: '150px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h3 style={{
                fontSize: '12px',
                margin: '0 0 10px 0',
                color: 'rgba(255,255,255,0.5)',
                textTransform: 'uppercase',
                letterSpacing: '1px'
            }}>
                Sistem Kayıtları
            </h3>

            <div style={{
                flex: 1,
                overflowY: 'auto',
                fontSize: '11px',
                fontFamily: 'monospace',
                scrollbarWidth: 'thin',
                scrollbarColor: 'rgba(255,255,255,0.2) transparent'
            }}>
                {logs.length === 0 ? (
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}>
                        Kayıt bulunamadı.
                    </div>
                ) : (
                    logs.map((log, index) => (
                        <div key={index} style={{ marginBottom: '6px', color: 'rgba(255,255,255,0.8)', display: 'flex' }}>
                            <span style={{ color: '#4CAF50', marginRight: '8px', opacity: 0.7 }}>[{log.time}]</span>
                            <span>{log.message}</span>
                        </div>
                    ))
                )}
                <div ref={logEndRef} />
            </div>
        </div>
    );
};

ActivityLog.propTypes = {
    logs: PropTypes.arrayOf(PropTypes.shape({
        time: PropTypes.string,
        message: PropTypes.string
    })).isRequired
};

export default ActivityLog;
