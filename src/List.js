import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class List extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		const numbers = this.props.numbers;
		const listNumbers = numbers.map((number) => <li key={number.toString()}>{ number }</li>);
		return (
			<ul>{ listNumbers }</ul>
		)
	}
}

export default List;