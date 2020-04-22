import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Context from "./Context";
import { App } from "./App";

const client = new ApolloClient({
  uri: "https://petgram-server-abrahamsm.now.sh/graphql",
  request: operation => {
    const token = window.sessionStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    operation.setContext({
      headers: {
        authorization
      }
    });
  },
  onError: error => {
    const { networkError } = error;
    // si tenemos un error de la network y nos dice que el token no es valido
    if (networkError && networkError.result.code === "invalid_token") {
      // ira al sesion storage y quitara el token ya que no es valido
      window.sessionStorage.removeiTEM("token");
      // mandara al usuario a la pantalla de inicio
      window.location.href = "/";
    }
  }
});

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById("app")
);
