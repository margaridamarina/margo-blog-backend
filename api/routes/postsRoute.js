const { Router } = require('express')
const PostController = require('../controllers/PostController')

const router = Router()

// router.get('/pessoas', PessoaController.pegaPessoasAtivas)
router.get('/posts/todos', PostController.pegaTodosOsPosts)
// router.get('/pessoas/:id', PessoaController.pegaUmaPessoa)
// router.post('/pessoas', PessoaController.criaPessoa)
// router.put('/pessoas/:id', PessoaController.atualizaPessoa)
// router.delete('/pessoas/:id', PessoaController.apagaPessoa)
// router.get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
// router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
// router.post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
// router.put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
// router.delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)

module.exports = router