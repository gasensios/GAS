import React, { Fragment, useState, useEffect , createContext } from "react";
import { useNavigate } from "react-router-dom";
import biblioteca from "../assets/bbdd/biblioteca.json";

// Contexto que permitirá construir el proveedor.
const contextoBiblioteca = createContext();

const ProveedorLibros = (props) => {
    const [biblioteca2, setBiblioteca] = useState([]);
    const navegar = useNavigate();

    const inicializarBiblioteca = () => {
        setBiblioteca(biblioteca.libros);
        };

    const borrarBiblioteca = () => {
        setBiblioteca([]);
        };

    const inventarLibro = () => {
        return {
        id: crypto.randomUUID(),
        titulo: "Yo, robot",
        autor: "Isaac Asimov",
        portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
        completado: false,
        sinopsis: "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede el creador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin. Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
        };
    };

    const insertarLibro = (libroAInsertar) => {
        var copiaLibros = [...biblioteca2, libroAInsertar];
        setBiblioteca(copiaLibros);
    };

    const buscarLibro = (identificador) => {
        const libroBuscado = biblioteca2.filter((libros) => {
            return libros.id === identificador;
        });
        return libroBuscado;
    };

    const borrarLibro = (identificador) => {
        try{
            const nuevosLibros = biblioteca2.filter((libro) => libro.id !== identificador);
            setBiblioteca(nuevosLibros);

            // Espera un tiempo antes de redirigir
            setTimeout(() => {
                navegar('/');
            }, 2000); // Ajusta el tiempo de espera según tus necesidades (en milisegundos)
        }
        catch (error){
            // Gestiona el error de forma adecuada (mostrar mensaje al usuario, etc.)
            console.error('Error al borrar el libro:', error);
        }
    };

    const adecuarURL = (url) => {
        return `https://openlibrary.org/search.json?q=${url
        .trim().replace(/\s/g, "+") }&fields=key,title,author_name,cover_i,language,first_sentence,number_of_pages_median&language=spa`;
        };

    useEffect(() => {
      inicializarBiblioteca(); // Se cargan los datos en el estado.
    }, []);

    // Objeto con las características a compartir en el contexto.
    const exportacion = { 
        biblioteca2,
        inicializarBiblioteca,
        borrarBiblioteca,
        inventarLibro,
        insertarLibro,
        buscarLibro,
        borrarLibro,
        adecuarURL,
     };

    return (
        <Fragment>
            <contextoBiblioteca.Provider value={exportacion}>
                {props.children}
            </contextoBiblioteca.Provider>
        </Fragment>
    );
};

export default ProveedorLibros;
export { contextoBiblioteca };