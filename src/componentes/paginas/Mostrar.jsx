import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import LibroDetalles from "../LibroDetalles.jsx";
import { contextoBiblioteca } from "../../contextos/ProveedorLibros.jsx";
 
const librodet = {
    id: "85f06643-f095-4a85-9d93-b9a78eb48r54",
    titulo: "Yo, robot",
    autor: "Isaac Asimov",
    portada: "https://imagessl0.casadellibro.com/a/l/t7/40/9788435021340.jpg",
    completado: false,
    sinopsis:
    "Esta obra visionaria tuvo una gran influencia en la ciencia ficción posterior, pero también en la propia ciencia de la robótica. Asimov formuló por primera vez las tres leyes fundamentales de la robótica, con claras implicaciones éticas y psicológicas. ¿Qué diferencia hay entre un robot inteligente y un ser humano? ¿Puede el creador de un robot predecir su comportamiento? ¿Debe la lógica determinar lo que es mejor para la humanidad? Yo, robot conecta entre sí una serie de historias de todo tipo de máquinas inteligentes a través de la robopsicóloga Susan Calvin. Estos robots son cada vez más perfectos y llegan a desafiar en ocasiones a sus creadores.",
    };

const Mostrar = () => {

    const { buscarLibro } = useContext(contextoBiblioteca);

    const { identificador } = useParams();
    const libroFiltrado = buscarLibro(identificador);

    const mostrarmensaje = () => {
        return (
            <div>
                <p>Libro eliminado correctamente</p>
            </div>
        );
    };

    return (
        <Fragment>
            <section className='mostrar'>
                { libroFiltrado.length
                    ? <LibroDetalles libroBuscado={libroFiltrado[0]} />
                    : mostrarmensaje()
                }
            </section>
        </Fragment>
    );
}

export default Mostrar;