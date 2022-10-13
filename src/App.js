import NavBar from "./Components/Header/NavBar";
import ItemListContainer from "./Components/Pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/Pages/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./Components/Pages/CarritoContainer/Carrito";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound404 from "./Components/NotFound404/NotFound404";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo={"Bienvenido a Azteka"} titulo="Encontrá tu camiseta preferida de este mundial" />} />
        <Route path="/categoria/:idCategoria" element={<ItemListContainer saludo={"Bienvenido a Azteka"} titulo="Encontrá tu camiseta preferida de este mundial" />} />
        <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
