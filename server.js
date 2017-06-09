'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./Middlewares/router');	//include router
const port = 4444;

app.use(router); 	// use the router middleware

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on 4444 port`);
});
