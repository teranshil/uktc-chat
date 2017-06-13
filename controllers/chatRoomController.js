var mysql = require('mysql');
var db = require('../db');
var bodyParser = require('body-parser');


function createRoom(req, res) {
	name = req.body.name;
	db.createRoom(name);
	console.log("Room created!!!");
}

exports.createRoom = createRoom;