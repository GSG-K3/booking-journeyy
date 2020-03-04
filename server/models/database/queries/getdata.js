const connection = require('../config/connection')

const getdata = (callback) => {
    const sql = {
        text: `SELECT * FROM users WHERE user_name =$1 AND user_password =$2`,
        values: [user_name, user_password]
    }
    connection.query(sql.text, sql.values, (err, results) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, res.rows)
        }
    });
}

const getJrny = (callback) =>{
    const sql = 'SELECT * FROM journey;'
        
        connection.query(sql, (err, res) => {
        if (err) {
            return callback(err);
        } else {
            return callback( res.rows)
        }
    });

}

module.exports =  {getdata, getJrny}