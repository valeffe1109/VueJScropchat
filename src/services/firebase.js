import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'


var config = {
	apiKey: "AIzaSyCE33S-qHyNgtnLqzUUzl7AhEEkAES1a6A",
    authDomain: "cropchat-25a22.firebaseapp.com",
    databaseURL: "https://cropchat-25a22.firebaseio.com",
    projectId: "cropchat-25a22",
    storageBucket: "cropchat-25a22.appspot.com",
    messagingSenderId: "215413294610",
  };

const fb = firebase.initializeApp(config)
const db = firebase.firestore();

export {fb,db}


