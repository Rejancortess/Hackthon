import { doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { usersCollection } from "./collections";

export const getUserData = async (userId: string) => {
  const userDocRef = doc(usersCollection, userId);
  const userDoc = await getDoc(userDocRef);
  return userDoc.data();
};

export const getVolunteers = async () => {
  const q = query(usersCollection, where("role", "==", "volunteer"));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
