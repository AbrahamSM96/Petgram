import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { ListOfFavs } from "../components/ListOfFavs";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
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
  const { favs } = data;

  return (
    <Fragment>
      <ListOfFavs favs={favs} />
      <ToastsContainer store={ToastsStore} />
    </Fragment>
  );
};

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy="network-only">
    {renderProp}
  </Query>
);
