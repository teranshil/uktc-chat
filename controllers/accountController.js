const uname_config = {
    max_len: 20,
    min_len: 3,
    expr: "^[a-zA-Z0-9_]*$"
};

const pass_config = {
    max_len: 20,
    min_len: 3,

};
const email_config = {

}


function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate_password(password){
    password = bodyParser.urlencoded(password);

}



function validate_username(username){
        username = username.trim;
        let u_len = username.length;
        if(u_len > uname_config.min_len && u_len < uname_config.max_len){
            return ;
            }

        }
}




function register(username, password, email){
    uname = bodyParser.urlencoded(username.trim());
    pass = bodyParser.urlencoded(password.trim());

    if()

}




function login_validation(username, password){
    uname = bodyParser.(username.trim());
    pass = bodyParser.(password.trim());
    if(uname.length )
}








































function login_check(uname){
    return true;
}
