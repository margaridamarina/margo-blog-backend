const { Router } = require('express')
const LojaController = require('../controllers/LojaController')
const SubcategoriaController = require('../controllers/SubcategoriaController')

const router = Router()

// router.get('/lojas', LojaController.pegalojasAtivas)
router.get('/lojas', LojaController.pegaTodasAsLojas)
router.get('/lojas/:lojaId', LojaController.pegaUmaLoja)
router.post('/lojas', LojaController.criaLoja)
router.put('/lojas/:lojaId', LojaController.atualizaLoja)
router.delete('/lojas/:lojaId', LojaController.apagaLoja)
// router.Loja('/lojas/:lojaId', LojaController.restauraLoja)

router.get('/lojas/subcategorias/:subcategoriaTitle/', LojaController.pegaTodasAsLojasDeUmaSubcategoria)

module.exports = router