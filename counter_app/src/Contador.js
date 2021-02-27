import React, { Component } from "react";

export default class Contador extends Component {
  constructor() {
    super();
    this.state = { cuenta: 0 };
    //this.incremetarContador = this.incremetarContador.bind(this);
  }
  /** @description Increments counter by one unit. (Incrementa el contador por una unidad)  */
  incremetarContador() {
    this.setState({
      cuenta: this.state.cuenta + 1
    });
  }

/** @description Decrements counter by one unit. (Decrementa el contador por una unidad) */
decrementarContador() {
    this.setState({
      cuenta: this.state.cuenta - 1
    });
  }
  render() {
    return (
      <div>
        <h1>Contador</h1>
        <p>This component can add or substract one unit to the counter</p>
        <p>Este componente puede sumar o restar una unidad al contador</p>
        <p>Cuenta:{this.state.cuenta}</p>
        <button onClick={this.incremetarContador.bind(this)}>+</button>
        <button onClick={this.decrementarContador.bind(this)}>-</button>
      </div>
    );
  }
}
