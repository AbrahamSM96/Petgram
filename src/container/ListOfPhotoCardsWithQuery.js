import React from "react";
import { PhotoCard } from "../components/PhotoCard";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

const GET_PHOTO = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTO} variables={{ categoryId }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      const { photos = {} } = data;
      return (
        <ul>
          {photos.map(photo => (
            <PhotoCard key={photo.id} {...photo} />
          ))}
        </ul>
      );
    }}
  </Query>
);
