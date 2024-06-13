import React, { Fragment, useEffect, useState } from "react";

const useLibrosAPI = (urlABuscar) => {

    const [busqueda, setBusqueda] = useState(undefined);
    const [buscando, setBuscando] = useState(false);
    const [errores, setError] = useState(false);

    const traerLibrosAPI = (url) => {
        setBuscando(true);
        return fetch(url)
            .then((respuesta) => {
                return respuesta.json();
            }).then((datos) => {
                setBusqueda(manipularDatosAPI(datos));
            }).catch((error) => {
                setError(true);
                console.log(error.message);
            }).finally(() => {
                setBuscando(false);
            });
        };
   
    useEffect(() => {
        traerLibrosAPI(urlABuscar);
        }, []);

    const adecuarLibro = (libroAPI) => {
        return {
            id: crypto.randomUUID(),
            titulo: libroAPI.title ? libroAPI.title : "Sin especificar",
            autor: libroAPI.author_name ? libroAPI.author_name[0] : "Sin especificar",
            portada: libroAPI.cover_i
                ? `https://covers.openlibrary.org/b/id/${libroAPI.cover_i}.jpg`
                : undefined,
            completado: false,
            sinopsis: libroAPI.first_sentence
                ? libroAPI.first_sentence.toString()
                : "Ninguna",
            };
        };

    const manipularDatosAPI = (busquedaLibrosAPI) => {
        let librosConFormato = [];
        busquedaLibrosAPI.docs &&
        (librosConFormato = busquedaLibrosAPI.docs.map((documento) => {
            return adecuarLibro(documento);
        }));
        return librosConFormato;
        };

    return { busqueda, buscando, errores };
};

export default useLibrosAPI;