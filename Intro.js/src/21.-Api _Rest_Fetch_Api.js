const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

// httpClient.then(response => {
//     // console.log(response,null,3)
//     response.json().then( data => {
//         console.log(data,null,3)
//     });
// });

httpClient
    .then (response => response.json())
    .then(data => console.log(data));

console.log('Prueba');