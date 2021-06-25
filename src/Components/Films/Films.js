import React, { Fragment} from 'react';
import './Films.css';



const Films = () => {

    const datos = [
        { id: 1, nombre:'Juan'},
        { id: 2, nombre:'Juhan'}
    ]

    const [equipo, setEquipo] = React.useState(null)

    React.useEffect(()=> {
        setEquipo(datos)
        
    }, [])


    return(
        <Fragment>
            <div className="container_Films">
                <div className="header_container">
                    <div className="title">
                        <h1>Peliculas</h1>
                    </div>
                    <div className="elements">
                        <input type="text" placeholder="Buscar Pelicula"/>
                        <div className="filter_icon">
                            <img src="../FilterIcon.png"/>
                        </div>
                        <div className="text_ordenar">
                            <p>Ordenar</p>
                            <div className="order-icon">
                                <img src="../ArrowIcon.png"/>
                            </div>
                        </div>
                    </div>
                </div>
                <main className="main">
                    <div className="main_container">
                        <div className="card1">
                            <div className="card_title">
                                <h3>Funciona</h3>
                            </div>
                            <div className="container_dates">
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="conatiner_dates">
                                    <p>Funci</p>
                                    <p>Funci</p>
                                </div>
                            </div>
                        </div>
                        <div className="card2">
                            <div className="card_title">
                                <h3>Funciona</h3>
                            </div>
                            <div className="container_dates">
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="conatiner_dates">
                                    <p>Funci</p>
                                    <p>Funci</p>
                                </div>
                            </div>
                        </div>
                        <div className="card3">
                            <div className="card_title">
                                <h3>Funciona</h3>
                            </div>
                            <div className="container_dates">
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="conatiner_dates">
                                    <p>Funci</p>
                                    <p>Funci</p>
                                </div>
                            </div>
                        </div>
                        <div className="card4">
                            <div className="card_title">
                                <h3>Funciona</h3>
                            </div>
                            <div className="container_dates">
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="conatiner_dates">
                                    <p>Funci</p>
                                    <p>Funci</p>
                                </div>
                            </div>
                        </div>
                        <div className="card5">
                            <div className="card_title">
                                <h3>Funciona</h3>
                            </div>
                            <div className="container_dates">
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="conatiner_dates">
                                    <p>Funci</p>
                                    <p>Funci</p>
                                </div>
                            </div>
                        </div>
                        <div className="card6">
                            <div className="card_title">
                                <h3>Funciona</h3>
                            </div>
                            <div className="container_dates">
                                <div className="img">
                                    <img></img>
                                </div>
                                <div className="conatiner_dates">
                                    <p>Funci</p>
                                    <p>Funci</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Fragment>
    );

}


export default Films;