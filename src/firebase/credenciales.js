// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
  apiKey: "AIzaSyDR5Am2O85-NMW-JbpxWArUZxpn5J0QJAE",
  authDomain: "tienda-botanica.firebaseapp.com",
  projectId: "tienda-botanica",
  storageBucket: "tienda-botanica.appspot.com",
  messagingSenderId: "118068307588",
  appId: "1:118068307588:web:f6598ad28c312b6d4744d1",
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;
