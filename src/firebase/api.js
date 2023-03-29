import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "../firebase";

  const collectionName = "users";

export const saveUsers = (newLink) =>
  addDoc(collection(db, collectionName), newLink);

export const updateUser = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetLinks = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getUsers = () => getDocs(collection(db, collectionName));

export const deleteUser = (id) => deleteDoc(doc(db, collectionName, id));

export const getUser = (id) => getDoc(doc(db, collectionName, id));