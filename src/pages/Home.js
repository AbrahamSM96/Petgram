import React, { Fragment } from "react";
import { ListOfPhotoCardsWithQuery } from "../container/ListOfPhotoCardsWithQuery";
import { ListOfCategories } from "../components/ListOfCategories";
import { Helmet } from "react-helmet";
import { Logo } from "../components/Logo";

const HomePage = ({ categoryId }) => {
  return (
    <Fragment>
      <Logo />
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta
          name="description"
          content="Con petgram puedes encontrar fotos de animales domesticos muy bonitos"
        />
      </Helmet>
      <ListOfCategories key={categoryId} />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} key={categoryId} />
    </Fragment>
  );
};

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;
});
