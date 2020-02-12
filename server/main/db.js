const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'blog',
  password: '',
  post: 5432
})

module.exports = pool