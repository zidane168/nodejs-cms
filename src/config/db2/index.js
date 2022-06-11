const { Client } = require("pg");
// var fs = require("fs");

const client = new Client({
  user: "postgreSQL",
  host: "localhost",
  database: "cms_dev",
  password: "123456",
  port: 5432,
  //   ssl  : {
  //     ca : fs.readFileSync('<path to CA cert file>')
  //   }
});

client.connect(function (err) {
  if (err) throw err;
  console.log("Client Connected!");
});

module.exports = { client }