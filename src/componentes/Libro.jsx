import React, { Fragment } from "react";
import sin_portada from "../assets/img/sin_portada.png";

const Libro = (props) => {
    // Se cambia la firma del componente para recibir un solo objeto como parámetro
    const { libro } = props;
    // Se desestructuran las propiedades del objeto JSON
    const { id, titulo, autor, portada, completado, sinopsis } = libro;
  
    return (
      <Fragment>
        {/* ... resto del código del componente, utilizando las propiedades desestructuradas */}
        <img
          width="150px" height="225px" src={portada ? portada : sin_portada}
        />
        <div>{titulo ? titulo : "No se ha especificado título."}</div>
        <div>{autor ? autor : "No se ha especificado autor."}</div>
        <div>{sinopsis ? sinopsis: "No se ha especificado sipnosis."}</div>
        {/* ... resto del código del componente, utilizando las propiedades desestructuradas */}
      </Fragment>
    );
  };
  
  export default Libro;