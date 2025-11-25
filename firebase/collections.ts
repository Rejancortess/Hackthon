import { collection } from "firebase/firestore";
import { db } from "../firebase";

export const chatsCollection = collection(db, "chats");
export const usersCollection = collection(db, "users");
