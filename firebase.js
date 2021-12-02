/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOOH1qwk-kJFhM-MF6steZ-fR-ZBVYLZ8',
  authDomain: 'my-pmdb.firebaseapp.com',
  projectId: 'my-pmdb',
  storageBucket: 'my-pmdb.appspot.com',
  messagingSenderId: '179860853336',
  appId: '1:179860853336:web:6cc98aca9a8591b69ef02d',
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}else {
    app = firebase.app();
}

const auth = firebase.auth();
export {auth};
