import React, { Fragment } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./componentes/estructura/Cabecera.jsx";
import "./componentes/estructura/Navegacion.jsx";
import "./componentes/estructura/Contenido.jsx";
import "./componentes/estructura/PiePagina.jsx";

const App = () => {
  return (
    <>
      <Cabecera />
      <Navegacion />
      <Contenido />
      <PiePagina />
    </>
  );
}

export default App;