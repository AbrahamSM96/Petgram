import React from "react";
import { Button } from "./styles";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import PropTypes from "prop-types";

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  return (
    <Button liked={liked} onClick={onClick}>
      <Icon size="32px" /> {likes} likes!
    </Button>
  );
};
// Las proptypes son un validador de tipo de datos que estamos recibiendo como props
FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
