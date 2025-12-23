import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AuthContainer = ({ onLogin }) => {
    const [isLoginView, setIsLoginView] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Frontend simülasyonu: Her türlü başarılı
        onLogin();
    };

    const toggleView = () => setIsLoginView(!isLoginView);

    return (
        <div className="auth-container" style={{
            width: '100%',
            maxWidth: '350px',
            padding: '30px',
            backgroundColor: '#333',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            textAlign: 'center'
        }}>
            <h2 style={{ marginBottom: '20px', color: '#fff' }}>
                {isLoginView ? 'Giriş Yap' : 'Kayıt Ol'}
            </h2>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {!isLoginView && (
                    <input type="text" placeholder="Ad Soyad" required style={inputStyle} />
                )}
                <input type="email" placeholder="E-posta" required style={inputStyle} />
                <input type="password" placeholder="Şifre" required style={inputStyle} />

                <button type="submit" style={submitButtonStyle}>
                    {isLoginView ? 'Giriş Yap' : 'Kayıt Ol'}
                </button>
            </form>

            <div style={{ margin: '20px 0', borderTop: '1px solid #555', position: 'relative' }}>
                <span style={{
                    position: 'absolute',
                    top: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#333',
                    padding: '0 10px',
                    color: '#888',
                    fontSize: '12px'
                }}>VEYA</span>
            </div>

            <button type="button" onClick={onLogin} style={googleButtonStyle}>
                <span style={{ marginRight: '10px' }}>G</span> Google ile {isLoginView ? 'Giriş' : 'Kayıt'}
            </button>

            <p style={{ marginTop: '20px', fontSize: '14px', color: '#aaa' }}>
                {isLoginView ? 'Hesabın yok mu?' : 'Zaten hesabın var mı?'}
                <button
                    onClick={toggleView}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFD700',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        marginLeft: '5px'
                    }}
                >
                    {isLoginView ? 'Kayıt Ol' : 'Giriş Yap'}
                </button>
            </p>
        </div>
    );
};

const inputStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: '#444',
    color: 'white',
    width: '100%',
    boxSizing: 'border-box'
};

const submitButtonStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    minHeight: '44px' // A11y
};

const googleButtonStyle = {
    padding: '12px',
    borderRadius: '6px',
    border: '1px solid #555',
    backgroundColor: 'white',
    color: '#333',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '44px'
};

AuthContainer.propTypes = {
    onLogin: PropTypes.func.isRequired
};

export default AuthContainer;
