const nonUrl = 'https://nonexistent-service.xyz/api';
const correctUrl = 'https://reqres.in/api/users/2';
//const correctUrl = 'https://httpstat.us/403';

const fetchData = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Request to ${url} failed:`, error.message);
        throw error; 
    }
};

const func = async () => {
    try {
        console.log(`Trying: ${nonUrl}`);
        const data = await fetchData(nonUrl);
        console.log('Data:', data);
    } catch {
        console.warn(`Primary request failed. Switching to ${correctUrl}...`);

        try {
            const data = await fetchData(correctUrl);
            console.log('Backup Data:', data);
        } catch {
            throw new Error('Both requests failed!');
        }
    }
};

func().catch(error => console.error('Final Error:', error.message));