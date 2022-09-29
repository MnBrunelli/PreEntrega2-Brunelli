import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import ItemListContainer from "./Components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a Azteka"} titulo="Encontrá tu camiseta preferida de este mundial" />
    </div>
  );
}

export default App;
