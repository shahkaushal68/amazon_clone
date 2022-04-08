import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG2cHJLwhA-S5ZTNIwTr198XyctEMerFw",
  authDomain: "clone-cc039.firebaseapp.com",
  projectId: "clone-cc039",
  storageBucket: "clone-cc039.appspot.com",
  messagingSenderId: "521994549701",
  appId: "1:521994549701:web:f0401f8fba8bcd27b673ac",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

export { auth };

export default firebaseConfig;
