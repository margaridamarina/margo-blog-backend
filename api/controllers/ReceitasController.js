const database = require('../models')

class ReceitaController {
  // static async pegaReceitasAtivas(req, res){
  //   try {
  //     const ReceitasAtivas = await database.Receitas.findAll()
  //     return res.status(200).json(ReceitasAtivas)  
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }

  static async pegaTodasAsReceitas(req, res){
    try {
      const TodasAsReceitas = await database.Receitas.findAll()
      return res.status(200).json(TodasAsReceitas)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmaReceita(req, res) {
    const { ReceitaId } = req.params
    try {
      const UmaReceita = await database.Receitas.findOne( { 
        where: { 
          id: Number(ReceitaId) 
        }
      })
      return res.status(200).json(UmaReceita)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaReceita(req, res) {
    const novaReceita = req.body
    try {
      const novaReceitaCriado = await database.Receitas.create(novaReceita)
      return res.status(200).json(novaReceitaCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaReceita(req, res) {
    const { ReceitaId } = req.params
    const novasInfos = req.body
    try {
      await database.Receitas.update(novasInfos, { where: { id: Number(ReceitaId) }})
      const ReceitaAtualizado = await database.Receitas.findOne( { where: { id: Number(ReceitaId) }})
      return res.status(200).json(ReceitaAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaReceita(req, res) {
    const { ReceitaId } = req.params
    try {
      await database.Receitas.destroy({ where: { id: Number(ReceitaId) }})
      return res.status(200).json({ mensagem: `id ${ReceitaId} deletado` })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // static async restauraReceita(req, res) {
  //   const { ReceitaId } = req.params
  //   try {
  //     await database.Receitas.restore({ where: { id: Number(ReceitaId) }})
  //     return res.status(200).json({ mensagem: `id ${ReceitaId} restaurado` })
  //   } catch (error) {
  //     return res.status(500).json(error.message)
  //   }
  // }


  static async pegaTodasAsReceitasDeUmaSubcategoria(req, res){
    const { subcategoriaTitle } = req.params
    try {
      const TodasAsReceitasDeUmaSubcategoria = await database.Receitas.findAll({
        where: { 
          subcategory_title: String(subcategoriaTitle) 
        }
      })
      return res.status(200).json(TodasAsReceitasDeUmaSubcategoria)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ReceitaController