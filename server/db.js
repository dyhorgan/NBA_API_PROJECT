const {Pool} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "Ho.66421",
    host: "localhost",
    port: 5432,
    database: "NBA_API_PROJECT"
});

module.exports = pool;