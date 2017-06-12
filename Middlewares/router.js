'use strict'
var express = require('express');
var router = express.Router();
var accountController = require('../controllers/accountController');
var views = '../views/';

router.get('/', function(req, res) {
    res.render(views + 'index');
});

router.get('/register', function(req, res) {
    res.render(views + 'register/index');

});

//Handle POST requests
router.post('/register', accountController.register);	 // On submit the register form


// 404 NOT FOUND
router.get('*', function(req, res) {
	res.send('not found!');
});
























// router.post('/login', accountController.doLogin);
// router.post('/register', accountController.doRegister);
// router.get('/register', accountController.register);
// router.post('/anonymous', accountController.anonymous);

module.exports = router;