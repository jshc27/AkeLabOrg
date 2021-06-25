import React from 'react';
import Fibonacci from './Components/Fibonacci/Fibonacci';
import Sequence from './Components/NumSequence/Sequence';
import Films from './Components/Films/Films';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
        <div className="App">
        <div className="navbar-btn">
            <Link to="/" className="btn-inicio">
              Inicio
            </Link>
            <Link to="/fibonacci" className="btn-fibonacci">
              Fibonacci
            </Link>
            <Link to="/sequence" className="btn-sequence">
              Sequence
            </Link>
            <Link to="/films" className="btn-films">
              Films
            </Link>
        </div>
          <Switch>
            <Route path="/fibonacci" exact>
              <Fibonacci />
            </Route>
            <Route path="/sequence" exact>
              <Sequence />
            </Route>
            <Route path="/films" exact>
              <Films />
            </Route>
            <Route path="/" exact>
              <div> 
              <p className="text">Hola, excelente dia. Esta es la pagina de inicio.
                Ingresa a cada una de las rutas y experimenta.
              </p>
              </div>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
