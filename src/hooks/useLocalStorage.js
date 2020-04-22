import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setValue] = useState(() => {
    //   esta funcion devolvera el valor que queremos que tenga de estado
    try {
      //   recuperamos el like del local storage
      const item = window.localStorage.getItem(key);
      //   con esta comprobacion le podemos quitar el like, si no lo mantiene si no tiene la comprobacion
      return item !== null ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = value => {
    try {
      //  el setItem le ponemos la key donde queremos guardar el valor que ahora es
      // like, y le pasamos el valor(value)
      window.localStorage.setItem(key, JSON.stringify(value));
      // actualizamos el estado con el valor
      setValue(value);
    } catch (e) {
      console.error(e);
    }
  };
  
  return [storedValue, setLocalStorage];
}
