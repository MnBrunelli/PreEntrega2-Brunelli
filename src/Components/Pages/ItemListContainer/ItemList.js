import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { gFetch } from "../../../helpers/gFetch";

const ItemList = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      gFetch()
        .then((res) => setProductos(res.filter((productos) => productos.categoria === idCategoria)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      gFetch()
        .then((res) => setProductos(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        productos.map((prod) => (
          <div key={prod.id} className="col-sm-3">
            <Link to={`/detalle/${prod.id}`}>
              <div className="card m-1 mb-4 p-1">
                <p>{prod.name}</p>
                <img src={prod.photo} className="card-img-top" alt="..." />

                <div className="card-body">
                  <p className="card-text">Precio: ${prod.price}</p>
                  <button className="btn mt-2 btn-sm d-grid gap-2 btn-outline-danger d-grid gap-2 col-6 mx-auto">Añadir</button>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default ItemList;
