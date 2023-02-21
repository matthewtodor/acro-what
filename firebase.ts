// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC9-KSJMCClNSiER7S_GeUb_RdQMzez8Jw",
	authDomain: "acro-what.firebaseapp.com",
	projectId: "acro-what",
	storageBucket: "acro-what.appspot.com",
	messagingSenderId: "841843441980",
	appId: "1:841843441980:web:1c3282dfb6add7960c1e39",
	measurementId: "G-C8K11WWWRJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const db = firebase.firestore(app)
