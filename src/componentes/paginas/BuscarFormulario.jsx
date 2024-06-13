import React, { Fragment, useContext, useRef } from "react";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";

const BuscarFormulario = ({url, cambiarURL}) => {

    const urlRef = useRef(null);
    
    const { adecuarURL } = useContext(contextoBiblioteca);

    const manejarClick = () => {
        if (url) {
            cambiarURL(undefined);
            urlRef.current.value = "";
        } else {
            cambiarURL(adecuarURL(urlRef.current.value));
        }
    };

    return (
        <Fragment>
            <h2 className='buscar__titulo'>Buscar libros</h2>
            <input name='url' type='text'
                placeholder='Escriba por el tema que quiera buscar (autor, título, ISBN...)'
                className='form__input form__input--search' 
                ref={urlRef} ></input>
            <button
                className='boton boton--volver'
                onClick={manejarClick}
            >
                {url ? "Nueva" : "Buscar libros"}
            </button>
        </Fragment>
    );
}

export default BuscarFormulario;