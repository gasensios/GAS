import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  } from "@fortawesome/free-regular-svg-icons";
import sin_portada from "../assets/img/sin_portada.png";
import { contextoBiblioteca } from "../contextos/ProveedorLibros.jsx";
import './LibroDetalles.css';

const LibroDetalles = (props) => {
    // Se cambia la firma del componente para recibir un solo objeto como parámetro
    const { libroBuscado } = props;
    // Se desestructuran las propiedades del objeto JSON
    const { id, titulo, autor, portada, completado, sinopsis } = libroBuscado;
    const icono = completado ? faCircleCheck : faCircleXmark;

    const { borrarLibro } = useContext(contextoBiblioteca);

    return (
      <Fragment>
        <article id={id ? id : crypto.randomUUID()} className='librodet'>
        <div className="imagen-texto-contenedor">
          <div className="imagen-texto-wrapper">
              <img className='librodet__portada'
                src={portada ? portada : sin_portada}
              ></img>
              <div className='librodet__completado'>
                <FontAwesomeIcon
                  title={completado ? 'Leído' : 'No Leído'}
                  icon={icono}
                  className={completado ? 'librodet__completado--true' : 'librodet__completado--false'}
                  size='2x'
                />
              <div className='librodet__titulo'>
                <h1>
                {titulo ? titulo : "No se ha especificado título."}
                </h1>
              </div>
              <div className='librodet__autor'>
                <h2>
                {autor ? autor : "No se ha especificado autor."}
                </h2>
              <div className='librodet__sinopsis'>
                <td>
                {sinopsis ? sinopsis : "No se ha especificado sinopsi."}
                </td>
              </div>
              <input type='button' value='Eliminar de la biblioteca' className='boton boton--cancelar'
                onClick={(evento) => { confirm(`¿Desea eliminar ${ titulo ? titulo : "Sin título" } de su biblioteca?`)
                && borrarLibro(id); }}/>                
              <Link to='/'>
                <input type='button' value='&lt; Atrás' className='boton boton--volver' />
              </Link>
              </div>
              </div>
            </div>            
          </div>

        </article>
      </Fragment>
    );
  };
  
  export default LibroDetalles;