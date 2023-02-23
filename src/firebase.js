// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export const db = getFirestore(app);
export const auth = getAuth(app);

const callFirebaseFunction = event => {
    const functions = getFunctions();
    const callableReturnMessage = httpsCallable(functions, 'addAdminRole');

    callableReturnMessage().then((result) => {
      console.log(result.data.output);
    }).catch((error) => {
      console.log(`error: ${JSON.stringify(error)}`);
    });
}