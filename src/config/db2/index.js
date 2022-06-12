// const Pool = require("pg").Pool;
// // var fs = require("fs");

// const pool = new Pool({
//   user: "postgreSQL",
//   host: "localhost",
//   database: "cms_dev",
//   password: "123456",
//   port: 5432,
//   //   ssl  : {
//   //     ca : fs.readFileSync('<path to CA cert file>')
//   //   }
// });

// pool.connect()

// console.log(pool)
// console.log( ' ---------------' )

// module.exports = { pool }

const { Client } = require('pg');

const env = process.env;

const client = new Client({
  host: env.DB_HOST,
  port: env.DB_PORT,
  user: env.DB_USER || 'postgres',
  password: env.DB_PASSWORD || '123456',
  database: env.DB_NAME
})

client.connect();

module.exports = client;