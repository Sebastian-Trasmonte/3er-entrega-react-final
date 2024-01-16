import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  doc,
  getDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvRwY_nudeUbVAp89MPorbix0dWyc-tsQ",
  authDomain: "productos-d5a22.firebaseapp.com",
  projectId: "productos-d5a22",
  storageBucket: "productos-d5a22.appspot.com",
  messagingSenderId: "569309047816",
  appId: "1:569309047816:web:8337aa6dec04827640b5bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function ObtenerTodosLosArticulos() {
  const articulosCollection = collection(db, "articulos");
  const querySnapshot = await getDocs(articulosCollection);
  const articulos = querySnapshot.docs.map((art) => ({
      ...art.data(),
      id: art.id,
  }));
  return articulos;
}

export async function ObtenerArticulosPorCategoria(categoria) {
  const q = query(collection(db, "articulos"), where("categoria", "==", categoria));
  const querySnapshot = await getDocs(q);
  const articulos = querySnapshot.docs.map((art) => ({
      ...art.data(),
      id: art.id,
  }))
  return articulos;
}

export async function ObtenerArticuloPorId(articuloId) {
  const docArt = doc(db, "articulos", articuloId);
  const querySnapshot = await getDoc(docArt);
  const articulo = querySnapshot.data();
  articulo.id = querySnapshot.id;
  return articulo;
}

export async function InsertarArticulo(articulo) {
  const Collection = collection(db, "articulos");
      delete articulo.id;
      addDoc(Collection, articulo).then((res) => console.log("creado"));
}