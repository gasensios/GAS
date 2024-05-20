import React, { useState, useEffect } from "react";
import './ListadoResumen.css'

const ListadoResumen = (props) => {

    const { resumen } = props;

    const [cantidad, setCantidad] = useState([]);

    const contarLibros = () => {
        setCantidad(resumen.length);
      };
    
      useEffect(() => {
        contarLibros();
        console.log(`La biblioteca contiene ${cantidad} libro(s).`);
        }, [resumen]);
    
    return (
        <div className='resumen__contenido'>
          La biblioteca contiene {cantidad ? ` ${cantidad} libro(s).` : " cero libros."}
        </div>
    );
  };
  
  export default ListadoResumen;