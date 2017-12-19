import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TempInput from './Lift.second';

function BoilingVerdict(props) {
	if (props.celsius >= 100) {
		return <p>The water would boil </p>
	}
	return <p>The water would not boil</p>
}

/*class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {temp: ''};
	}

	handleChange(e) {
		this.setState({temp: e.target.value});
	}

	render() {
		const temp = this.state.temp;
		return (
			<fieldset>
				<legend>Enter temperature in Celsius:</legend>
				<input value={temp} onChange={this.handleChange} />
				<BoilingVerdict celsius={parseFloat(temp)} />
			</fieldset>
		)
	}
}*/


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends React.Component {
	constructor(props) {
		super(props)
		this.handleCelsius = this.handleCelsius.bind(this);
		this.handleFah = this.handleFah.bind(this);
		this.state = {temp:'', scale:'c'};
	}

	handleCelsius(temp) {
		this.setState({scale:'c', temp});
	}

	handleFah(temp) {
		this.setState({scale:'f', temp});
	}

  render() {
  	const scale = this.state.scale;
  	const temp = this.state.temp;
  	const celsius = scale === 'f' ? tryConvert(temp, toCelsius) : temp;
  	const fahrenheit = scale === 'c' ? tryConvert(temp, toFahrenheit) : temp;

    return (
      <div>
        <TempInput
          scale="c"
          temp={celsius}
          onTempChange={this.handleCelsius} />
        <TempInput
          scale="f"
          temp={fahrenheit}
          onTempChange={this.handleFah} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}



export default Calculator;