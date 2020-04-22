import React from 'react';
import { PhotoCard } from '../PhotoCard';
// hacemos la consulta con graphql para obtener las fotos


// de la data obtenemos el arreglo de photos que a su vez es un objeto vacio
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {  
    return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

