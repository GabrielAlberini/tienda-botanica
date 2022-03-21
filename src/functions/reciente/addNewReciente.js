// import firebaseApp from "../firebase/credenciales";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

function addReciente(infoReciente) {
  const collectionRef = collection(db, "recientes");
  const docRef = doc(collectionRef, infoReciente.sku);
  setDoc(docRef, infoReciente);
}

export { addReciente };
