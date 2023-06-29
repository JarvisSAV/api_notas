// import http from 'http'
import express, { response } from 'express'
import read from './readMiddleware.js'
import notes from './routes/notes.js'
import conn from './services/conexion.js'

const app = express()

app.use(express.json())

app.use(read)

// const app = http.createServer((_request, _response) => {
//     _response.writeHead(200, { 'Content-Type': 'application/json' })
//     _response.end(JSON.stringify(notes))
//     // _resp.end('Hello World')
// })

app.get('/ping', (request, response) => {
    response.send('<h1>Pong</h1>')
})

// app.get('/api/notas', async (_req, resp) =>{
//     conn.query('select * from notes',(error, result, fields)=>{
//         resp.send(result);
//     })
// })

app.get('/api/notas', notes)

app.get('/api/nota/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    } else {
        response.sendStatus(404)
    }
})

app.delete('/api/nota/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
    response.status(204)
})

app.post('/api/nota', (request, response) => {
    const note = request.body

    if (!note || !note.content) {
        return response.status(400).json({
            error: 'El contenido de la nota esta vacia'
        })
    }

    const ids = notes.map(note => note.id)
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

app.use((request, response) => {
    response.status(404).json({
        error: 'not found'
    })
})

const PORT = 4000
app.listen(PORT, () => {
    console.log(`Server runnin on port ${PORT}`)
})