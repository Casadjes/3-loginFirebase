import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDl1LEyo682n-X5cAbvF-cqwFRn-zWPzE0",
	authDomain: "fir-login-68f0e.firebaseapp.com",
	projectId: "fir-login-68f0e",
	storageBucket: "fir-login-68f0e.appspot.com",
	messagingSenderId: "1012079313800",
	appId: "1:1012079313800:web:75ebd383d08e4eae85b03d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
