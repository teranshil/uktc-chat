const config = require('../config');
const messages = require('../messages');
var bodyParser = require('body-parser');
var auth = require('../authentication');
var db = require('../db');
//====================================================//

exports.register = function(req, res) {
    var error = {
        email: messages.validation.registrationEmail,
        password: messages.validation.registrationPassword,
        passNotMatch: messages.validation.registrationPasswordNotMatch,
        username: messages.validation.registrationUsername,
        usernameTaken: messages.validation.usernameTaken,
        emailTaken: messages.validation.emailTaken
    };

    var input = {
        username: req.body.username,
        password: req.body.password,
        confPassword: req.body.conf_password,
        email: req.body.email
    }

    if (isUsernameValid(input.username)) {
        if (input.password === input.confPassword) {
            if (isPasswordValid(input.password)) {
                if (isEmailValid(input.email)) {
                    if (!isEmailExists(input.email)) {
                        if (!isUsernameExists(input.username)) {
                            //=====  CREATE USER  ======//
                            auth.hashPassword(input.password, (err, hash, salt) => { //Hash the password
                                if (!err) {
                                    db.createUser(input.username, hash, salt, input.email); //CREATE USER
                                    console.log('====== ==== DONE ==== =====');

                                }


                                console.log([input.username, hash, salt, input.email]);
                            });

                        } else {
                            console.log(error.usernameTaken);
                        }
                    } else {
                        console.log(error.emailTaken);
                    }
                } else {
                    console.log(error.email);
                }
            } else {
                console.log(error.password);
            }
        } else {
            console.log(error.passNotMatch);
        }
    } else {
        console.log(error.username);

    }

}





function isEmailExists(email) {
    let size = db.getData(email, 'email', 'profiles');
    if (size.length > 0) {
        return true;
    } else {
        return false;
    }


}

function isUsernameExists(username) {
    let size = db.getData(username, 'username', 'profiles');
    if (size.length > 0) {
        return true;
    } else {
        return false;
    }
}


function isEmailValid(email) {
    // Is the email a valid address?
    let re = config.regex.emailValidation;
    return re.test(email);
}

// Validate the user's chosen display name against a regex
function isUsernameValid(uname) {
    let re = config.regex.usernameValidation;
    return re.test(uname);
}

// Validate a password is complex enough to be used
function isPasswordValid(password) {
    let re = config.regex.passwordValidation;
    return re.test(password);
}

validateRegisterInput = function(data) {
    return (isUsernameValid(data.username) && isPasswordValid(data.password) && isEmailValid(data.email));
}