const express          = require('express');
const bodyParser       = require('body-parser');
const mongo            = require('mongodb');
const mongoose         = require('mongoose');
const login            = require('./routes/login');
const register         = require('./routes/register');

const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost/utubevids');

const db = mongoose.connect('mongodb://localhost:27017/utubevids', {useNewUrlParser: true});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();
});

app.use('/api/login',login);
app.use('/api/register',register);


app.listen(port, () => console.log(`Listening on port ${port}`));