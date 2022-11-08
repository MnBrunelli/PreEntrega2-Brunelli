import React, { useState } from "react";
import { Link } from "react-router-dom";

const InputCount = () => {
  return (
    <>
      <Link to="/carrito">
        <button className="btn btn-outline-danger" onClick={() => console.log("Ir al carrito")}>
          Ir al carrito
        </button>
      </Link>
      <Link to="/">
        <button className="btn btn-outline-danger" onClick={() => console.log("Ir al home")}>
          Seguir comprando
        </button>
      </Link>
    </>
  );
};

const ButtonCount = ({ handleInter }) => {
  return (
    <button className="btn btn-outline-success" onClick={handleInter}>
      Agregar al carrito
    </button>
  );
};

const Intercambio = () => {
  const [inputType, setInputType] = useState("button");
  const handleInter = () => {
    setInputType("input");
  };

  return (
    <>
      <div>{inputType === "button" ? <ButtonCount handleInter={handleInter} /> : <InputCount />}</div>;
    </>
  );
};

export default Intercambio;
