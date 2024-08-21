import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD12Lcz-tXsR4F-Ot5uBijEItVYejFyT3k",
  authDomain: "ollo-app-2c050.firebaseapp.com",
  projectId: "ollo-app-2c050",
  storageBucket: "ollo-app-2c050.appspot.com",
  messagingSenderId: "45298771791",
  appId: "1:45298771791:web:456f5663c2c9136ee2c73a",
  measurementId: "G-Q6RV2NEL22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();