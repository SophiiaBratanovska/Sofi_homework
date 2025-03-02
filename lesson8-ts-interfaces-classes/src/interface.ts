export interface LocalUser {
    street: string;
    city: string;
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;

    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

/*export async function getJson(): Promise<LocalUser[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const json = (await response.json()) as LocalUser[];
    return json;
}

(async () => {
    const data = await getJson();
    console.log(data[0].id + ' = user id');
    console.log(data[0].address.street + ' = user street');
})();*/

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }
