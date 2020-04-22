import React, { Fragment } from "react";
import { ToastsContainer, ToastsStore } from "react-toasts";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import { Article, ImgWrapper, Img } from "./styles";
import { useNearScreen } from "../../hooks/useNearScreen";
import { FavButton } from "../FavButton";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();

  return (
    //   Aqui usamos el useRef
    <Article ref={element}>
      {/* Si lo tiene que mostrar entonces que muestre */}
      {!show && (
        <SkeletonTheme color="#dddddd" highlightColor="#b5b3b3">
          <Skeleton width={500} height={282} />
        </SkeletonTheme>
      )}
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          {/* actualizara el estado guardandolo en setLocalStorage */}
          <ToggleLikeMutation>
            {toggleLike => {
              const handleFavClick = () => {
                toggleLike({
                  variables: {
                    input: { id }
                  }
                });
              };

              return (
                <FavButton
                  liked={liked}
                  likes={likes}
                  onClick={handleFavClick}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
      <ToastsContainer store={ToastsStore} />
    </Article>
  );
};

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function(props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return ToastsStore.error(`${propName} value must be defined`);
    }

    if (propValue < 0) {
      return ToastsStore.error(`${propName} value must be greater than 0`);
    }
  }
};
