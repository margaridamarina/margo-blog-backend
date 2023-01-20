const database = require('../models')

class PostController {
//   static async pegaPessoasAtivas(req, res){
//     try {
//       const pessoasAtivas = await database.Pessoas.findAll()
//       return res.status(200).json(pessoasAtivas)  
//     } catch (error) {
//       return res.status(500).json(error.message)
//     }
//   }

  static async pegaTodosOsPosts(req, res){
    try {
      const todosOsPosts = await database.Posts.findAll()
      return res.status(200).json(todosOsPosts)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmPost(req, res) {
    const { id } = req.params
    try {
      const umPost = await database.Posts.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umPost)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaPost(req, res) {
    const novoPost = req.body
    try {
      const novoPostCriado = await database.Posts.create(novoPost)
      return res.status(200).json(novoPostCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaPost(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Posts.update(novasInfos, { where: { id: Number(id) }})
      const postAtualizado = await database.Posts.findOne( { where: { id: Number(id) }})
      return res.status(200).json(postAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPost(req, res) {
    const { id } = req.params
    try {
      await database.Posts.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

//   static async restauraPessoa(req, res) {
//     const { id } = req.params
//     try {
//       await database.Pessoas.restore({ where: { id: Number(id) }})
//       return res.status(200).json({ mensagem: `id ${id} restaurado` })

//     } catch (error) {
//       return res.status(500).json(error.message)
//     }
//   }

//   static async pegaUmaMatricula(req, res) {
//     const { estudanteId, matriculaId } = req.params
//     try {
//       const umaMatricula = await database.Matriculas.findOne( { 
//         where: { 
//           id: Number(matriculaId),
//           estudante_id: Number(estudanteId)
//         }
//       })
//       return res.status(200).json(umaMatricula)
//     } catch (error) {
//       return res.status(500).json(error.message)
//     }
//   }

//   static async criaMatricula(req, res) {
//     const { estudanteId } = req.params
//     const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
//     try {
//       const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
//       return res.status(200).json(novaMatriculaCriada)
//     } catch (error) {
//       return res.status(500).json(error.message)
//     }
//   }

//   static async atualizaMatricula(req, res) {
//     const { estudanteId, matriculaId } = req.params
//     const novasInfos = req.body
//     try {
//       await database.Matriculas.update(novasInfos, { 
//         where: { 
//           id: Number(matriculaId),
//           estudante_id: Number(estudanteId) 
//         }})
//       const MatriculaAtualizada = await database.Matriculas.findOne( { where: { id: Number(matriculaId) }})
//       return res.status(200).json(MatriculaAtualizada)
//     } catch (error) {
//       return res.status(500).json(error.message)
//     }
//   }

//   static async apagaMatricula(req, res) {
//     const { estudanteId, matriculaId } = req.params
//     try {
//       await database.Matriculas.destroy({ where: { id: Number(matriculaId) }})
//       return res.status(200).json({ mensagem: `id ${matriculaId} deletado` })

//     } catch (error) {
//       return res.status(500).json(error.message)
//     }
//   }
}

module.exports = PostController