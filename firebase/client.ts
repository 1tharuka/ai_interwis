
import { initializeApp,getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5ppmMsFU4JtScCA1a_Jjck6DdzNZ0DIM",
  authDomain: "prepwise-2868d.firebaseapp.com",
  projectId: "prepwise-2868d",
  storageBucket: "prepwise-2868d.firebasestorage.app",
  messagingSenderId: "476754848954",
  appId: "1:476754848954:web:5bdfd44ef9baaa4f59e683"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);