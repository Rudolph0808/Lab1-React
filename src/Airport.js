import React from "react";
import airports from "./airports";

function Airports() {
  return (
    <div>
      <h2>Lista de Aeropuertos</h2>
      <ul>
        {airports.map((airport, index) => (
          <li key={index}>
            {airport.code} - {airport.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Airports;
