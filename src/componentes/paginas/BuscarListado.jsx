import React, { Fragment, useEffect, useState  } from "react";
import Libro from "../Libro.jsx";
import MostrarErrores from "./MostrarErrores.jsx";

const BuscarListado = ({ busqueda }) => {
    return (
        <Fragment>
            {busqueda.length
            ? busqueda.map((datos_libro) => {
                return <Libro key={datos_libro.id} libro={datos_libro} />;
            })
            : <MostrarErrores />}
        </Fragment>
    );
};

export default BuscarListado;