import React from "react";

export function Logged(props) {
  const renderMessaggio = () => {
    if (props.isLoggedIn) {
      return <h1>Benvenuto, {props.nome}!</h1>;
    } else {
      return <h1>Benvenuto, sconosciuto!</h1>;
    }
  };

  return <div>{renderMessaggio()}</div>;
}
