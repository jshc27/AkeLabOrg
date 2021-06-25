import React, { Fragment} from 'react';
import './Films.css';



const Films = () => {

    return(
        <Fragment>
            <div className="container_Films">
                <div className="header_container">
                    <div className="title">
                        <h1>Peliculas</h1>
                    </div>
                    <div className="elements">
                        <input type="text" placeholder="Buscar Pelicula"/>
                        <div className="filter-icon">
                        </div>
                        <div className="text_ordenar">
                            <p>Ordenar</p>
                            <div className="order-icon"></div>
                        </div>
                    </div>
                </div>



            </div>
        </Fragment>
    );

}


export default Films;