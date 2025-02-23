async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}

function processData(data) {
    if (data) {
        console.log("Response:", data);
    }
}

(async () => {
    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/12');
    processData(data);
})();