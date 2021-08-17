import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBKZ1_jEprRcpoiWKUJjkuSn2Py1Ax860Y',
  authDomain: 'amanabadierfan.firebaseapp.com',
  databaseURL: 'https://amanabadierfan.firebaseio.com',
  projectId: 'amanabadierfan',
  storageBucket: 'amanabadierfan.appspot.com',
  messagingSenderId: '28024394254',
  appId: '1:28024394254:web:5a1064df9dead2b691225f',
  measurementId: 'G-36JYZCWZMD',
};

const app = firebase.initializeApp(firebaseConfig);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const githubProvider = new firebase.auth.GithubAuthProvider();
export const auth = app.auth();
export default app;
