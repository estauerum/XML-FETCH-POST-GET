// //GET METHOD
// const requestURL = 'https://jsonplaceholder.typicode.com/users';

// function sendRequest (method, url, body = null) {
//     return fetch(url).then(response => {
//         return response.json()
//     })
// }

// sendRequest("GET", requestURL)
//             .then(data => console.log(data))
//             .catch(err => console.log(err));



//POST METHOD
const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest (method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        response.json().then(err => {
            const e = new Error('Something went wrong')
            e.data = error
            throw e
        })
    })
}

sendRequest("POST", requestURL, {
    name: 'dasha',
    age: 26
})
            .then(data => console.log(data))
            .catch(err => console.log(err));