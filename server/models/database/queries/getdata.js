const dbconnection = require('../config/connection')

const getdata = (callback)=>{
    const sql ={
        text :`SELECT * FROM users WHERE user_name =$1 AND user_password =$2`,
        values : [user_name ,user_password]
    }
    connection.query(sql.text,sql.values,(err,results) => {
        if(err){
            return callback(err);
        }
        else {
            return callback(null , res.rows)
        }
    });
} 

module.exports = getdata