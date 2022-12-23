import Furniture from "../Furniture";
import { addDocument, firestore } from "../firebaseConfig";
import { collection } from "firebase/firestore";

const productsRef = () => collection(firestore, `products`);

export const addProduct = (prod: Furniture) => addDocument(productsRef(), prod);
