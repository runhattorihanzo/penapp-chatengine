import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

try {
  firebase.initializeApp({
    apiKey: 'AIzaSyB1HvyK6aGlAG_GqvE6fYLIyLHjxqNi2P8',
    authDomain: 'penapp-aa47f.firebaseapp.com',
    projectId: 'penapp-aa47f',
    storageBucket: 'penapp-aa47f.appspot.com',
    messagingSenderId: '1051298990391',
    appId: '1:1051298990391:web:e750be957a0f290a17b2b2',
    measurementId: 'G-6HCEW0K1KJ',
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const fb = {
  auth: firebase.auth(),
  storage: firebase.storage(),
  firestore: firebase.firestore(),
};
