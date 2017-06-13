'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./Middlewares/router');	//include router
var hbs = require('hbs');
const config = require('./config');
app.use(express.static('./views'));
//support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'html');
app.engine('html', hbs.__express);


app.use(router); 	// use the router middleware




app.listen(config.port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on `+ config.port +` port`);
});
