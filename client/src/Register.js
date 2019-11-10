import React , { Component } from 'react' ;

class Register extends Component{
	constructor(props){
		super(props);
		this.state = {
			name:'',
			username:'',
			password:'',
			password2:''
		};
	}

	handleChange = (e) => {
		let nam = e.target.name;
		let value = e.target.value;
		console.log(e.target.value);
		this.setState({
			[nam] : value
		});
	}

	handleSubmit= (e) => {
		e.preventDefault();

		const data = {
			name : this.state.name,
			username : this.state.username,
			password : this.state.password,
			password2 : this.state.password2
		};

		fetch('http:/\/localhost:3001/api/register',{
			method : 'POST',
			headers : {
				'content-type' : 'application/json'
			},
			body : JSON.stringify(data)
		})
		  .then(res => res.json())
		  .then(data => console.log("hahahahahahahahahah"));
	}

	render(){
		return(
			<form onSubmit = {(e) => this.handleSubmit(e)}>
			<input name="name" type="text" placeholder="Name" value={this.state.name} onChange = {(e) => this.handleChange(e)}/><br/><br/>
			<input name="username" type="text" placeholder="Username" value={this.state.username} onChange = {(e) => this.handleChange(e)}/><br/><br/>
			<input name="password" type="password" placeholder="Password" value={this.state.password} onChange = {(e) => this.handleChange(e)}/><br/><br/>
			<input name="password2" type="password" placeholder="Confirm Password" value={this.state.password2} onChange = {(e) => this.handleChange(e)}/><br/><br/>
			<button type="submit">register</button>
			</form>
		);
	}
}

export default Register;