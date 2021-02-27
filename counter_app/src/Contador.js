import React, { Component } from "react";

export default class Contador extends Component {
  constructor() {
    super();
    this.state = { cuenta: 0 };
    //this.incremetarContador = this.incremetarContador.bind(this);
  }
  incremetarContador() {
    this.setState({
      cuenta: this.state.cuenta + 1
    });
  }
  render() {
    return (
      <div>
        <h1>Contador</h1>
        <p>Este componente va incrementar el valor en 1</p>
        <p>Cuenta:{this.state.cuenta}</p>
        <button onClick={this.incremetarContador.bind(this)}>+</button>
      </div>
    );
  }
}