import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzPb-zzH6uAPWpacD1a_TOsOnsfLJ8t_U",
  authDomain: "lepitreads.firebaseapp.com",
  projectId: "lepitreads",
  storageBucket: "lepitreads.appspot.com",
  messagingSenderId: "807283930460",
  appId: "1:807283930460:web:f82c9cea8e30343c8cfd99",
  measurementId: "G-LLLNXGKXWS",
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectAuth, timestamp };

//create doc

// const db = firebase.firestore();
// const booksCollection = db.collection("books");

// export const createBookList = (book) => {
//   return booksCollection.add(book);
// };

// export const getBook = async (id) => {
//   const book = await booksCollection.doc(id).get();
//   return book.exists ? book.data() : null;
// };

// export const updateBook = (id, book) => {
//   return booksCollection.doc(id).update(book);
// };

// export const deleteBook = (id) => {
//   return booksCollection.doc(id).delete();
// };

// export const useLoadBook = () => {
//   const books = ref([]);
//   const close = booksCollection.onSnapshot((snapshot) => {
//     books.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   });
//   onUnmounted(close);
//   return books;
// };
