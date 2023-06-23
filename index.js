import http from 'http'

let notes = [
    {
        "id": 1,
        "content": "",
        "date": "2023-05-30T17:30:31.098Z",
        "important": true
    },
    {
        "id": 2,
        "content": "Tengo que estudiar las clases del FullStack Bootcamp",
        "date": "2023-05-30T18:39:34.091Z",
        "important": false
    },
    {
        "id": 3,
        "content": "Repasar los retos de JS de midudev",
        "date": "2023-05-30T19:20:14.298Z",
        "important": true
    }
]

const app = http.createServer((_request, _response) => {
    _response.writeHead(200, { 'Content-Type': 'application/json' })
    _response.end(JSON.stringify(notes))
    // _resp.end('Hello World')
})

const PORT = 4000
app.listen(PORT)
console.log(`Server runnin on port ${PORT}`)