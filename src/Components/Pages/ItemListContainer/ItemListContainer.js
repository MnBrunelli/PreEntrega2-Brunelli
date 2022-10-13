import ItemList from "./ItemList";

const ItemListContainer = ({ saludo, titulo }) => {
  return (
    <>
      <div className="container text-center">
        <p className="pt-3 fs-2">{saludo} </p>
        <p className="fs-5 pb-4"> {titulo} </p>
      </div>
      <div className="container">
        <div className="row">
          <ItemList />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
