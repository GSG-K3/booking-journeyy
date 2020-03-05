const express = require('express');
const request = require('request');
const error = require('./controller/error');
const path = require('path');
const getdata = require("./models/database/queries/getdata")
const postdata = require("./models/database/queries/postdata")
    // const hash = require("./controller/index")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const router = express.Router();
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, '..', 'public')));

router.post("/postsingup", (req, res) => {
    const reqBody = req.body;
    const hashing = bcrypt.hashSync(reqBody.userPass, 10);
    // const hashing = hash(reqBody.userPass)
    reqBody.userPass = hashing
    postdata(reqBody)
    res.redirect("/")
})
router.get("/public/signUp", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'signUp.html'))
})
router.post('/login', (req, res) => {
    let reqbody = req.body;

    getdata.getdata(reqbody, (err, response) => {
        if (err) { console.log(err) } else {
            if (bcrypt.compareSync(req.body.user_password, response[0].user_password) == true) {
                res.cookie(req.body.user_name, response[0].user_password)
                res.redirect('/Journies')
            } else {
                res.redirect('/notMember')
            }

        }
    })

})


router.get('/Journies', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'journies.html'))

})

router.get('/notMember', (req, res) => {

    res.sendFile(path.join(__dirname, '..', 'public', 'notloged.html'))


})

router.get('/api/Journies', (req, res) => {
    getdata.getJrny(data => {
        res.send(data)
    })

})




router.use(error.notFound);
router.use(error.serverErr);

module.exports = router