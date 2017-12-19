import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Custom';
import Clock from './Clock';
import LoginControl from './Login';
import Mailbox from './Mail';
import Page from './Page';
import List from './List';
import NameForm from './Form';
import Calulator from './Lift';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Welcome />, document.getElementById('time'));
ReactDOM.render(
  <Clock />,
  document.getElementById('clock')
);

ReactDOM.render(
  <LoginControl />,
  document.getElementById('login-2')
);

ReactDOM.render(
	<Mailbox />,
	document.getElementById('mail')
);

ReactDOM.render(
  <Page />,
  document.getElementById('page')
);

const numbers = [1, 2, 3, 4, 5, 6];

ReactDOM.render(
  <List numbers={numbers} />,
  document.getElementById('list')
);

ReactDOM.render(
	<NameForm />,
	document.getElementById('form')
);

ReactDOM.render(
  <Calulator />,
  document.getElementById('lift')
);

registerServiceWorker();
