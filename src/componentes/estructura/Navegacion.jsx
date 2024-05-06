import React, {  useState, Fragment } from "react";
import "./Navegacion.css";

const Navegacion = () => {
return (
    <Fragment>
        <nav className='menu'>
            <ul className='menu__list'>
                <li className='menu__item menu__link'>Inicio</li>
                <li className='menu__item menu__link'>Crear libro</li>
                <li className='menu__item menu__link'>Buscar libros</li>
            </ul>
        </nav>
    </Fragment>
    );
};

export default Navegacion;