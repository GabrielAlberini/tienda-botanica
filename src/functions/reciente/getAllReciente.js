import firebaseApp from "../../firebase/credenciales";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const db = getFirestore(firebaseApp);

async function getAllRecientes() {
    const productos = [];
    const collectionRef = collection(db, 'recientes')
    const snapshot = await getDocs(collectionRef);
    snapshot.forEach((doc) => {
        productos.push(doc.data());
    })
    return productos;
}

export { getAllRecientes };