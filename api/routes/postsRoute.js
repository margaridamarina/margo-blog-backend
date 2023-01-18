const { Router } = require('express')
const PostController = require('../controllers/PostController')

const router = Router()

// router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/posts', PostController.pegaTodosOsPosts)
router.get('/posts/:id', PostController.pegaUmPost)
router.post('/posts', PostController.criaPost)
// router.put('/pessoas/:id', PostController.atualizaPessoa)
// router.delete('/pessoas/:id', PostController.apagaPessoa)
// router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PostController.pegaUmaMatricula)
// router.post('/pessoas/:estudanteId/matricula', PostController.criaMatricula)
// router.post('/pessoas/:id/restaura', PostController.restauraPessoa)
// router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PostController.atualizaMatricula)
// router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PostController.apagaMatricula)

module.exports = router