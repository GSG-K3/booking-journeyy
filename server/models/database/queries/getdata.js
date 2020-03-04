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

module.exports = getdata