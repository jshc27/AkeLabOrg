import React, { Component, Fragment, useState } from 'react';
import './Fibonacci.css';

class Fibonacci extends Component {

  constructor(props) {
    super(props);
    this.state = {
      previous1:1,
      previous2: 0,
      value: ''
    };
  }

  clickResult = (event) => {
    console.log(event.target.type);
    let a = this.state.previous1 +this.state.previous2;
    this.setState({
      previous1:a,
      previous2:this.state.previous1
    })
  }

    render() {
        return(
          <Fragment>
          <div className="container">
              <h1>FIBONACCI</h1>
              <div className="description">
                <p>Es una sucesión de números que inician por la unidad y cada uno
                de sus términos es la suma de los dos anteriores (1, 1, 2, 3, 5, 8, 13, 21, ...).</p>
              </div>
              <div className="main">
                <input  
                  type="number" 
                  placeholder="Ingresar numero">
                </input>
                <button type="submit" onClick={this.clickResult} >Mostrar</button>
                <div className="result">{this.state.previous1}</div>
              </div>
          </div>
          </Fragment>
        )
    }
}

export default Fibonacci;