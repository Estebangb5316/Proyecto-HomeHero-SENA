81// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVySMb0nxA3B4MfFnFNj6z-IaLcF7JGa8",
  authDomain: "home-hero-new.firebaseapp.com",
  projectId: "home-hero-new",
  storageBucket: "home-hero-new.appspot.com",
  messagingSenderId: "410974637075",
  appId: "1:410974637075:web:e6cbaa7376221a9684c3e6",
  measurementId: "G-96EQ038M15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


recovery.addEventListener('click',(e)=>{
    e.preventDefault()

    var email=document.getElementById("email").value

   sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..

    Swal.fire({
        icon: 'success',
        title: 'Felicitaciones',
        text: "¡El correo fue enviado con exito!",
      })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..

    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: "¡El correo que proporcionaste no esta registrado!",
      })
  });
})

