import React, { Fragment, useContext, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";
import MostrarErrores from "./MostrarErrores.jsx";

const Crear = () => {

    const libroInicial = {
        // Se genera un UUID aleatorio para cada libro.
        id: crypto.randomUUID(),
        titulo: "",
        autor: "",
        portada: "",
        completado: false,
        sinopsis: "",
    };

    const [libro, setLibro] = useState(libroInicial);
    const { insertarLibro } = useContext(contextoBiblioteca);
    const retornar = useNavigate();
    
    //accediendo al VDOM
    const tituloRef = useRef(null);
    const autorRef = useRef(null);
    const sinopsisRef = useRef(null);
    
    //controlando errores
    const [errores, setErrores] = useState([]);
    let arrayErrores = []; 

    const actualizarDato = (evento) => {
        const { name, value, checked } = evento.target;
        evento.target.type === "checkbox"
        ? setLibro({ ...libro, [name]: checked })
        : setLibro({ ...libro, [name]: value });
    };

    const validarFormulario = () => {

        if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,20}$/.test(tituloRef.current.value)) {
            arrayErrores = [ ...arrayErrores, `El título no tiene formato válido (de 2 a 20 caracteres).`, ];
        }
        if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,30}$/.test(autorRef.current.value)) {
            arrayErrores = [ ...arrayErrores, `El autor no tiene formato válido (de 2 a 30 caracteres).`, ];
        }
        if (!/^[a-zA-Z0-9][a-zA-Z0-9 ]{2,40}$/.test(sinopsisRef.current.value)) {
            arrayErrores = [ ...arrayErrores, `La sinopsis no tiene formato válido (de 2 a 30 caracteres).`, ];
        }
        setErrores(arrayErrores);

        return arrayErrores.length === 0;
    };

    const realizarEnvio = async (evento) => {
        evento.preventDefault();
    
        if (validarFormulario() && confirm(`¿Desea guardar este libro en su biblioteca?`)) {
          try {
            await insertarLibro(libro); // Se realiza la inserción tras la confirmación
            retornar('/'); // Redirigir a la pagina Principal, tras la inserción
          } catch (error) {
            <MostrarErrores error />
          }
        }
      };
    
    const hacerReset = () => {
        setLibro(libroInicial); // Reset form state to initial values
        setErrores(arrayErrores);
    };

    return(
        <Fragment>
            <form onSubmit={realizarEnvio}>
                <label htmlFor='titulo'>Título</label>
                <input
                    ref={tituloRef}
                    name='titulo'
                    className='form__input'
                    type='text'
                    placeholder='Escribe el título del libro'
                    required
                    value={libro.titulo || ""}
                    onChange={(evento) => {
                        actualizarDato(evento);
                    }}
                ></input>
                <br /><br />
                <label htmlFor='autor'>Autor</label>
                <input
                    ref={autorRef}
                    name='autor'
                    className='form__input'
                    type='text'
                    placeholder='Escribe el autor del libro'
                    required
                    value={libro.autor || ""}
                    onChange={(evento) => {
                        actualizarDato(evento);
                    }}
                ></input>
                <br /><br />
                <label htmlFor='portada'>Portada</label>
                <input
                    name='portada'
                    className='form__input'
                    type='text'
                    placeholder='Escribe la portada del libro'
                    required
                    value={libro.portada || ""}
                    onChange={(evento) => {
                        actualizarDato(evento);
                    }}
                ></input>         
                <br /><br />
                <label htmlFor='sinopsis'>Sinopsis</label>
                <input
                    ref={sinopsisRef}
                    name='sinopsis'
                    className='form__input'
                    type='text'
                    placeholder='Escribe la sinopsis del libro'
                    required
                    value={libro.sinopsis || ""}
                    onChange={(evento) => {
                        actualizarDato(evento);
                    }}
                ></input>
                <br /> 
                <button type="submit" className="boton boton--volver">Guardar en la biblioteca</button> 
                <button type="button" onClick={hacerReset} className="boton boton--cancelar">Resetear</button>        
                <br /><br />
                <div>
                    {errores.map((error, indice) => {
                        return (
                            <div key={indice}>
                                <MostrarErrores error={error} />
                            </div> )
                    })}
                </div>
            </form>
        </Fragment>
    );
}

export default Crear;