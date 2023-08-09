// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRvCRVq45A2q3GKLtI-6EuI4L3MQv3nt4",
    authDomain: "gracelibrary-fa144.firebaseapp.com",
    projectId: "gracelibrary-fa144",
    storageBucket: "gracelibrary-fa144.appspot.com",
    messagingSenderId: "41638461437",
    appId: "1:41638461437:web:849f0e7a31809c0162e394"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const querydb = getFirestore(app);