import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthContainer = ({ onLogin }) => {
    const [isLoginView, setIsLoginView] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    const toggleView = () => setIsLoginView(!isLoginView);

    return (
        <div style={{
            width: '100%',
            maxWidth: '350px',
            padding: '40px',
            background: 'var(--glass-bg)',
            borderRadius: '24px',
            boxShadow: 'var(--glass-shadow)',
            backdropFilter: 'blur(10px)',
            border: '1px solid var(--glass-border)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h2 style={{ margin: 0, color: 'var(--text-primary)', fontWeight: 600, fontSize: '24px' }}>
                {isLoginView ? 'Hoş Geldiniz' : 'Hesap Oluştur'}
            </h2>
            <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)' }}>
                Akıllı evinizi yönetmek için giriş yapın.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                {!isLoginView && (
                    <input type="text" placeholder="Ad Soyad" required style={inputStyle} />
                )}
                <input type="email" placeholder="E-posta: user@iot.com" required style={inputStyle} />
                <input type="password" placeholder="Şifre: 123456" required style={inputStyle} />

                <button type="submit" className="glass-btn" style={submitButtonStyle}>
                    {isLoginView ? 'Giriş Yap' : 'Kayıt Ol'}
                </button>
            </form>

            <div style={{ position: 'relative', borderTop: '1px solid var(--glass-border)', margin: '10px 0' }}>
                <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--glass-bg)',
                    padding: '0 10px',
                    color: 'var(--text-muted)',
                    fontSize: '11px',
                    borderRadius: '10px'
                }}>VEYA</span>
            </div>

            <button type="button" onClick={onLogin} className="glass-btn" style={googleButtonStyle}>
                Google ile Devam Et
            </button>

            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '10px' }}>
                {isLoginView ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}
                <button
                    onClick={toggleView}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-color)',
                        cursor: 'pointer',
                        marginLeft: '5px',
                        textDecoration: 'underline',
                        fontSize: '12px',
                        fontWeight: '600'
                    }}
                >
                    {isLoginView ? 'Kayıt Ol' : 'Giriş Yap'}
                </button>
            </p>
        </div>
    );
};

const inputStyle = {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid var(--glass-border)',
    backgroundColor: 'var(--btn-bg)',
    color: 'var(--text-primary)',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    fontSize: '14px',
    transition: 'border-color 0.3s'
};

const submitButtonStyle = {
    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    boxShadow: '0 4px 15px rgba(255, 215, 0, 0.3)'
};

const googleButtonStyle = {
    background: 'var(--btn-bg)',
    color: 'var(--text-primary)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

AuthContainer.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default AuthContainer;
