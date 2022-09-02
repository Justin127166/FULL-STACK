const {Pool} = require("pg")

const pool = new Pool({
    user: "justi",
    password: "Justin#127166",
    host: "localhost",
    port: 5432,
    database: "list"
});