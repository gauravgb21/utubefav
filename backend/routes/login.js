const express       = require('express');
const router        = express.Router();



router.post('/',function(req,res){
	console.log("arey mummy re arey dada re  "+req.body.username);
	res.send({isAuthenticated : true});
});

module.exports = router;