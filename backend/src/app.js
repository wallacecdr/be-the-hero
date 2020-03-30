const express = require("express")
const cors = require("cors")
const { errors } = require('celebrate')
const routes = require("./routes")

const app = express()

app.use(cors())

// app.use(cors(){ Exemplo de uso do cors para limitar o acesso dos front-ends
//     origin: "http://meuApp.com"
// })

app.use(express.json())
app.use(routes)
app.use(errors())

/*
* Rotas e Recursos
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, paginação, ) -- request.query
  * Route Params: Parâmetros utilizados para identificar recursos (Ex: /users/:id) -- request.params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos -- request.body
  */

  /**
   * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDb, CouchDB, etc
   */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('*').where()
   */

   /**
    * Entidades: Ong, Caso(Incident)
    * Funcionalidades: Login de ONG, Logout de ONG, Cadastro de ONG,
    * Cadastro de novos casos, Listar casos Específicos de uma ONG, Deletar Casos,
    * Listar todos os casos, Entrar em contato com a ONG
    */

module.exports = app
