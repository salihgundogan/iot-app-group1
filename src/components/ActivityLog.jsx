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
            background: 'var(--card-bg)', // Değişken kullanımı
            borderRadius: '12px',
            padding: '15px',
            boxSizing: 'border-box',
            border: '1px solid var(--glass-border)',
            maxHeight: '150px',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h3 style={{
                fontSize: '12px',
                margin: '0 0 10px 0',
                color: 'var(--text-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 'bold'
            }}>
                Sistem Kayıtları
            </h3>

            <div style={{
                flex: 1,
                overflowY: 'auto',
                fontSize: '12px', // Büyütüldü
                fontFamily: 'monospace',
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--text-muted) transparent'
            }}>
                {logs.length === 0 ? (
                    <div style={{ color: 'var(--text-muted)', fontStyle: 'italic', textAlign: 'center', marginTop: '10px' }}>
                        Kayıt bulunamadı.
                    </div>
                ) : (
                    logs.map((log, index) => (
                        <div key={index} style={{ marginBottom: '8px', color: 'var(--text-primary)', display: 'flex' }}>
                            <span style={{ color: '#4CAF50', marginRight: '8px', fontWeight: 'bold' }}>[{log.time}]</span>
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
