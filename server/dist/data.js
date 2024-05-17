"use strict";

var _require = require("pg"),
  Pool = _require.Pool;
var pool = new Pool({
  user: "postgres",
  password: "gakiza2004",
  host: "localhost",
  port: 5432,
  database: "pernproject" // Should be lowercase "database", not "DATABASE"
});
pool.connect(function (err, client, release) {
  if (err) {
    console.error('Error acquiring client', err.stack);
    return;
  }
  // Use the client for database operations
});
module.exports = pool;