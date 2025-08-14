export const getKioskVersionKey = (kioskId: number, kioskVersion: number) => {
    return `${kioskId}-${kioskVersion}`;
};
