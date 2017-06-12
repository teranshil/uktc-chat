/*
    Handle user security functionality such as
    generating hashesm salts and passwords.
*/

var crypto = require('crypto');
var config = require('./config');

// On login, salt is retrieved from the DB.
// hash password with the salt
exports.hashPassword = function(password, callback) {
	let saltRounds = config.passwordHashing.saltRounds;	// get saltRounds from the config file
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            // Store hash in your password DB.
            callback(err, hash, salt);

        });
    });
};

// On login, salt is retrieved from the DB.
//
exports.compareSaltAndHash = function(password, salt) {
    bcrypt.compare(password, hash, function(err, res) {
        return res;	//returns true or false
    });
}