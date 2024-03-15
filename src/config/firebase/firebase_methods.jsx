
// config/firebase/firebaseMethods.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, database } from "../index.jsx";
import { onValue, ref, set } from "firebase/database";

export const create_account = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const loginAccount = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutAccount = () => {
  return signOut(auth); 
};

export const write_user_data = (userId, data) => {
  return set(ref(database, "users/" + userId), {
    ...data,
  });
};

export const readUserData = (userId) => {
  const reference = ref(database, "users/" + userId);
  return new Promise((resolve, reject) => {
    onValue(reference, (snapshot) => {
      const data = snapshot.val();
      resolve(data);
    }, (error) => {
      reject(error);
    });
  });
};
