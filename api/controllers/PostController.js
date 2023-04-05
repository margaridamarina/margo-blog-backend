const database = require('../models')

class PostController {
  // static async pegaPostsAtivos(req, res){
  //   try {
  //     const PostsAtivos = await database.Posts.findAll()
  //     return res.status(200).json(PostsAtivos)  
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodosOsPosts(req, res){
    try {
      const TodosOsPosts = await database.Posts.findAll({
        where: req.query
      })
      return res.status(200).json(TodosOsPosts)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmPost(req, res) {
    const { postId } = req.params
    try {
      const umPost = await database.Posts.findOne( { 
        where: { 
          id: Number(postId) 
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
    const { postId } = req.params
    const novasInfos = req.body
    try {
      await database.Posts.update(novasInfos, { where: { id: Number(postId) }})
      const postAtualizado = await database.Posts.findOne( { where: { id: Number(postId) }})
      return res.status(200).json(postAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaPost(req, res) {
    const { postId } = req.params
    try {
      await database.Posts.destroy({ where: { id: Number(postId) }})
      return res.status(200).json({ mensagem: `id ${postId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // static async restauraPost(req, res) {
  //   const { postId } = req.params
  //   try {
  //     await database.Posts.restore({ where: { id: Number(postId) }})
  //     return res.status(200).json({ mensagem: `id ${postId} restaurado` })
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodosOsPostsDeUmaCategoria(req, res){
    const { categoriaTitle } = req.params
    try {
      const todosOsPostsDeUmaCategoria = await database.Posts.findAll({
        where: { 
          category_title: String(categoriaTitle) 
        }
      })
      return res.status(200).json(todosOsPostsDeUmaCategoria)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodosOsPostsDeUmaSubcategoria(req, res){
    const { subcategoriaTitle } = req.params
    try {
      const todosOsPostsDeUmaSubcategoria = await database.Posts.findAll({
        where: { 
          subcategory_title: String(subcategoriaTitle) 
        }
      })
      return res.status(200).json(todosOsPostsDeUmaSubcategoria)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PostController