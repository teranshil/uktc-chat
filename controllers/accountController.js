

const config = require('../config');

function isEmailValid(email) {
    // Is the email a valid address?
    var re = config.regex.emailValidation;
    return re.test(email);
}

// Validate the user's chosen display name against a regex
function isUsernameValid(uname) {
    var re = config.regex.usernameValidation;
    return re.test(displayName);
}

// Validate a password is complex enough to be used
function isPasswordValid(password) {
    var re = config.regex.passwordValidation;
    return re.test(password);
}

validateRegisterInput = function(data){
	return ( isUsernameValid(data.username) && isPasswordValid(data.password) && isEmailValid(data.email) );
}



register = function(req, res){
	var error = {
        email : messages.validation.registrationEmail,
        password : messages.validation.registrationPassword,
        name : messages.validation.registrationName
    };

    var input = {
    	username: req.body.username,
    	password: req.body.password,
    	confPassword: req.body.conf-password,
    	email: req.body.email
    }
    if(input.password = input.confPassword){
    	if(isPasswordValid(input.password)){
    		if(isEmailValid(input.email)){
    			if(isEmailExists(input.email)){
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    			}

    		}else{
    			// error: invalid email;
    		}
    	}else{
    		//error: invalid pass
    }else{
    	// error: password dont match
    }





    }
}













