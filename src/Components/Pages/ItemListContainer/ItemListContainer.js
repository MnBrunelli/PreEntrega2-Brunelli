import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, getFirestore } from "firebase/firestore";
import Loading from "../../Loading/Loading";
import Input from "./Input";
import ItemList from "./ItemList";

const ItemListContainer = memo(({ saludo, titulo }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");
      const queryFilter = query(queryCollection, where("categoria", "==", idCategoria));
      getDocs(queryFilter)
        .then((resp) => setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const db = getFirestore();
      const queryCollection = collection(db, "productos");
      getDocs(queryCollection)
        .then((resp) => setProductos(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [idCategoria]);

  return (
    <div className="container text-center">
      <p className="pt-3 fs-2">{saludo} </p>
      <p className="fs-5 pb-4"> {titulo} </p>
      <p>
        <Input />
      </p>
      <p>{loading ? <Loading /> : <ItemList productos={productos} />}</p>
    </div>
  );
});

export default ItemListContainer;
