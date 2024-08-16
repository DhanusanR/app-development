import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateEmail, updatePassword } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_RcUPlX8hPQutvJ1IIfcI7MVpQP65r30',
  authDomain: 'cr7a-f8d65.firebaseapp.com',
  projectId: 'cr7a-f8d65',
  storageBucket: 'cr7a-f8d65.appspot.com',
  messagingSenderId: '446894525474',
  appId: '1:446894525474:web:5a2aa917ce92ff52bc8e7b',
  measurementId: 'G-0DMQG2XDG7'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

// Function to add a power request to Firestore
const addPowerRequest = async (data) => {
  try {
    await addDoc(collection(db, 'powerRequests'), data);
  } catch (error) {
    console.error('Error adding document:', error);
    throw error; // Ensure errors are propagated to the caller
  }
};

// Function to add a payment to Firestore
const addPayment = async (data) => {
  try {
    await addDoc(collection(db, 'payments'), data);
  } catch (error) {
    console.error('Error adding document:', error);
    throw error; // Ensure errors are propagated to the caller
  }
};

// Export functions
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  provider,
  updateEmail,
  updatePassword,
  addPowerRequest,
  addPayment // Export the addPayment function
};
