// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKqO6bBg_gAaQyx6hSqiXAGx32HHxe4do",
  authDomain: "learn-vue-b09fc.firebaseapp.com",
  projectId: "learn-vue-b09fc",
  storageBucket: "learn-vue-b09fc.appspot.com",
  messagingSenderId: "348913188400",
  appId: "1:348913188400:web:614ec975d7e5dab750b7f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)

export { db, storage }