module.exports = {
	
	// Port
	// On which port will the app listen. Defaults to 3000
	// port : 80,
	
	// Environment
	// May be 'production' or 'development' and may change how the app behaves
	environment : process.env.NODE_ENV || 'development' ,

	database : {
		host : 'localhost',
		user : 'root',
		password : 'root',
		database : 'minesweeper'  
	},
    session: {
        secret: "REPLACE ME",
        cookieMaxAge: 21600000
    },
	passwordHashing: {
		numberOfIterations: 1000,
		keyLengthBytes: 64
	},
	regex: {
        emailValidation: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        usernameValidation: /^[a-zA-Z0-9_].{2,64}*$/,
        passwordValidation: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w]).{6,100}$/,
    }
};
