import { useState, useEffect } from "react";

export function useShowFixedScroll() {
  const [showFixed, setShowFixed] = useState(false);

  // este useEffect se va a ejecutar para que desaparezca la lista pequeña de historias
  useEffect(
    function() {
      const onScroll = e => {
        const newShowFixed = window.scrollY > 200;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);

      // ejecutamos este return para evitar el memorylick
      return () => document.removeEventListener("scroll", onScroll);
    },
    [showFixed]
  );
  return { showFixed };
}
