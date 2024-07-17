
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPnD2o7HlIntjrOP1RLPDeot5MZoK9Zi8",
  authDomain: "la-pelota-907d6.firebaseapp.com",
  projectId: "la-pelota-907d6",
  storageBucket: "la-pelota-907d6.appspot.com",
  messagingSenderId: "348841658722",
  appId: "1:348841658722:web:c031205b0ae61363f9043b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);