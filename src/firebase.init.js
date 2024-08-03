import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyBumkPbBBrSCUaY72pgco2KAUnIzVPG6wY",
  authDomain: "hello-tools-4fde3.firebaseapp.com",
  projectId: "hello-tools-4fde3",
  storageBucket: "hello-tools-4fde3.appspot.com",
  messagingSenderId: "822913045504",
  appId: "1:822913045504:web:664ef4c2bddedf670ef4e5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;