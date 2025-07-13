import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF7ig0M7W3676m4srRAA3TPLQPdvMnQbk",
  authDomain: "walmart-app-a2aca.firebaseapp.com",
  projectId: "walmart-app-a2aca",
  storageBucket: "walmart-app-a2aca.firebasestorage.app",
  messagingSenderId: "1036733604994",
  appId: "1:1036733604994:web:b5f79106fb990bfca7c09b",
  measurementId: "G-6GW0YJKKD1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig