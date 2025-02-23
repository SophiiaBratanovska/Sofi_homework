function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(processData) //
        .catch(error => {
            console.error("Error:", error);
        });
}

function processData(data) {
    console.log("Response:", data);
    return data;
}

fetchData('https://jsonplaceholder.typicode.com/todos/12');