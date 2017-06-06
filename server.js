'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./Middlewares/router');
const port = 4444;
/*app.get('/', (request, response) => {  
  response.send('Hello from Express!')
}) */
app.use(router); 
app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on 4444 port`);
});
