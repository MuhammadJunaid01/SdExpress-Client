import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireaBaseConfig";
const FirebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default FirebaseAuthentication;
