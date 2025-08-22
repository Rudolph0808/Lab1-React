import React from "react";

function Variables() {
  const nombre = "Rodo";
  const edad = 23;

  return (
    <div>
      <h2>Uso de Variables en React</h2>
      <p>Mi nombre es {nombre} y tengo {edad} años.</p>
    </div>
  );
}

export default Variables;
