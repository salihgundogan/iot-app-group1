import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const ActivityLog = ({ logs }) => {
    const logEndRef = useRef(null);

    // Yeni log geldiğinde otomatik aşağı kaydır
    useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [logs]);

    return (
        <div className="activity-log" style={{
            marginTop: '20px',
            width: '100%',
            maxWidth: '300px',
            backgroundColor: '#333',
            borderRadius: '8px',
            padding: '10px',
            boxSizing: 'border-box'
        }}>
            <h3 style={{ fontSize: '14px', margin: '0 0 10px 0', borderBottom: '1px solid #555', paddingBottom: '5px' }}>Cihaz Günlüğü</h3>
            <div style={{ maxHeight: '100px', overflowY: 'auto', fontSize: '12px' }}>
                {logs.length === 0 ? (
                    <div style={{ color: '#777', fontStyle: 'italic' }}>Henüz işlem yok.</div>
                ) : (
                    logs.map((log, index) => (
                        <div key={index} style={{ marginBottom: '5px', color: '#ccc', borderBottom: '1px solid #444', paddingBottom: '2px' }}>
                            <span style={{ color: '#888', marginRight: '5px', fontSize: '10px' }}>{log.time}</span>
                            {log.message}
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
