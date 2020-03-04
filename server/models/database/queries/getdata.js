const connection = require('../config/connection')

const getdata =(reqbody, callback) => {
    const sql = {
        text: `SELECT user_name ,user_password FROM users WHERE user_name =$1`,
        values: [reqbody.user_name]
    }
    connection.query(sql, (err, results) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null,results.rows)
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