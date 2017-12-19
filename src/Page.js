import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showStatus: true}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			showStatus: !prevState.showStatus
		}));
	}

	render() {
		return (
			<div>
				<Message show={this.state.showStatus} />
				<button onClick={this.handleClick}>
					{this.state.showStatus ? 'Hide' : 'Show'}
				</button>
			</div>
		);
	}
}

function Message(props) {
	if (!props.show) {
		return null;
	}
	else {
		return (
			<div className="message">This is message</div>
		)
	}
}

export default Page;