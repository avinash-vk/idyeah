import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCUvRBcsEo6L_XuKr7XohX44-aB8vqLyu8",
    authDomain: "idyeah-0.firebaseapp.com",
    projectId: "idyeah-0",
    storageBucket: "idyeah-0.appspot.com",
    messagingSenderId: "891094870965",
    appId: "1:891094870965:web:ba504ceee34e43af5087fc"
});

export const auth = app.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app