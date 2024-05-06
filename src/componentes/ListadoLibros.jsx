import React, { Fragment } from "react";
import biblioteca from "../assets/bbdd/biblioteca.json";
import Libro from "../componentes/Libro.jsx";
import './ListadoLibros.css'

const ListadoLibros = () => {
    return (
      <Fragment>
        <h2 className="listadolibro__titulo">Listado de libros</h2>
        {Array.isArray(biblioteca.libros) && biblioteca.libros.length
          ? biblioteca.libros.map((datos_libro) => {
              return <Libro key={datos_libro.id} libro={datos_libro} />;
            })
          : "No se han encontrado libros."}
      </Fragment>
    );
  };
  
export default ListadoLibros;