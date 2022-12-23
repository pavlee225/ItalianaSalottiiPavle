import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  addDoc,
  CollectionReference,
  DocumentReference,
  getFirestore,
} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { flow, isNil, omitBy, set } from "lodash/fp";

const firebaseConfig = {
  apiKey: "AIzaSyAF2eeqISRcWN9saPxSmknO-85DkJMYcjY",
  authDomain: "italiana-salotti.firebaseapp.com",
  projectId: "italiana-salotti",
  storageBucket: "italiana-salotti.appspot.com",
  messagingSenderId: "165315690479",
  appId: "1:165315690479:web:115a3a086d08da7b7a001a",
  measurementId: "G-BGVYXHR5K4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const database = getDatabase(app);
const storage = getStorage(app);

const auth = getAuth(app);

const addDocument: AddDoc = (reference, data) =>
  addDoc(
    reference,
    flow(
      set("createdAt", new Date()),
      set("updatedAt", new Date()),
      omitBy(isNil)
    )(data)
  );
type AddDoc = <T>(
  reference: CollectionReference<T>,
  data: any
) => Promise<DocumentReference<T>>;
export { firestore, auth, addDocument, database, storage };
