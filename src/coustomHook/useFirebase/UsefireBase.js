import FirebaseAuthentication from "./../firebase/FireBaseInit";
import { useState } from "react";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
FirebaseAuthentication();
const UsefireBase = () => {
  //   const location = useLocation();
  //   const history = useHistory();
  //   const redirect = location.state?.from || "/";
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const googleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //   console.log("onouth", user);
      setUser(user);
    } else {
      setUser("");
    }
  });
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Successfully LogOut",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return {
    googleSign,
    user,
    error,
    logOut,
  };
};

export default UsefireBase;
