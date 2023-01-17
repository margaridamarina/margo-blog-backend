const bodyParser = require('body-parser')

const posts = require('./postsRoute')

module.exports = app => {
 app.use(
   bodyParser.json(),
   bodyParser.urlencoded({ extended: false }),
   posts
   )
 }