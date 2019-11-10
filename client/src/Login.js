import React , { Component } from 'react' ;
import './css/App.css';

class Login extends Component{
	constructor(props){
		super(props);
		this.state = {
			username : '',
			password : ''
		};
		//this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e) => {
		let nam = e.target.name;
		let value = e.target.value;
		console.log(e.target.value);
		this.setState({
			[nam]:value
		}); 
	}

	handleSubmit= (e) => {
		e.preventDefault();
		const data = {
			username : this.state.username,
			password : this.state.password
		};

		fetch('http:/\/localhost:3001/api/login',{
			method : 'POST',
			headers : {
				'content-type' : 'application/json'
			},
			body : JSON.stringify(data)
		})
		  .then(res => res.json())
		  .then(data => this.props.onResponse(data))
		  .catch(rej => console.log("error"));	
	}

	render(){
		return(
	        <div> 
			<form onSubmit={(e) => this.handleSubmit(e)}>
			<input name='username' type="text" placeholder="Username" value={this.state.username} onChange={(e) => this.handleChange(e)}/>
			<br/><br/>
			<input name='password' type="password" placeholder="password" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
			<br/><br/>
			<button type="submit">login</button>
			</form>
			</div>
		);
	}
}

export default Login;