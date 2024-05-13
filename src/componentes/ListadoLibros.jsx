import React, { Fragment } from "react";
import biblioteca from "../assets/bbdd/biblioteca.json";
import Libro from "../componentes/Libro.jsx";
import './ListadoLibros.css'

const ListadoLibros = () => {
    return (
      <div className="libros__listado">
        <Fragment>
            {Array.isArray(biblioteca.libros) && biblioteca.libros.length
              ? biblioteca.libros.map((datos_libro) => {
                  return <Libro key={datos_libro.id} libro={datos_libro} />;
                })
              : "No se han encontrado libros."}
          </Fragment>
      </div>
    );
  };
  
export default ListadoLibros;