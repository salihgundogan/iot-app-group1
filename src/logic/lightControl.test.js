import { toggleLightLogic, validateBrightness, LightError } from './lightControl';

describe('Light Control Logic', () => {
    describe('toggleLightLogic', () => {
        test('Bağlantı varken ışık durumunu tersine çevirmeli (kapalı -> açık)', () => {
            const currentStatus = false;
            const isConnected = true;
            expect(toggleLightLogic(currentStatus, isConnected)).toBe(true);
        });

        test('Bağlantı varken ışık durumunu tersine çevirmeli (açık -> kapalı)', () => {
            const currentStatus = true;
            const isConnected = true;
            expect(toggleLightLogic(currentStatus, isConnected)).toBe(false);
        });

        test('Bağlantı yokken LightError fırlatmalı', () => {
            const currentStatus = false;
            const isConnected = false;
            expect(() => {
                toggleLightLogic(currentStatus, isConnected);
            }).toThrow(LightError);

            expect(() => {
                toggleLightLogic(currentStatus, isConnected);
            }).toThrow('Bağlantı hatası');
        });
    });

    describe('validateBrightness', () => {
        test('Geçerli değerler (0-100) için true dönmeli', () => {
            expect(validateBrightness(0)).toBe(true);
            expect(validateBrightness(50)).toBe(true);
            expect(validateBrightness(100)).toBe(true);
        });

        test('Sayı olmayan değerler için hata fırlatmalı', () => {
            expect(() => validateBrightness('50')).toThrow('Parlaklık değeri sayı olmalıdır');
            expect(() => validateBrightness(null)).toThrow('Parlaklık değeri sayı olmalıdır');
        });

        test('0-100 aralığı dışındaki değerler için hata fırlatmalı', () => {
            expect(() => validateBrightness(-1)).toThrow('Parlaklık değeri 0 ile 100 arasında olmalıdır');
            expect(() => validateBrightness(101)).toThrow('Parlaklık değeri 0 ile 100 arasında olmalıdır');
        });
    });
});
