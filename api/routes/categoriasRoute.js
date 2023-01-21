const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

// router.get('/categorias', CategoriaController.pegaCategoriasAtivas)
router.get('/categorias', CategoriaController.pegaTodasAsCategorias)
router.get('/categorias/:categoriaId', CategoriaController.pegaUmaCategoria)
router.post('/categorias', CategoriaController.criaCategoria)
router.put('/categorias/:categoriaId', CategoriaController.atualizaCategoria)
router.delete('/categorias/:categoriaId', CategoriaController.apagaCategoria)
// router.post('/categorias/:categoriaId', CategoriaController.restauraCategoria)

module.exports = router