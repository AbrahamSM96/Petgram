import React, { Fragment } from "react";
import { PhotoCard } from "../components/PhotoCard";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading)
    return (
      <Fragment>
        <SkeletonTheme color="#dddddd" highlightColor="#b5b3b3">
          <Skeleton width={468} height={264} />
        </SkeletonTheme>
      </Fragment>
    );

  if (error) return ToastsStore.error("Error");

  const { photo = {} } = data;
  return (
    <Fragment>
      <PhotoCard {...photo} />;
      <ToastsContainer store={ToastsStore} />
    </Fragment>
  );
};

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {renderProp}
  </Query>
);
