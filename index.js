// import http from 'http'
import express from 'express'

const app = express() 

let notes = [
    {
        "id": 1,
        "content": "Hacer los foros de Saul",
        "date": "2023-05-30T17:30:31.098Z",
        "important": true
    },
    {
        "id": 2,
        "content": "Respirar 24/7",
        "date": "2023-05-30T18:39:34.091Z",
        "important": false
    },
    {
        "id": 3,
        "content": "No discutir con los maestros",
        "date": "2023-05-30T19:20:14.298Z",
        "important": true
    }
]

// const app = http.createServer((_request, _response) => {
//     _response.writeHead(200, { 'Content-Type': 'application/json' })
//     _response.end(JSON.stringify(notes))
//     // _resp.end('Hello World')
// })

app.get('/', (request, response) => {
    response.send('<h1>Hola Mundo</h1>')
})

app.get('/api/notas', (request, response) => {
    response.json(notes)
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
})