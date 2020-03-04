const express = require('express');
const request = require('request');
const error = require('./controller/error');
const path = require('path');
const build = require('./models/database/config/build')
const getdata = require("./models/database/queries/getdata")
const postdata = require("./models/database/queries/postdata")
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static(path.join(__dirname, '..', 'public')));

router.post("/postsingup", (req, res) => {
    const reqBody = req.body;

    console.log(reqBody)
    postdata(reqBody)
    res.redirect("/")
})
router.get("/public/signUp", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'signUp.html'))
})
router.use(error.notFound);
router.use(error.serverErr);

module.exports = router