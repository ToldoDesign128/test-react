import React from "react";

export function Lista(props) {
  const nomi = ["Alice", "Bob", "Giova"];

  return (
    <ul>
      {nomi.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ul>
  );
}
