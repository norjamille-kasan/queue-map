import { createStorage } from 'unstorage';
import indexedDbDriver from 'unstorage/drivers/indexedb';

const useIndexDb = createStorage({
    driver: indexedDbDriver({ base: 'app:' }),
});

const DB_KEYS = {
    KIOSK_INFORMATION: 'KIOSK_INFORMATION',
    KIOSK_VERSION_KEY: 'KIOSK_VERSION_KEY',
    KIOSK_FLOOR_PLANS: 'KIOSK_FLOOR_PLANS',
    KIOSK_DESTINATIONS: 'KIOSK_DESTINATIONS',
};

export { DB_KEYS, useIndexDb };
