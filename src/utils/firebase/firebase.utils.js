import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQB8n3pfmpsvDJlBcd28FF7JTBgjA_DM",
  authDomain: "crwn-clothing-db-9cc4c.firebaseapp.com",
  projectId: "crwn-clothing-db-9cc4c",
  storageBucket: "crwn-clothing-db-9cc4c.appspot.com",
  messagingSenderId: "102481918671",
  appId: "1:102481918671:web:57a4aba7fa84b59d65d5ba",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
};
 