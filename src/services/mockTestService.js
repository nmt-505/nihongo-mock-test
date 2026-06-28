import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase";

// Get all active mock tests
export async function getActiveMockTests() {
  const q = query(
    collection(db, "mockTests"),
    where("active", "==", true)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

// Get one mock test by ID
export async function getMockTestById(id) {
  const docRef = doc(db, "mockTests", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return null;
  }

  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
}