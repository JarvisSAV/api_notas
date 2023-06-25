// import http from 'http'
import express from 'express'

const app = express()

app.use(express.json())

app.use((request,response, next)=>{
    console.log(request.method)
    console.log(request.path)
    console.log(request.body)
    console.log('------------')
    next()
})

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

app.get('/api/nota/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if(note){
        response.json(note)
    }else{
        response.send(404)
    }
})

app.delete('/api/nota/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.send(204)
})

app.post('/api/nota', (request,response) => {
    const note = request.body

    if(!note || !note.content){
        return response.status(400).json({
            error: 'El contenido de la nota esta vacia'
        })
    }

    const ids =     notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNota = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString()
    }

    notes = [...notes, newNota]
    console.log(newNota)
    response.status(201).json(newNota)
})

app.use((request, response)=>{
    response.status(404).json({
        error:'not found'
    })
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
})