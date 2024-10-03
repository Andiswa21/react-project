import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYLv_jdFGWtJQEg19CPPh8DrCvpQUZDoA",
  authDomain: "auth-test-46f01.firebaseapp.com",
  databaseUrl:"https://auth-test-46f01-default-rtdb.firebaseio.com",
  projectId: "auth-test-46f01",
  storageBucket: "auth-test-46f01.appspot.com",
  messagingSenderId: "162094847683",
  appId: "1:162094847683:web:195717a20faa10776bf476",
  measurementId: "G-6NNWR8LN9G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth}
export default app;

