import React, { Fragment, useContext , useEffect, useState } from "react";
import BuscarListado from "./BuscarListado.jsx";
import Cargando from "../Cargando.jsx";
import MostrarErrores from "./MostrarErrores.jsx";
import useLibrosAPI from "../../hooks/useLibrosAPI.jsx";
import ListadoBusqueda from "./ListadoBusqueda.jsx";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";

const BuscarResultado = ({endpoint}) => {

    const { busqueda, buscando, errores } = useLibrosAPI(endpoint);
    const { insertarLibro } = useContext(contextoBiblioteca);

    const incluirLibroAPI = (identificador) => {
        const libroBuscado = busqueda.filter((libro) => {
            console.log(libro.id);
            return libro.id === identificador;
        });
        libroBuscado.length && insertarLibro(libroBuscado[0]);
    };

    return (
        <Fragment>
            <div className='libros__listado' onClick={(evento) => {
                        evento.target.parentNode.classList.contains("libro") &&
                            confirm("¿Desea incluir este libro en su biblioteca?") &&
                            incluirLibroAPI(evento.target.parentNode.id);
                        }}>
                {busqueda ? (
                    <Fragment>
                        <ListadoBusqueda busqueda={busqueda} />
                        <BuscarListado busqueda={busqueda} />
                    </Fragment>
                ) : null}
                {buscando && <Cargando />}
                {errores && <MostrarErrores />}
            </div>
        </Fragment>
    );
}

export default BuscarResultado;
/*evento.target.parentNode.classList.contains("libro__contenido") &&
confirm("¿Desea incluir este libro en su biblioteca?") &&
incluirLibroAPI(evento.target.parentNode.id);
}}>*/
