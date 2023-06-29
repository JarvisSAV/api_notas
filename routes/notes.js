// import dotenv from 'dotenv'
import express from "express"
// import multer from 'multer'
import path from 'path'
// import userExtractor from '../middleware/userExtractor.js';
import * as notesServices from '../services/notes.js'

// dotenv.config()
const error_server = 'Ha ocurrido un error en el servidor'

const router = express.Router()

//retorna todos los productos
router.get('/', async (_req, res) => {
  try {
    const results = await productoServices.getAll()
    res.send(results)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: error_server })
  }
})

//retorna productos de un tipo y con un limite
router.get('/:tipo/:limit', async (_req, res) => {
  try {
    const results = await productoServices.getHome({ tipo: _req.params.tipo, limit: _req.params.limit })
    res.send(results)
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: error_server })
  }
})

//crea un producto
// router.post('/', upload, async (_req, res) => {
//   try {
//       const results = await productoServices.crearProducto({ body: _req.body, files: _req.files })
//       if (results > 0) {
//         console.log('true')
//         res.send({ msg: 'Producto creado correctamente' })
//       } else {
//         console.log('false')
//         res.send({ error: 'error al crear el producto' })
//       }
//   } catch (error) {
//     console.error(error)
//     res.status(500).send({ error: error_server })
//   }
// })

//edita un producto
// router.put('/', upload, async (_req, res) => {
//   try {
//     const results = await productoServices.editarProducto({ body: _req.body, files: _req.files })
//     if (results > 0) {
//       res.send({ msg: 'Producto editado correctamente' })
//     } else {
//       res.send({ error: 'error al editar el producto' })
//     }
//   } catch (error) {
//     console.error(error)
//     res.status(500).send({ error: error_server })
//   }
// })

//retorna informacion de un solo producto
// router.get('/:id/', userExtractor, async (_req, res) => {
//   console.log({_req})
//   try {
//     const results = await productoServices.getSingleProduct({ id: _req.params.id })
//     res.send(results)
//   } catch (error) {
//     console.error(error)
//     res.status(500).send({ error: error_server })
//   }
// })

//elimina un producto
router.delete('/:id/', async (_req, res) => {
  try {
    const results = await productoServices.deleteProduct({ id: _req.params.id })
    if(results > 0){
      res.send({msg: 'Producto eliminado correctamente'})
    }else{
      res.status(404).send({msg: 'Error al eliminar'})
    }
  } catch (error) {
    console.error(error)
    res.status(500).send({ error: error_server })
  }
})

export default router