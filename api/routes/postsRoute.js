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

router.get('/posts/categorias/:categoriaTitle/', PostController.pegaTodosOsPostsDeUmaCategoria)
router.get('/posts/subcategorias/:subcategoriaTitle/', PostController.pegaTodosOsPostsDeUmaSubcategoria)


module.exports = router