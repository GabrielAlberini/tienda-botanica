import firebaseApp from "../../firebase/credenciales";
import {getFirestore, doc, getDoc } from "firebase/firestore";


const db = getFirestore(firebaseApp);


async function reciente(sku) {
    //Aquí debajo va en orden: La conexón, nombre de la colección y parametro para efectuar el filtro.
    const docRef = doc(db, "recientes", sku);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const recomendacion = docSnap.data();
      recomendacion.sku = sku;
      return recomendacion;
    } else {
      //En caso de que falle la llamada o no exista el doc.
      console.log("No such document!");
    }
  }

export { reciente };