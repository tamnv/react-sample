import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {name:'', description:''};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const id = event.target.id;
		this.setState({[id]: event.target.value});
	}

	handleSubmit(event) {
		alert(this.state.name);
		alert(this.state.description);
		alert(this.state.select);
		event.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label for="name">Name</label>
				<input id="name" type="text" value={this.state.value} onChange={this.handleChange} />
				<label for="description">Description</label>
				<textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} />
				<label for="select">Selection</label>
				<select value={this.state.select} id="select" onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default NameForm;