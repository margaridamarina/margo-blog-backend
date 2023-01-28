const bodyParser = require('body-parser')

const posts = require('./postsRoute')
const categorias = require('./categoriasRoute')
const subcategorias = require('./subcategoriasRoute')
const lojas = require('./lojasRoute')
const receitas = require('./receitasRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   posts,
   categorias,
   subcategorias,
   lojas,
   receitas
   )
 }