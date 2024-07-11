// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDRnFKRM-bLZ8F96tI7BUU8VEDzsZyDUpw",
  authDomain: "wp-prueba-76779.firebaseapp.com",
  projectId: "wp-prueba-76779",
  storageBucket: "wp-prueba-76779.appspot.com",
  messagingSenderId: "480255319445",
  appId: "1:480255319445:web:6320d0d5e5a4e8b8122a9c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);