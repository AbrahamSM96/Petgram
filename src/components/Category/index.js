import React, { Fragment } from "react";
import { Link, Image } from "./styles";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// si path no esta inicializado, no cargaran los componenetes y dara error, por eso tiene el gato
export const Category = ({ cover, path = "#", emoji }) => {
  return (
    <Link to={path}>
      <SkeletonTheme color="#dddddd" highlightColor="#b5b3b3">
        {!cover && <Skeleton width={74} height={74} circle={true} />}
        {!cover && <Skeleton width={20} height={20} circle={true} />}

        {cover && (
          <Fragment>
            <Image src={cover} />
            {emoji}
          </Fragment>
        )}
      </SkeletonTheme>
      {/* <Image src={cover} loading={loading} />
    {emoji} */}
    </Link>
  );
};
