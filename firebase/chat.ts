import { addDoc, arrayUnion, doc, getDoc, setDoc, updateDoc, collection, onSnapshot, query, where, getDocs, and } from "firebase/firestore";
import { chatsCollection, usersCollection } from "./collections";

export const createChat = async (user1Id: string, user2Id: string) => {
  const chatDocRef = doc(chatsCollection);
  await setDoc(chatDocRef, {
    userIds: [user1Id, user2Id],
  });
  return chatDocRef.id;
};

export const getOrCreateChat = async (user1Id: string, user2Id: string) => {
  const q = query(
    chatsCollection,
    and(where("userIds", "array-contains", user1Id), where("userIds", "array-contains", user2Id))
  );
  const querySnapshot = await getDocs(q);
  if (!querySnapshot.empty) {
    return querySnapshot.docs[0].id;
  } else {
    return createChat(user1Id, user2Id);
  }
};

export const sendMessage = async (
  chatId: string,
  senderId: string,
  text: string
) => {
  const chatDocRef = doc(chatsCollection, chatId);
  const messagesCollectionRef = collection(chatDocRef, "messages");
  await addDoc(messagesCollectionRef, {
    senderId,
    text,
    timestamp: new Date(),
  });
  await updateDoc(doc(usersCollection, senderId), {
    lastSeen: new Date(),
  });
};

export const onNewMessage = (
  chatId: string,
  callback: (messages: any[]) => void
) => {
  const chatDocRef = doc(chatsCollection, chatId);
  const messagesCollectionRef = collection(chatDocRef, "messages");
  return onSnapshot(messagesCollectionRef, (snapshot) => {
    const messages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(messages);
  });
};

export const getUserChats = async (userId: string) => {
  const q = query(chatsCollection, where("userIds", "array-contains", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
