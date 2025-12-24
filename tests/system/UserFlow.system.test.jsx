import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../../src/App';
import '@testing-library/jest-dom';

// System Test: Tüm uygulamanın (E2E benzeri) kullanıcı akışı
describe('System Test: End-to-End User Flow', () => {
    test('Kullanıcı sisteme girebilmeli, ışığı açabilmeli ve temayı değiştirebilmeli', async () => {
        render(<App />);

        // 1. Splash Screen
        expect(screen.getByText(/IOT CONTROL/i)).toBeInTheDocument();

        // Splash'in bitmesini bekle
        await waitFor(() => {
            expect(screen.getByPlaceholderText(/E-posta/i)).toBeInTheDocument();
        }, { timeout: 6000 });

        // 2. Login Screen
        fireEvent.change(screen.getByPlaceholderText(/E-posta/i), { target: { value: 'user@iot.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Şifre/i), { target: { value: '123456' } });
        fireEvent.click(screen.getByRole('button', { name: /^Giriş Yap$/i }));

        // 3. Dashboard
        await waitFor(() => {
            expect(screen.getByText(/IoT Akıllı Ev/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Tema değiştirme
        const themeBtn = screen.getByTitle(/Temayı Değiştir/i);
        fireEvent.click(themeBtn);
        expect(document.body).toHaveAttribute('data-theme', 'dark');

        // Işık kontrolü (Strict regex to avoid partial log matches)
        const toggleBtn = screen.getByRole('button', { name: /^AÇ$/i });
        fireEvent.click(toggleBtn);

        await waitFor(() => {
            expect(screen.getByRole('button', { name: /^KAPAT$/i })).toBeInTheDocument();
        }, { timeout: 1000 });

        // Çıkış yap
        const logoutBtn = screen.getByTitle(/Çıkış Yap/i);
        fireEvent.click(logoutBtn);
        await waitFor(() => {
            expect(screen.getByRole('button', { name: /^Giriş Yap$/i })).toBeInTheDocument();
        }, { timeout: 3000 });
    });
});
