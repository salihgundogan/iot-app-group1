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
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h2 style={{ margin: 0, color: 'white', fontWeight: 300, fontSize: '24px' }}>
                {isLoginView ? 'Hoş Geldiniz' : 'Hesap Oluştur'}
            </h2>
            <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
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

            <div style={{ position: 'relative', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '10px 0' }}>
                <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#2a2d3e', // Arkaplana uydurmak zor, solid renk verdim mecburen
                    padding: '0 10px',
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: '11px',
                    borderRadius: '10px'
                }}>VEYA</span>
            </div>

            <button type="button" onClick={onLogin} className="glass-btn" style={googleButtonStyle}>
                <span style={{ marginRight: '10px' }}>G</span> Google ile Devam Et
            </button>

            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginTop: '10px' }}>
                {isLoginView ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}
                <button
                    onClick={toggleView}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFD700',
                        cursor: 'pointer',
                        marginLeft: '5px',
                        textDecoration: 'underline',
                        fontSize: '12px'
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
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    color: 'white',
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
    background: 'rgba(255,255,255,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

AuthContainer.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default AuthContainer;
