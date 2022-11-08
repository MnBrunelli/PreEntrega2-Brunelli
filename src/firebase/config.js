import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTjKRc52EevLaze7WPZdQZ-n_jz_bN78E",
  authDomain: "react-coder1.firebaseapp.com",
  projectId: "react-coder1",
  storageBucket: "react-coder1.appspot.com",
  messagingSenderId: "366241246996",
  appId: "1:366241246996:web:1e48bf7ab3e91a0da19c01",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreInit = () => {
  return app;
};
