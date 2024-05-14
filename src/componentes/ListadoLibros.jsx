import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import biblioteca from "../assets/bbdd/biblioteca.json";
import Libro from "../componentes/Libro.jsx";
import './ListadoLibros.css'

const ListadoLibros = () => {
    return (
      <div className="libros__listado">
        <Fragment>
            {Array.isArray(biblioteca.libros) && biblioteca.libros.length
              ? biblioteca.libros.map((datos_libro) => {
                  return (
                  <Link key={datos_libro.id} to='/mostrar' className='libros__listado' >
                    <Libro libro={datos_libro} />
                  </Link>
                  );
                })
              : "No se han encontrado libros."}
          </Fragment>
      </div>
    );
  };
  
export default ListadoLibros;