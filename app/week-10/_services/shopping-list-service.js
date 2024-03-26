import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

// Function to retrieve all items for a specific user from Firestore
export const getItems = async (userId) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const querySnapshot = await getDocs(itemsRef);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
};

// Function to add a new item to a specific user's list of items in Firestore
export const addItem = async (userId, item) => {
  const itemsRef = collection(db, `users/${userId}/items`);
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
};
