import React, { useContext, Suspense } from "react";
// import { Category } from './components/Category'
import { GlobalStyle } from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { Router, Redirect } from "@reach/router";
import { Detail } from "./pages/Detail";
import { User } from "./pages/User";
// import { Favs } from "./pages/Favs";
import { NotRegisterUser } from "./pages/NotRegisterUser";
import { NavBar } from "./components/NavBar";
import { Context } from "./Context";
import { NotFound } from "./pages/NotFound";

// React.lazy importara de forma dinamica los componentes, para lo cargue solo cuando
// lo necesitemos, y no cuando estemos en home
const Favs = React.lazy(() => import("./pages/Favs"));

export const App = () => {
  const { isAuth } = useContext(Context);
  return (
    // suspense nos va a permitir renderizar  algo mientras un componente esta en modo de suspension
    // suspense necesita una prop que es fallback y fallback es lo que renderizara mientras carga el componente
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisterUser path="/login" />}
        {!isAuth && <Redirect from="/favs" to="/login" />}
        {!isAuth && <Redirect from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </Suspense>
  );
};
