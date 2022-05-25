// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBwvZXfKVtrdP19irsje5hzAc3MngO_-VM",
  authDomain: "lab-notes-6f68f.firebaseapp.com",
  projectId: "lab-notes-6f68f",
  storageBucket: "lab-notes-6f68f.appspot.com",
  messagingSenderId: "304698835194",
  appId: "1:304698835194:web:c5ee55cc7b5b6f53724943",
  measurementId: "G-3HZDX9HH1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()
const db = getFirestore(app);

//obtener una lista de notas de la base de datos de firebase
async function getNotes() {
  const notesCol = query(collection(db, 'noteCollection'));
  const noteSnapshot = await getDocs(notesCol);
  const noteList = noteSnapshot.docs.map(doc => {
   return ({...doc.data(), id: doc.id})
  });
  return noteList;
}

export { db, getNotes };  