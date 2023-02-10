import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY ,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN ,
  databaseURL: REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)
