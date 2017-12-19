import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={isClick: true}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClick: !prevState.isClick
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello World</h1>
        </header>
        <p className="App-intro" onClick={this.handleClick} >
          To get started, edit <code>src/App.js</code> and save to reload.
          {this.state.isClick ? 'ON' : 'OFF'}
        </p>
      </div>
    );
  }
}

const user = {
  firstName: 'Tam',
  lastName: 'Nguyen'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const element = (
  getGreeting(user)
);


ReactDOM.render(
  element,
  document.getElementById('user')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('date')
  );
}

setInterval(tick, 1000);

function Welcome(props) {
  return <h1>Hello, {props.name} - {props.class} </h1>
}

const element_prop = <Welcome name="Sara" class="page-title" />;

ReactDOM.render(
  element_prop,
  document.getElementById('prop')
);

// Condition
function UserGetting(props) {
  return <h2>Welcome back!</h2>
}


function GuestGetting(props) {
  return <h2>Please sign up!</h2>
}

function Getting(props) {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <UserGetting />
  }
  else {
    return <GuestGetting />
  }
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Getting isLogin={true} />,
  document.getElementById('login')
);

export default App;
