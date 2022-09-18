import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgV10yfv2wX7L8QPblcb7irubeBYBdhEA",
  authDomain: "techathon-1a324.firebaseapp.com",
  projectId: "techathon-1a324",
  storageBucket: "techathon-1a324.appspot.com",
  messagingSenderId: "61399063688",
  appId: "1:61399063688:web:7f7751745d66ee5c72d33d",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
