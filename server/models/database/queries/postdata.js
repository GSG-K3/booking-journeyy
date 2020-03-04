const connection = require("../config/connection");

// const signUpData = (data, callback) => {
//   if (data === undefined || data === null) return;

//   let sql = ` INSERT INTO users
//   (users.id, users.user_name, users.user_password, users.phone, users.email) VALUES('${data.userName}', '${data.userPass}','${data.userPhone}', '${data.userMail}');`;

//   connection.query(sql, callback);
// };
//////////////////////////////////////////////////////////////



const signUpData = reqBody => {
    const { userName, userMail, userPhone, userPass } = reqBody;

    sql = {
        text: "INSERT INTO users (user_name,  email , Phone,  user_password )  VALUES ($1,$2,$3,$4);",
        values: [userName, userMail, userPhone, userPass]
    };
    connection.query(sql.text, sql.values, (error, results) => {
        if (error) throw error;
    });
};

module.exports = signUpData;