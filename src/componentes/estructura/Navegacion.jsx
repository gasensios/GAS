import React, { Fragment } from "react";
import "./Navegacion.css";

const Navegacion = () => {
return (
    <Fragment>
        <nav className='menu'>
            <ul className='menu__lista'>
                <li className='menu__item'>Inicio</li>
                <li className='menu__item'>Crear libro</li>
                <li className='menu__item'>Buscar libros</li>
            </ul>
        </nav>
    </Fragment>
    );
};

export default Navegacion;