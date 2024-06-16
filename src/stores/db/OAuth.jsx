import * as OAuth from "firebase/auth";
import {auth} from "./firebaseConfig";

const Login = async (email, password) => {
  const xhr = await OAuth.signInWithEmailAndPassword(auth, email, password);
  return xhr.user;
};

const Register = async (email, password) => {
  const xhr = await OAuth.createUserWithEmailAndPassword(auth, email, password);
  return xhr.user;
};

const AuthGmail = async () => {
  return _SignInWithProvider(new OAuth.GoogleAuthProvider());
}

const _SignInWithProvider = async (provider) => {
  const xhr = await OAuth.signInWithPopup(auth, provider);
  console.log("OAuth > _SignInWithProvider > signInWithPopup", xhr);
  return xhr.user;
}

const Logout = async () => {
  return await OAuth.signOut(auth);
}

export {
  Login,
  AuthGmail,
  Logout,
  Register,
};
