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

module.exports = router