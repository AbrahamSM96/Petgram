import React, { Fragment } from "react";
import { FavsWithQuery } from "../container/GetFavorites";
import { Layout } from "../components/Layout";

// En vez de exportar de forma nombrada, lo exportamos por default por el Suspense
export default () => {
  return (
    <Fragment>
      <Layout
        title="Tus favoritos"
        subtitle="Aqui puedes encontrar tus favoritos"
      >
        <FavsWithQuery />
      </Layout>
    </Fragment>
  );
};
