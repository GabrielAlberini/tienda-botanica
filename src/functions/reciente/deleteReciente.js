import firebaseApp from "../../firebase/credenciales";
import { getFirestore, deleteDoc, doc, collection } from "firebase/firestore";

const db = getFirestore(firebaseApp);

async function deleteReciente(reciente) {
  const result = window.confirm("Seguro que desea eliminar el producto?");
  if (result) {
    const coleccionRef = collection(db, "recientes");
    const docuRef = doc(coleccionRef, reciente.sku);
    console.log(reciente.sku);
    const eliminado = await deleteDoc(docuRef);
    return eliminado;
  }
}

export { deleteReciente };
