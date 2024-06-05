import React from "react";
import './MostrarErrores.css';

const MostrarErrores = (props) => {
    const { error } = props;

    return (
        <section>
            <div className='error__contenido'>
                {error ? error : "Mensaje de error no especificado."}
            </div>
        </section>
    );
};

export default MostrarErrores;