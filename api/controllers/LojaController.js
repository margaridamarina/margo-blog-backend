const database = require('../models')

class LojaController {
  // static async pegaLojasAtivas(req, res){
  //   try {
  //     const LojasAtivas = await database.Lojas.findAll()
  //     return res.status(200).json(LojasAtivas)  
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodasAsLojas(req, res){
    try {
      const TodasAsLojas = await database.Lojas.findAll({
        where: req.query
      })
      return res.status(200).json(TodasAsLojas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaLoja(req, res) {
    const { lojaId } = req.params
    try {
      const umaLoja = await database.Lojas.findOne( { 
        where: { 
          id: Number(lojaId) 
        }
      })
      return res.status(200).json(umaLoja)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaLoja(req, res) {
    const novaLoja = req.body
    try {
      const novaLojaCriado = await database.Lojas.create(novaLoja)
      return res.status(200).json(novaLojaCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaLoja(req, res) {
    const { LojaId } = req.params
    const novasInfos = req.body
    try {
      await database.Lojas.update(novasInfos, { where: { id: Number(LojaId) }})
      const LojaAtualizado = await database.Lojas.findOne( { where: { id: Number(LojaId) }})
      return res.status(200).json(LojaAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaLoja(req, res) {
    const { LojaId } = req.params
    try {
      await database.Lojas.destroy({ where: { id: Number(LojaId) }})
      return res.status(200).json({ mensagem: `id ${LojaId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // static async restauraLoja(req, res) {
  //   const { LojaId } = req.params
  //   try {
  //     await database.Lojas.restore({ where: { id: Number(LojaId) }})
  //     return res.status(200).json({ mensagem: `id ${LojaId} restaurado` })
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodasAsLojasDeUmaCategoria(req, res){ 
    const { categoriaTitle } = req.params
    try {
      const TodasAsLojasDeUmaCategoria = await database.Lojas.findAll({
        where: { 
          category_title: String(categoriaTitle) 
        }
      })
      return res.status(200).json(TodasAsLojasDeUmaCategoria)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaTodasAsLojasDeUmaSubcategoria(req, res){
    const { subcategoriaTitle } = req.params
    try {
      const TodasAsLojasDeUmaSubcategoria = await database.Lojas.findAll({
        where: { 
          subcategory_title: String(subcategoriaTitle) 
        }
      })
      return res.status(200).json(TodasAsLojasDeUmaSubcategoria)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = LojaController