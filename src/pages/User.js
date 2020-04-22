import React, { useContext, Fragment } from "react";
import { Context } from "../Context";
import { SubmitButton } from "../components/SubmitButton";
import { H1, Div, Container } from "../styles/styles";
import { Logo } from "../components/Logo";

export const User = () => {
  const { removeAuth } = useContext(Context);
  return (
    <Fragment>
      <Logo />
      <Container>
        <H1>User</H1>
        <Div>
          <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
        </Div>
      </Container>
    </Fragment>
  );
};
