const { Router } = require('express')
const PostController = require('../controllers/PostController')
const SubcategoriaController = require('../controllers/SubcategoriaController')

const router = Router()

// router.get('/posts', PostController.pegaPostsAtivos)
router.get('/posts', PostController.pegaTodosOsPosts)
router.get('/posts/:postId', PostController.pegaUmPost)
router.post('/posts', PostController.criaPost)
router.put('/posts/:postId', PostController.atualizaPost)
router.delete('/posts/:postId', PostController.apagaPost)
// router.post('/posts/:postId', PostController.restauraPost)

router.get('/posts/subcategorias/:subcategoriaTitle/', PostController.pegaTodosOsPostsDeUmaSubcategoria)

// router.get('/posts/:postId/subcategorias/:subcategoriaId', SubcategoriaController.pegaUmaSubcategoria)
// router.post('/posts/:postId/subcategorias', SubcategoriaController.criaSubcategoria)
// router.post('/posts/:subcategoriaId/restaura', SubcategoriaController.restauraSubcategoria)
// router.put('/posts/:postId/subcategorias/:subcategoriaId',  SubcategoriaController.atualizaSubcategoria)
// router.delete('/posts/:postId/subcategorias/:subcategoriaId',  SubcategoriaController.apagaSubcategoria)

module.exports = router