import { getJson } from './api';
import { ShortUserInfo, DetailedUserInfo } from './abstraction';

async function createUserInfo(): Promise<void> {
    const data = await getJson();

    const shortUser = new ShortUserInfo(data[0]);
    const detailedUser = new DetailedUserInfo(data[0]);

    console.log('Short User Info:');
    shortUser.displayInfo();

    console.log('\nDetailed User Info:');
    detailedUser.displayInfo();
}

createUserInfo();
