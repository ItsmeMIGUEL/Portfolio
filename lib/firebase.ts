import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBkvBOrAfPifpBGo3QV3_wKP3pmBK6gzpg",
  authDomain:"portfolio-82ad6.firebaseapp.com",
  projectId:"portfolio-82ad6",
  storageBucket: "portfolio-82ad6.firebasestorage.app",
  messagingSenderId: "910171044987",
  appId: "1:910171044987:web:974692ecd6f2b8e7ef36de",
  measurementId: "G-KT0XF48PVS",
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
