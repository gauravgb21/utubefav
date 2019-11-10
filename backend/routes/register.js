const express = require('express');
const router  = express.Router();
const User    = require('../models/user');

router.post('/',(req,res) => {
	//console.log("arey dada re  "+req.body.name);
	const name      = req.body.name;
	const username  = req.body.username;
	const password  = req.body.password;
	const password2 = req.body.password2;

	const newUser = User({
		name:name,
		username:username,
		password:password,
		password2:password2
	});

	newUser.save((err,data) => {
		if(err)
			throw err;
		//res.redirect('/login');
	});
});

module.exports = router;