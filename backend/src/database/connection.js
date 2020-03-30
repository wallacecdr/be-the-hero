const knex = require("knex")
const configuration = require("../../knexfile")

const config = process.env.NODE_ENV == 'teste' ? configuration.test : configuration.development //variável ambiente

const connection = knex(config)

module.exports = connection