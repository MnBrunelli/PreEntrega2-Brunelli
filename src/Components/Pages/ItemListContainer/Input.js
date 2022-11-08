import React from "react";

const Input = () => {
  const handleImput = (e) => {
    console.log(e.key);
    const key = e.key;
    if (key === " ") {
      e.preventDefault();
    }
  };

  return (
    <div>
      <h5>
        Quieres recibir nuestras ofertas? <input onKeyDown={handleImput} type="email" id="correo" placeholder="juan.perez@correo.com" aria-label="Suscribirse" />{" "}
        <button className="btn btn-outline-dark" type="submit">
          Suscribirse
        </button>
      </h5>
    </div>
  );
};

export default Input;
