import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};


class TempInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTempChange(e.target.value);
  }

  render() {
    const temp = this.props.temp;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temp in {scaleNames[scale]}:</legend>
        <input value={temp}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TempInput;