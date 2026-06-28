import { signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, db, googleProvider } from "../firebase/firebase";

export const signInWithGoogle = async () => {
  // Open the Google login popup
  const result = await signInWithPopup(auth, googleProvider);

  const user = result.user;

  // Check if the user already exists in Firestore
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  // Create a new user document only on the first login
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      role: "user",
      premium: false,
      planDays: 0,
      accessExpiry: null,
      createdAt: serverTimestamp(),
    });
  }

  return user;
};