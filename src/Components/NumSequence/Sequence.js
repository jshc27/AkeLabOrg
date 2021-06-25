import React, {useState, Fragment} from 'react';
import './Sequence.css';

const Sequence = () => {

    const [ arrayNumero, setarrayNumero ] = useState([])

    const [ numero, setNumero] = useState(1)

    const [ inputValue, setinputValue ] = useState("")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setinputValue(event.target.value)
    }

    const handleMostrarNumeros = () => {

        // setNumero(numero + 1)
        // // console.log('clic')
        // setarrayNumero([
        //     ...arrayNumero, numero
        
        // ])

        const newArray = []

        for(let i=1; i<= Number(inputValue); i=i+1) {
            console.log(arrayNumero)

            if(i % 3 ===  0 && i % 5 === 0) {
                newArray.push("ACDEFG")
            }else if(i % 3 === 0) {
                newArray.push("ACD")
            } else if(i % 5 === 0) {
                newArray.push("EFG")
            }else {
                newArray.push(i)
            }
        }
        
        setarrayNumero( newArray)

    }

    return (
        <Fragment>
            <div className="container">
            <h1>Secuencia de numeros</h1>
            <div className="description">
                <p>Numero</p>
            </div>
            <div className="main">
                <input
                type="text" 
                placeholder="Ingresar numero"
                onChange={handleChange}
                value={inputValue}
                /> 
                <button type="submit" onClick={ handleMostrarNumeros} >Mostrar</button>
                <div className="result">

                    {/* {
                        arrayNumero.map((item) =>
                            <p>{item},</p>
                        )
                    } */}
                    {
                        arrayNumero.join(",")
                    }

                </div>
            </div>
          </div>
        </Fragment>
    );
}

export default Sequence;