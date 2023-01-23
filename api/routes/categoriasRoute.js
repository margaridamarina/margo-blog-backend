const { Router } = require('express')
const CategoriaController = require('../controllers/CategoriaController')

const router = Router()

// router.get('/categorias', CategoriaController.pegaCategoriasAtivas)
router.get('/categorias', CategoriaController.pegaTodasAsCategorias)
router.get('/categorias/:categoriaTitle', CategoriaController.pegaUmaCategoriaPorTitutlo)
router.post('/categorias', CategoriaController.criaCategoria)
router.put('/categorias/:categoriaTitle', CategoriaController.atualizaCategoria)
router.delete('/categorias/:categoriaTitle', CategoriaController.apagaCategoria)
// router.post('/categorias/:categoriaId', CategoriaController.restauraCategoria)

router.get('/subcategorias/categorias/:categoriaTitle', CategoriaController.pegaTodasAsSubcategoriasDeUmaCategoria)

module.exports = router