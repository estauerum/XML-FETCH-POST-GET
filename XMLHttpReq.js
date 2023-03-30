// //GET METHOD
// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest (method, url) {
//     return new Promise( (resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.responseType = 'json';
//         //если успешный ответ сервера, то мы попадаем в onload
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response)
//             } else {
//             resolve(xhr.response)
//             }
//         }

//         xhr.onerror = () => {
//             reject(xhr.response)
//         }

//         xhr.send()
//     })
// }

// sendRequest("GET", requestURL)
//             .then(data => console.log(data))
//             .catch(err => console.log(err));







//POST METHOD
const requestURL = 'https://jsonplaceholder.typicode.com/users';


function sendRequest (method, url, body = null) {
    return new Promise( (resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
            resolve(xhr.response)
            }
        }

        xhr.send(JSON.stringify(body))
    })
}

sendRequest("POST", requestURL, {
    name: 'dasha',
    age: 26
})
            .then(data => console.log(data))
            .catch(err => console.log(err));







