// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtfL9s0NOXMfsTOLjhgunQwmei8Y1SG2U",
  authDomain: "homehero-d79da.firebaseapp.com",
  projectId: "homehero-d79da",
  storageBucket: "homehero-d79da.appspot.com",
  messagingSenderId: "324839475759",
  appId: "1:324839475759:web:9660c338ee53fe2e1814da",
  measurementId: "G-BGW4V4Q157"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    
  } else {
    Swal.fire({
      icon: 'error',
      title: '¡No has iniciado sesión!',
      text: 'inicia sesión para continuar',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,

    })
      .then((result) => {
        if (result.isConfirmed) {
          location.href = "/menu/login.html"
        }
      })
  }
});


