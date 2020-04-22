import React, { Fragment, useContext } from "react";
import { Context } from "../Context";
import { Img, Figure } from "../styles/styles";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../container/RegisterMutation";
import { LoginMutation } from "../container/LoginMutation";
import { ToastsContainer, ToastsStore } from "react-toasts";
import { Logo } from "../components/Logo";
import logoPet from "../images/logo-pet.jpg";

export const NotRegisterUser = () => {
  const { activateAuth } = useContext(Context);

  return (
    <Fragment>
      <Logo />
      <Figure>
        <Img src={logoPet} alt="Logo-Pet" />
      </Figure>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };
          const errorMsg =
            error &&
            ToastsStore.error("El usuario ya existe o hay algún problema.");
          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Registrarse"
              onSubmit={onSubmit}
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg =
            error &&
            ToastsStore.error("El usuario ya existe o hay algún problema.");

          return (
            <UserForm
              disabled={loading}
              error={errorMsg}
              title="Iniciar sesión"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
      <ToastsContainer store={ToastsStore} />
    </Fragment>
  );
};
