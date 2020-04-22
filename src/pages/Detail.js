import React, { Fragment } from "react";
import { PhotoCardWithQuery } from "../container/PhotoCardWithQuery";
import { Layout } from "../components/Layout";
import { Logo } from "../components/Logo";

export const Detail = ({ detailId }) => (
  <Fragment>
    <Logo />
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  </Fragment>
);
