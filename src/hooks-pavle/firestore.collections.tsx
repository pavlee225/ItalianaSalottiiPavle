import { collection } from "firebase/firestore";
import { db } from "./init-firebase";

export const productsCollectionRef = collection(db, "products-pavle");

export const categoriesCollectionRef = collection(db, "categories-pavle");