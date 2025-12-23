export class LightError extends Error {
    constructor(message) {
        super(message);
        this.name = 'LightError';
    }
}

/**
 * Validates the brightness level.
 * @param {number} value - Brightness value (0-100)
 * @throws {LightError} If value is invalid
 */
export const validateBrightness = (value) => {
    if (typeof value !== 'number') {
        throw new LightError('Parlaklık değeri sayı olmalıdır.');
    }
    if (value < 0 || value > 100) {
        throw new LightError('Parlaklık değeri 0 ile 100 arasında olmalıdır.');
    }
    return true;
};

/**
 * Toggles the light status based on connection.
 * @param {boolean} currentStatus - Current light status (true=on, false=off)
 * @param {boolean} isConnected - Connection status
 * @returns {boolean} New light status
 * @throws {LightError} If not connected
 */
export const toggleLightLogic = (currentStatus, isConnected) => {
    if (!isConnected) {
        throw new LightError('Bağlantı hatası: Cihaza ulaşılamıyor. (Offline Mod)');
    }
    return !currentStatus;
};
