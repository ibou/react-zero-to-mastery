import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyACgmjNFdhi7o5zW1dNsOjUJn2AuZWGUvI",
  authDomain: "crwn-clothing-db-ad16d.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-ad16d.firebaseio.com",
  projectId: "crwn-clothing-db-ad16d",
  storageBucket: "crwn-clothing-db-ad16d.appspot.com",
  messagingSenderId: "723062939413",
  appId: "1:723062939413:web:ff44bae41099b4d4c5931c",
  measurementId: "G-ESV9TNJCL9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider); 

export default firebase;