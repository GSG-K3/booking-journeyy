// const bcrybt = require("bcrypt");

// //const jwt = require('jsonwebtoken');
// //const hash = bcrypt.hashSync(password, 10);
// const hashingPassword = (password) => {
//     return bcrybt.hash(password, 10)
// }


// module.exports = hashingPassword;








// const base64Encode = str => Buffer.from(str).toString("base64");

// function hashfunction(str) {
//     return bcrybt.hash(str, 10);
// };
// const encodepayload = base64Encode(JSON.stringify(payload));
// const signature = hashfunction(`${encodeHeader}.${encodepayload}`);
// const jwt = `${encodeHeader}.${encodepayload}.${signature}`;

// const comparePasswords = (password, hashedPassword, callback) => {
//     hashedPassword = hashfunction(password)
//     bcrypt.compare(password, hashedPassword, callback);
// };

// let token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
//     console.log(token);
// });

// let decoded = jwt.verify(token, 'shhhhh');
// console.log(decoded.foo)

// // verify a token symmetric
// jwt.verify(token, 'shhhhh', function(err, decoded) {
//     console.log(decoded.foo) // bar
// });
