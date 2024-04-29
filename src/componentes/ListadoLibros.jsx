import React, { Fragment } from "react";
import biblioteca from "../assets/bbdd/biblioteca.json";
import Libro from "../componentes/Libro.jsx";

const ListadoLibros = () => {
    return (
      <Fragment>
        <h2>Listado de libros</h2>
        {Array.isArray(biblioteca.libros) && biblioteca.libros.length
          ? biblioteca.libros.map((datos_libro) => {
              // Se crea un nuevo objeto JSON con los datos del libro
              const libro = {
                id: datos_libro.id,
                titulo: datos_libro.titulo,
                autor: datos_libro.autor,
                portada: datos_libro.portada,
                // Se incluyen las propiedades adicionales si las hay
                completado: datos_libro.completado,
                sinopsis: datos_libro.sinopsis,
              };
  
              // Se pasa el objeto JSON al componente <Libro>
              return <Libro key={datos_libro.id} libro={libro} />;
            })
          : "No se han encontrado libros."}
      </Fragment>
    );
  };
  
export default ListadoLibros;