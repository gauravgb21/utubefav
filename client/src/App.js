import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Header from './Header';
import { BrowserRouter as Router, Route , Link , Switch} from  "react-router-dom";
import './css/App.css'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      isAuthenticated : false
    }
  }

  setAuthentication(data){
    console.log("haha");
    this.setState({
      isAuthenticated : data.isAuthenticated
    });
  }

  render() {

    const mainElement = this.state.isAuthenticated ? (
      <Dashboard />
    ):(
      <div className="App">
        <Switch>
        <Route exact path="/register" render={() => 
          <div className='register'>
          <Register />
          <div className='link-component'>
          <Link to='/'>Already have an account ?</Link>
          </div>
          </div>
        } />
        <Route path="/" render={() =>
          <div className='login'>
          <Login onResponse={(data) => this.setAuthentication(data)}/>
          <div className='link-component'>
          <Link to='/register'>Don't have an account ?</Link>
          </div>
          </div>
        } />
        </Switch>
        </div>
    );

    return (
    <div>
    <Router>
     <Header />
      {mainElement}
      </Router>
    </div>
    );
  }
}

export default App;
