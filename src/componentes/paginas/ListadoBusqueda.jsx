import React, { useContext, useState, useEffect } from "react";
import './ListadoBusqueda.css'

const ListadoBusqueda = ({busqueda}) => {

    const [cantidad1, setCantidad1] = useState(0);

    const contarLibros = () => {
        setCantidad1(busqueda.length);
      };
    
      useEffect(() => {
        contarLibros();
        console.log(`La biblioteca contiene ${cantidad1} libro(s).`);
        }, [busqueda]);
    
    return (
        <div className='resumen__contenido'>
          La biblioteca contiene {cantidad1 ? ` ${cantidad1} libro(s).` : " cero libros."}
        </div>
    );
  };
  
  export default ListadoBusqueda;