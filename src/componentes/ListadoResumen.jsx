import React, { useContext, useState, useEffect } from "react";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";
import './ListadoResumen.css'

const ListadoResumen = () => {
    const { biblioteca2 } = useContext(contextoBiblioteca);
    const [cantidad, setCantidad] = useState([]);

    const contarLibros = () => {
        setCantidad(biblioteca2.length);
      };
    
      useEffect(() => {
        contarLibros();
        console.log(`La biblioteca contiene ${cantidad} libro(s).`);
        }, [biblioteca2]);
    
    return (
        <div className='resumen__contenido'>
          La biblioteca contiene {cantidad ? ` ${cantidad} libro(s).` : " cero libros."}
        </div>
    );
  };
  
  export default ListadoResumen;