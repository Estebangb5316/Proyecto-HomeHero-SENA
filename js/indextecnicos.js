$(document).ready(function () {
  $('#loading').fadeOut('slow');
  $('body').removeClass('hidden');
});


// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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

btn.addEventListener("click", () => {
  // Redirigir a la página de inicio de sesión
  location.href = "/menu/login.html";
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (getAuth().currentUser.emailVerified) {
      btn.textContent = "Configuración";
      btn.addEventListener("click", () => {
        location.href = "/menu/configuraciontecnicos.html";
      });
    }
  } else {
    btn.textContent = "Iniciar Sesión";
    btn.addEventListener("click", () => {
      location.href = "/menu/logintecnicos.html";
    });

  }
});

var buttonprofile = document.getElementById("btn1")

buttonprofile.addEventListener("click", () => {
  location.href = "/Tecnicos/Perfil.html"
})
























