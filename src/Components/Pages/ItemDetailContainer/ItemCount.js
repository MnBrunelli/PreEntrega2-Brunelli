import { useState } from "react";

const ItemCount = ({ stock, init, onAdd }) => {
  const [count, setCount] = useState(init);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleRemove = () => {
    if (count > init) {
      setCount(count - 1);
    }
  };

  const handleOnAdd = () => {
    onAdd(count);
  };

  return (
    <div>
      <button onClick={handleAdd}>+</button>
      <p>{count}</p>
      <button onClick={handleRemove}>-</button>
      <p>
        <button onClick={handleOnAdd}>Agregar al carrito</button>
      </p>
    </div>
  );
};

export default ItemCount;
