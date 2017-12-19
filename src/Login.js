import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoginControl extends React.Component{
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleLogout = this.handleLogout.bind(this);
		this.state = {isLogin: false};
	}

	handleLogin() {
		console.log('abc');
		this.setState({isLogin:true});
	}

	handleLogout() {
		this.setState({isLogin:false});
	}


	render() {
		const isLogin = this.state.isLogin;

		let button = null;
		if (isLogin) {
			button = <LogoutButton onClick={this.handleLogout} />;
		}
		else {
			button = <LoginButton onClick={this.handleLogin} />;
		}

		return (
      <div>
        <Greeting isLogin={isLogin} />
        {button}
      </div>
    );
	}
}

// Condition
function UserGetting(props) {
  return <h2>Welcome back!</h2>
}


function GuestGetting(props) {
  return <h2>Please sign up!</h2>
}

function Greeting(props) {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <UserGetting />
  }
  else {
    return <GuestGetting />
  }
}

function LoginButton(props) {
	return (
  	<button onClick={props.onClick}>
    	Login
  	</button>
	);
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

export default LoginControl;