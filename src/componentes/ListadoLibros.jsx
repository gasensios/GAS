import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import ListadoResumen from './ListadoResumen.jsx';
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";
import './ListadoLibros.css'

const ListadoLibros = () => {
  
  const { biblioteca2, inicializarBiblioteca, borrarBiblioteca, inventarLibro, 
  insertarLibro } = useContext(contextoBiblioteca);

  return (
      <Fragment>
        <div>
          <button className='boton boton--cargar' onClick={(event) => {inicializarBiblioteca();}}>
            Cargar libros
          </button> 
          <button className='boton boton--borrar' onClick={(event) => {borrarBiblioteca();}}>
            Borrar libros
          </button>
          <button className='boton boton--insertar' onClick={(event) => {insertarLibro(inventarLibro());}}>
            Insertar libros
          </button> 
        </div>
        <ListadoResumen />
        <section className='libros__listado'>
          {
          Array.isArray(biblioteca2) && biblioteca2.length
            ? biblioteca2.map((datos_libro) => {
            return (
              <Link key={datos_libro.id} to={`/mostrar/${datos_libro.id}`} className='libros__listado'>
                <Libro libro={datos_libro} />
              </Link>
            );
          })
          : "No se han encontrado libros."}
        </section>
      </Fragment>
    );
};

export default ListadoLibros;