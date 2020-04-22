import { useState, useEffect } from "react";

// useState agrega un estado local a nuestro componente
// useEffect nos permitira ejecutar una funcion cada vez que rendericemos un componente
// useContext nos permitira acceder a la context API para tener valores que utilizaremos
// en nuestra aplicacion de manera global

export function useCategoriesData() {
  const [categories, setCategories] = useState(Array(6).fill({}));
  const [loading, setLoading] = useState(false);

  // este useEffect es el que hace la peticion a la api
  useEffect(function() {
    setTimeout(() => {
      setLoading(true);
      window
        .fetch("https://petgram-server-abrahamsm.now.sh/categories")
        .then(rslt => rslt.json())
        .then(json => {
          setCategories(json);
          setLoading(false);
        });
      // si le pasamos un array vacio significa que solo debe ejecutarse cuando
      // se monta el componente
    }, 2000);
  }, []);

  return { categories, loading };
}
