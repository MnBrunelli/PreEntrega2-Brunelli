import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (products) => {
    const index = cartList.findIndex((prod) => products.id === prod.id);
    if (index === -1) {
      setCartList([...cartList, products]);
    } else {
      cartList[index].cantidad += products.cantidad;
      setCartList([...cartList]);
    }
  };

  const precioTotal = () => {
    return cartList.reduce((acum, prod) => acum + prod.cantidad * prod.price, 0);
  };

  const cantidadTotal = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };

  const removeItem = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cartList,
          addItem,
          precioTotal,
          cantidadTotal,
          removeItem,
          vaciarCarrito,
        }}
      >
        {children}
      </CartContext.Provider>
      ;
    </>
  );
};

export default CartContextProvider;
