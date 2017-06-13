var mysql = require('mysql');
var db = require('../db');
var bodyParser = require('body-parser');

function index(){
    
};

function createRoom(req, res) {
	name = req.body.name;
	db.createRoom(name);
	console.log("Room created!!!");
};

function sendInvitation(){

};

function sendMessage(){

};

function chatRoomMessages(){

};

exports.index = index; 
exports.createRoom = createRoom;
exports.sendInvitation = sendInvitation;
exports.sendMessage = sendMessage;
