// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4BnL3K87CHsgvFmshYiPPCUrt2R_QDuo",
  authDomain: "kimchilingua-8c163.firebaseapp.com",
  projectId: "kimchilingua-8c163",
  storageBucket: "kimchilingua-8c163.appspot.com",
  messagingSenderId: "1062785983593",
  appId: "1:1062785983593:web:a97198d01d27685b1caef8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const db = firebase.firestore();

// 필요한 곳에서 사용할 수 있도록 내보내기
export { db };