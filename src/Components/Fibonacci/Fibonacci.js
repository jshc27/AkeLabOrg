import React, { Fragment, useState } from 'react';
import './Fibonacci.css';


const Fibonacci = () => {

  const [ arrayNumero, setarrayNumero ] = useState([])

  const [ inputValue, setinputValue ] = useState("")

  const handleChange = (event) => {
      setinputValue(event.target.value)
  }

  const handleMostrarNumeros = () => {

    const secuencia = []

    for(let i=1; i<= Number(inputValue); i=i+1) {
        // console.log(arrayNumero)
        let newNumber = 1;
        newNumber = secuencia[i] + secuencia[i + 1];
        // console.log(newNumber)
        secuencia.push(newNumber);
    }
    setarrayNumero(secuencia);
  }

  return (
      <Fragment>
          <div className="container">
              <h1>FIBONACCI</h1>
              <div className="description">
              <p>Es una sucesión de números que inician por la unidad y cada uno
                de sus términos es la suma de los dos anteriores (1, 1, 2, 3, 5, 8, 13, 21, ...).</p>
              </div>
              <div className="mains">
                  <input
                  type="text" 
                  placeholder="Ingresar numero"
                  onChange={handleChange}
                  value={inputValue}
                  /> 
                  <button type="submit" onClick={ handleMostrarNumeros} >Mostrar</button>
                  <div className="result">
                      {
                          arrayNumero.join(",")
                      }
                  </div>
              </div>
          </div>
      </Fragment>
  );
}

export default Fibonacci;

