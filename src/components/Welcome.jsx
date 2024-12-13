import React from "react";

/* Class Component */

// export class Benvenuto extends React.Component {
//     render (){
//        return <h1>Ciao {this.props.nome}!</h1>;
//     }
// }

/* Functional Component */

export function Benvenuto(props) {
  return (
    <>
      <h1>Ciao {props.nome}!</h1>
      <button onClick={props.saluta}>Clicca per essere salutato</button>
    </>
  );
}
