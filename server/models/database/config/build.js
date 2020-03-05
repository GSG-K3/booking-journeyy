const fs = require('fs')
const path = require('path')
const dbconnection = require('./connection.js')
const createTable = fs.readFileSync(path.join(__dirname, 'build.sql')).toString();
const tabelValus = fs.readFileSync(path.join(__dirname, 'dummydata.sql')).toString();
const create = (createTable, tabelValus) => {
    // dbconnection.query()
    dbconnection.query(createTable).then(res => {
        dbconnection.query(tabelValus).then(res => res)
    }).catch(err => console.log("er", err))

}

create(createTable, tabelValus);
