const { Router } = require('express')
const SubcategoriaController = require('../controllers/SubcategoriaController')

const router = Router()

// router.get('/subcategorias', SubcategoriaController.pegaSubcategoriasAtivas)
router.get('/subcategorias', SubcategoriaController.pegaTodasAsSubcategorias)
router.get('/subcategorias/:subcategoriaTitle', SubcategoriaController.pegaUmaSubcategoriaPorTitulo)
router.post('/subcategorias', SubcategoriaController.criaSubcategoria)
router.put('/subcategorias/:subcategoriaTitle', SubcategoriaController.atualizaSubcategoria)
router.delete('/subcategorias/:subcategoriaTitle', SubcategoriaController.apagaSubcategoria)
// router.post('/subcategorias/:subcategoriaId', SubcategoriaController.restauraSubcategoria)

// router.get('/posts/:postId/subcategorias/:subcategoriaId', SubcategoriaController.pegaUmaSubcategoria)
// router.post('/posts/:postId/subcategorias', SubcategoriaController.criaSubcategoria)
// // router.post('/posts/:subcategoriaId/restaura', SubcategoriaController.restauraSubcategoria)
// router.put('/posts/:postId/subcategorias/:subcategoriaId',  SubcategoriaController.atualizaSubcategoria)
// router.delete('/posts/:postId/subcategorias/:subcategoriaId',  SubcategoriaController.apagaSubcategoria)

module.exports = router