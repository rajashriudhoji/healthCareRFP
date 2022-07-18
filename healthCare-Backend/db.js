const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  password: "excellarate",
  host: "localhost",
  port: 5432,
  database: "healthcare"
})

module.exports = pool;