const database = require('../models')

class CategoriaController {
  // static async pegaCategoriasAtivas(req, res){
  //   try {
  //   // console.log({database, Categoria:database.Categorias})
  //     const CategoriasAtivas = await database.Categorias.findAll()
  //     return res.status(200).json(CategoriasAtivas)  
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodasAsCategorias(req, res){
    try {
      const todasAsCategorias = await database.Categorias.findAll()
      return res.status(200).json(todasAsCategorias)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaCategoria(req, res) {
    const { categoriaId } = req.params;
    try {
      const umPost = await database.Categorias.findOne( { 
        where: { 
          id: Number(categoriaId) 
        }
      })
      return res.status(200).json(umPost)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaCategoria(req, res) {
    const { categoriaId } = req.params
    const novaCategoria = { ...req.body, categoria_id: Number(categoriaId) }
    try {
      const novaCategoriaCriada = await database.Categorias.create(novaCategoria)
      return res.status(200).json(novaCategoriaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaCategoria(req, res) {
    const { categoriaId } = req.params
    const novasInfos = req.body
    try {
      await database.Categorias.update(novasInfos, { 
        where: { 
          id: Number(categoriaId) 
        }})
      const CategoriaAtualizada = await database.Categorias.findOne( { where: { id: Number(categoriaId) }})
      return res.status(200).json(CategoriaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaCategoria(req, res) {
    const { categoriaId } = req.params
    try {
      await database.Categorias.destroy({ where: { id: Number(categoriaId) }})
      return res.status(200).json({ mensagem: `id ${categoriaId} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  // static async restauraCategoria(req, res) {
  //   const { categoriaId } = req.params
  //   try {
  //     await database.Categorias.restore({ where: { id: Number(categoriaId) }})
  //     return res.status(200).json({ mensagem: `id ${categoriaId} restaurado` })
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }
}

module.exports = CategoriaController