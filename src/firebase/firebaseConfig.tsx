import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAkIirUF0k6SCkghuwMqOw7y1bD7Ss5PUc",
  authDomain: "authentication-616f3.firebaseapp.com",
  projectId: "authentication-616f3",
  storageBucket: "authentication-616f3.appspot.com",
  messagingSenderId: "49468384627",
  appId: "1:49468384627:web:dfa68c05ecf1995e1fd106",
  measurementId: "G-MW9FY5NBSX"
};

const app =initializeApp(firebaseConfig)
export  const auth = getAuth(app)