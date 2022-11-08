import { memo } from "react";
import { Link } from "react-router-dom";

const Item = memo(({ prod }) => {
  return (
    <div className="col-sm-3">
      <div className="card m-1 mb-4 p-1">
        <p>{prod.name}</p>
        <img src={prod.photo} className="card-img-top" alt="..." />

        <div className="card-body">
          <p className="card-text">Precio: ${prod.price}</p>
          <Link to={`/detalle/${prod.id}`}>
            <button className="btn mt-2 btn-sm d-grid gap-2 btn-outline-danger d-grid gap-2 col-6 mx-auto">Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Item;
