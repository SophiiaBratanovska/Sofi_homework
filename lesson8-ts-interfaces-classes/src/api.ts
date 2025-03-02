import { LocalUser } from './interface';

export async function getJson(): Promise<LocalUser[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    return await response.json();
}
