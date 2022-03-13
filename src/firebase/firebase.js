import { initializeApp } from 'firebase/app'
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    updatePassword,
    EmailAuthProvider,
    reauthenticateWithCredential,
    GoogleAuthProvider,
    signInWithCredential,
} from 'firebase/auth'
import {
    getFirestore,
    collection,
    getDocs,
    doc,
    setDoc,
} from 'firebase/firestore/lite'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const firebaseConfig = {
    apiKey: "AIzaSyBCi0yDu_CYvnnEZ1nFdiFy_zeg0389920",
    authDomain: "moneylover-4776a.firebaseapp.com",
    // databaseURL: "ttps://demoapp-a77e7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "moneylover-4776a",
    storageBucket: "moneylover-4776a.appspot.com",
    appId: "1:577226254905:android:d6823972b5c02d690b7be8",
    messagingSenderId: "577226254905",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const firebaseDatabase = getFirestore(app)
GoogleSignin.configure({
    webClientId: '577226254905-i4ukch7nqa1nk9kobuiddsdrhtkcjial.apps.googleusercontent.com',
});

export {
    auth,
    firebaseDatabase,
    collection,
    getDocs,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendEmailVerification,
    signInWithEmailAndPassword,
    signOut,
    doc,
    setDoc,
    updatePassword,
    EmailAuthProvider,
    GoogleSignin,
    reauthenticateWithCredential,
    GoogleAuthProvider,
    signInWithCredential
}