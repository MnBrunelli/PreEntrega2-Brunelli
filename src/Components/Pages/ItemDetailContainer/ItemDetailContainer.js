import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loading from "../../Loading/Loading";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProducto } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "productos", idProducto);
    getDoc(queryDoc)
      .then((res) => setProductos({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return loading ? <Loading /> : <ItemDetail productos={productos} />;
};

export default ItemDetailContainer;
