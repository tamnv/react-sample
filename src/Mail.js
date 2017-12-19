import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Mailbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {messages: []};
	}

	render() {
		const messages = ['React', 'Re: React', 'Re:Re: React'];
		return (
			<div>
	      <h1>Hello!</h1>
	      {messages.length > 0 &&
	        <h2>
	          You have {messages.length} unread messages.
	        </h2>
	      }
	    </div>
    )
	}
	
}

export default Mailbox;