import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Libro from "./Libro.jsx";
import ListadoResumen from './ListadoResumen.jsx';
import biblioteca from "../assets/bbdd/biblioteca.json";
import './ListadoLibros.css'

const ListadoLibros = () => {
  
  const [biblioteca2, setBiblioteca] = useState([]);

  const inicializarBiblioteca = () => {
    setBiblioteca(biblioteca.libros);
    };

  const borrarBiblioteca = () => {
    setBiblioteca([]);
    };
  
  const inventarLibro = () => {
    return {
      id: crypto.randomUUID(),
      titulo: "Yo, robot",
      autor: "Isaac Asimov",
      portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
      completado: false,
      sinopsis: "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede el creador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin. Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
    };
  };

  const insertarLibro = (libroAInsertar) => {
    var copiaLibros = [...biblioteca.libros,libroAInsertar];
    setBiblioteca(copiaLibros);
  };

  useEffect(() => {
    inicializarBiblioteca(); // Se cargan los datos en el estado.
  }, []);

  return (
      <Fragment>
        <div>
          <button className='boton boton--aceptar' onClick={(event) => {inicializarBiblioteca();}}>
            Cargar libros
          </button> 
          <button className='boton boton--aceptar' onClick={(event) => {borrarBiblioteca();}}>
            Borrar libros
          </button>
          <button className='boton boton--aceptar' onClick={(event) => {insertarLibro(inventarLibro());}}>
            Insertar libros
          </button> 
        </div>
        <ListadoResumen resumen={biblioteca2}/>
        <section className='libros__listado'>
          {
          Array.isArray(biblioteca2) && biblioteca2.length
            ? biblioteca2.map((datos_libro) => {
            return (
              <Link key={datos_libro.id} to='/mostrar' className='listado__libro'>
                <Libro key={datos_libro.id} libro={datos_libro} />
              </Link>
            );
          })
          : "No se han encontrado libros."}
        </section>
      </Fragment>
    );
};

export default ListadoLibros;