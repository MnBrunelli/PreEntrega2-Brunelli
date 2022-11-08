import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./Components/Pages/CarritoContainer/Carrito";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Context/CartContext";
import NotFound404 from "./Components/NotFound404/NotFound404";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartContextProvider value={[]}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo={"Bienvenido a Azteka"} titulo="Encontrá tu camiseta preferida de este mundial" />} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo={"Bienvenido a Azteka"} titulo="Encontrá tu camiseta preferida de este mundial" />} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
