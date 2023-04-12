const { Router } = require('express')
const ReceitasController = require('../controllers/ReceitasController')
const SubcategoriaController = require('../controllers/SubcategoriaController')

const router = Router()

// router.get('/receitas', ReceitasController.pegaReceitasAtivas)
router.get('/receitas', ReceitasController.pegaTodasAsReceitas)
router.get('/receitas/:receitaId', ReceitasController.pegaUmaReceita)
router.post('/receitas', ReceitasController.criaReceita)
router.put('/receitas/:receitaId', ReceitasController.atualizaReceita)
router.delete('/receitas/:receitaId', ReceitasController.apagaReceita)
// router.receita('/receitas/:receitaId', ReceitasController.restauraReceita)

// router.get('/receitas/categorias/:categoriaTitle/', ReceitasController.pegaTodasAsReceitasDeUmaCategoria)
// router.get('/receitas/subcategorias/:subcategoriaTitle/', ReceitasController.pegaTodasAsReceitasDeUmaSubcategoria)


module.exports = router