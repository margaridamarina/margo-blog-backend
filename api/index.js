const express = require ('express')
const routes = require ('./routes')
const cors = require('cors')

const app = express()

app.use(
    cors({
        origin:"http://localhost:3007",
        methods:["GET", "POST", "PUT", "DELETE"]
    })
)

const port = 4000

routes(app)


app.listen(port, () => console.log(`O servidor está rodando na porta ${port}`))

module.exports = app