import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD8FfO-MfKECwUTUGbw1w9ejwEnEsU1fMI",
    authDomain: "auth-20a31.firebaseapp.com",
    projectId: "auth-20a31",
    storageBucket: "auth-20a31.appspot.com",
    messagingSenderId: "972038245849",
    appId: "1:972038245849:web:91e556bf4a2b3ec780ddc8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(result => {
        const name = result.user.displayName
        const email = result.user.email
        const photo = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("photo", photo)
    }).catch(error => {
        console.log(error)
    })
}