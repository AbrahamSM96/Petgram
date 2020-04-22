import { useEffect, useState, useRef } from "react";

export function useNearScreen() {
  // Inicializamos el useRef para referenciar el elemento Article de Photocard
  const element = useRef(null);
  //usaremos el usestate para saber si se muestra en el viewport
  // setshow y setliked es para actualizar el estado
  const [show, setShow] = useState(false);

  useEffect(
    function() {
      // la promesa y la ternaria es para cargar la libreria en caso de que no lo soporte
      // el navegador
      Promise.resolve(
        typeof window.IntersectionObserver !== "undefined"
          ? window.IntersectionObserver
          : import("intersection-observer")
      ).then(() => {
        // El intersectionObserver nos ayuda a saber que elementos estan siendo
        // visualizados en el viewport
        const observer = new window.IntersectionObserver(function(entries) {
          // isIntersecting sabe que elemento esta a la vista del viewport
          const { isIntersecting } = entries[0];
          // si esta a la vista, cambiamos el estado a verdadero  y desconectamos el
          // observer
          if (isIntersecting) {
            // actualizamos el estado con setShow
            setShow(true);
            // evitamos que el observador para que deje de funcionar
            observer.disconnect();
          }
        });
        //   inicializamos el observer pasandole el elemento que queremos observar que es el current
        observer.observe(element.current);
      });
    },
    [element]
  );
  // (show)la primera posicion nos dice si tenemos que mostrar el elemento que esta en el viewport
  //   (element) es la referencia al elemento que queremos que nos muestre
  return [show, element];
}
