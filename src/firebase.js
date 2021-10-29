import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBjQvnVEcqNuQAEaRaSGEgaLvOheNxdK-0',
  authDomain: 'netflix-clone-b2ac6.firebaseapp.com',
  projectId: 'netflix-clone-b2ac6',
  storageBucket: 'netflix-clone-b2ac6.appspot.com',
  messagingSenderId: '857588832975',
  appId: '1:857588832975:web:c76aa4e8b4606e890435ba',
  measurementId: 'G-DN84REK8XW',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
