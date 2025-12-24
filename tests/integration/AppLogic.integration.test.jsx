import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import App from '../../src/App';
import '@testing-library/jest-dom';

// Integration Test: Bileşenler ve İş Mantığı (Logic) Arasındaki Uyum
describe('Integration: UI and Logic Interaction', () => {
    test('AÇ butona basıldığında logic çağrılmalı ve durum güncellenmeli', async () => {
        render(<App />);

        // Splash screen'in bitmesini bekle
        await waitFor(() => {
            expect(screen.getByPlaceholderText(/E-posta/i)).toBeInTheDocument();
        }, { timeout: 6000 });

        // Bilgileri doldur
        fireEvent.change(screen.getByPlaceholderText(/E-posta/i), { target: { value: 'user@iot.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Şifre/i), { target: { value: '123456' } });

        // Giriş yap
        fireEvent.click(screen.getByRole('button', { name: /^Giriş Yap$/i }));

        // Dashboard'dayız
        await waitFor(() => {
            expect(screen.getByText(/IoT Akıllı Ev/i)).toBeInTheDocument();
        }, { timeout: 3000 });

        // Işık butonunu bul (Tam eşleşme önemli çünkü loglarda 'açıldı' geçebilir)
        const toggleBtn = screen.getByRole('button', { name: /^AÇ$/i });
        fireEvent.click(toggleBtn);

        // App.jsx içindeki toggleLightLogic 100ms gecikme ile çalışıyor
        await act(async () => {
            await new Promise((r) => setTimeout(r, 400));
        });

        expect(screen.getByRole('button', { name: /^KAPAT$/i })).toBeInTheDocument();
        expect(screen.getByText(/Işık açıldı/i)).toBeInTheDocument();
    });

    test('Bağlantı koptuğunda kontrol butonu devre dışı (disabled) olmalı', async () => {
        render(<App />);

        await waitFor(() => screen.getByPlaceholderText(/E-posta/i), { timeout: 6000 });

        fireEvent.change(screen.getByPlaceholderText(/E-posta/i), { target: { value: 'user@iot.com' } });
        fireEvent.change(screen.getByPlaceholderText(/Şifre/i), { target: { value: '123456' } });
        fireEvent.click(screen.getByRole('button', { name: /^Giriş Yap$/i }));

        // Dashboard'ı bekle
        await waitFor(() => screen.getByText(/BAĞLANTIYI KES/i), { timeout: 3000 });

        // Bağlantıyı kes
        fireEvent.click(screen.getByText(/BAĞLANTIYI KES/i));

        // Işık butonu disabled olmalı
        const toggleBtn = screen.getByRole('button', { name: /^AÇ$/i });
        expect(toggleBtn).toBeDisabled();

        // Hata mesajı (Bağlantı kesildi uyarısı) görünmeli
        expect(screen.getByText(/Cihaz bağlantısı kesildi/i)).toBeInTheDocument();
    });
});
