/*
    Handle user security functionality such as
    generating hashesm salts and passwords.
*/

var crypto = require('crypto');
var config = require('./config');

// On login, salt is retrieved from the DB.
// hash password with the salt
exports.hashPassword = function(password, saltRounds, callback){
	bcrypt.genSalt(saltRounds, function(err, salt) {
		bcrypt.hash(password, salt, function(err, hash) {
			// Store hash in your password DB.
			callback();

			});
		});
	};

// On login, salt is retrieved from the DB.
//
exports.compareSaltAndHash = funcction(password, salt, callback){
	bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
    	return res;
	});
}