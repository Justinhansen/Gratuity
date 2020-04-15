import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAuOG4ERlLXsSEy1argycVLw2ywhb7BR9A",
  authDomain: "gratuity-tipping.firebaseapp.com",
  databaseURL: "https://gratuity-tipping.firebaseio.com",
  projectId: "gratuity-tipping",
  storageBucket: "gratuity-tipping.appspot.com",
  messagingSenderId: "1069327562200",
  appId: "1:1069327562200:web:56a1b05fc731fef1676ead",
  measurementId: "G-8XNBTZQYMH"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
