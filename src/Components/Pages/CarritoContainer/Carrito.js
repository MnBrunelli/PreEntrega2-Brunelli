import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../Context/CartContext";

const Carrito = () => {
  const [isId, setIsId] = useState("");
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext();

  const generarOrden = async (e) => {
    e.preventDefault();
    const orden = {};
    orden.buyer = {
      name: dataForm.name,
      phone: dataForm.phone,
      email: dataForm.email,
    };
    orden.productos = cartList.map((prod) => {
      const { id, name: title, price } = prod;
      return { id, title, price };
    });
    orden.total = precioTotal();

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, orden)
      .then((resp) => setIsId(resp.id))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());
  };

  const handleImputChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1> Carrito de compras </h1>
      {isId && <h2> Su orden fue registrada: {isId} </h2>}
      {cartList.length === 0 ? (
        <div>
          <h3> El carrito está vacío </h3>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      ) : (
        <>
          <ul>
            {cartList.map((products) => (
              <li>
                Producto: {products.name} Categoria: {products.categoria} Precio: {products.price} Cantidad: {products.cantidad} <button onClick={() => removeItem(products.id)}> Eliminar </button>
              </li>
            ))}
          </ul>
          <h2>Total: {precioTotal()} </h2>
          <form onSubmit={generarOrden}>
            <input type="text" name="name" value={dataForm.name} placeholder="Nombre" onChange={handleImputChange} />
            <input type="text" name="phone" value={dataForm.phone} placeholder="Teléfono" onChange={handleImputChange} />
            <input type="text" name="email" value={dataForm.email} placeholder="Email" onChange={handleImputChange} />
            <button type="submit"> Generar orden </button>
          </form>
          <Link to="/">
            <button>Seguir comprando</button>
          </Link>
          <button onClick={vaciarCarrito}> Vaciar </button>
        </>
      )}
    </div>
  );
};

export default Carrito;
