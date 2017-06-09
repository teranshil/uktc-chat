'use strict'
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function(req, res){
	res.send('home');
});

router.get('/register', function(req, res) {
	res.send('register in progress!');
});

router.get('*', function(req, res) {
	res.send('not found!');
});

// router.post('/login', accountController.doLogin);
// router.post('/register', accountController.doRegister);
// router.get('/register', accountController.register);
// router.post('/anonymous', accountController.anonymous);

module.exports = router;
