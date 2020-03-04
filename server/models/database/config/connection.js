const { Pool } = require('pg')
require('env2')('config.env')
const connection = process.env.bd_url
console.log("00000", connection)
module.exports = new Pool({
    connectionString: connection,
    sll: !connection.includes('localhost')
})