import React, { Fragment } from "react";
import { List, Item } from "./styles";
import { Category } from "../Category";
import { useCategoriesData } from "../../hooks/useCategoriesData";
import { useShowFixedScroll } from "../../hooks/useShowFixedScroll";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData([]);
  const { showFixed } = useShowFixedScroll([]);

  const renderList = (fixed, loading) => {
    return (
      <List fixed={fixed}>
        {loading
          ? categories.map(category => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))
          : categories.map(category => (
              <Item key={category.id}>
                <Category {...category} path={`/pet/${category.id}`} />
              </Item>
            ))}
      </List>
    );
  };

  return (
    <Fragment>
      {/* Este renderList es el que cargara las imagenes que parecen historias  */}
      {renderList(false, loading)}
      {/* este renderList es el que se ejecuta para que al hacer scroll
       salga la lista en pequeño de las imagenes */}
      {showFixed && renderList(true, loading)}
    </Fragment>
  );
};

export const ListOfCategories = React.memo(ListOfCategoriesComponent);
