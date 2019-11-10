var mongoose = require('mongoose');

//define schema

var UserSchema=mongoose.Schema({
	username:{
		type:String,
		index:true
	},
	password:{
		type:String
	},
	name:{
		type:String
	}
});

// UserSchema.methods.validPassword=function(pwd){
// return (this.password==pwd);
// };
//Model the Schema

module.exports = mongoose.model('users',UserSchema);
