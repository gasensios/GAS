import React, { Fragment } from "react";
//import ListadoLibros from "../ListadoLibros.jsx";
import Rutas from "../paginas/Rutas.jsx";
import "./Contenido.css";

const Contenido = () => {
    return (
            <Fragment>
                <main className='main'>
                    <Rutas />
                </main>
            </Fragment>
        );
};

export default Contenido;