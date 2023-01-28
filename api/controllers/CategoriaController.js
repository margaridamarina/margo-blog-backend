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

  static async pegaUmaCategoriaPorTitutlo(req, res) {
    const { categoriaTitle } = req.params;
    try {
      const umPost = await database.Categorias.findOne( { 
        where: { 
          title: String(categoriaTitle) 
        }
      })
      return res.status(200).json(umPost)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaCategoria(req, res) {
    const { categoriaTitle } = req.params
    const novaCategoria = { ...req.body, category_title: String(categoriaTitle) }
    try {
      const novaCategoriaCriada = await database.Categorias.create(novaCategoria)
      return res.status(200).json(novaCategoriaCriada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaCategoria(req, res) {
    const { categoriaTitle } = req.params
    const novasInfos = req.body
    try {
      await database.Categorias.update(novasInfos, { 
        where: { 
          title: String(categoriaTitle) 
        }})
      const CategoriaAtualizada = await database.Categorias.findOne( { where: { title: String(categoriaTitle) }})
      return res.status(200).json(CategoriaAtualizada)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaCategoria(req, res) {
    const { categoriaTitle } = req.params
    try {
      await database.Categorias.destroy({ where: { title: String(categoriaTitle) }})
      return res.status(200).json({ mensagem: `categoria ${categoriaTitle} deletada` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
  
  // static async restauraCategoria(req, res) {
  //   const { categoriaTitle } = req.params
  //   try {
  //     await database.Categorias.restore({ where: { title: String(categoriaTitle) }})
  //     return res.status(200).json({ mensagem: `id ${categoriaTitle} restaurado` })
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodasAsSubcategoriasDeUmaCategoria(req, res) {
    const { categoriaTitle } = req.params;
    try {
      const todasAsSubcategoriasDeUmaCategoria = await database.Subcategorias.findAll( { 
        where: { 
          category_title: String(categoriaTitle) 
        }
      })
      return res.status(200).json(todasAsSubcategoriasDeUmaCategoria)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = CategoriaController