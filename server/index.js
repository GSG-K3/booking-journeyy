const express = require('express');
const request = require('request');
const error =require('./controller/error');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(bodyParser.urlencoded({extended:false}));
router.use(express.static(path.join(__dirname,'..','public')));


router.use(error.notFound);
router.use(error.serverErr);

module.exports = router
