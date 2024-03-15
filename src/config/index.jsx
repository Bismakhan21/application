// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCl3EWG-rGPzPdVlrhOBd5UUaWz95qZggc",
    authDomain: "hackathone-f2564.firebaseapp.com",
    projectId: "hackathone-f2564",
    storageBucket: "hackathone-f2564.appspot.com",
    messagingSenderId: "373969936705",
    appId: "1:373969936705:web:71fa25aaa793fb4dc301c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database , app };
