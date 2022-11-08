import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ productos }) => {
  const { addItem } = useCartContext();
  const [isCount, setIsCount] = useState(true);

  const onAdd = (cantidad) => {
    addItem({ ...productos, cantidad });
    setIsCount(false);
  };

  return (
    <div className="row">
      <h1> Detalles de producto</h1>
      <div className="col-6">
        <p>{productos.name}</p>
        <p>Precio: {productos.price}</p>
        <p>Unidades disponibles: {productos.stock}</p>

        <img src={`${productos.photo}`} />
      </div>
      <div className="col-6">
        {isCount ? (
          <ItemCount onAdd={onAdd} stock={10} init={1} />
        ) : (
          <div>
            <Link to="/">
              <button>Seguir comprando</button>
            </Link>
            <Link to="/carrito">
              <button>Ir al carrito</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
