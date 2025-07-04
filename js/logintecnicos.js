// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

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



button1.addEventListener('click', (e) => {
  e.preventDefault();

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  

    if (email.length !== 0 && password.length !== 0) {
      getAuth().signOut()
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const userEmail = user.email;
          if(getAuth().currentUser.emailVerified){
            Swal.fire({
              icon: 'success',
              title: '¡Bienvenido!',
              iconColor: '#1A96A0',
              confirmButtonColor: '#1A96A0',
              text: '¡Has iniciado sesión correctamente!, ' + userEmail + '.',
            }).then(() => {
              location.href = "/menu/indextecnicos.html";
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error',
              iconColor: '#1A96A0',
              confirmButtonColor: '#1A96A0',
              text: '¡Debes verificar tu correo electronico!',
            });
          }
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Swal.fire({
            icon: 'error',
            title: 'Error',
            iconColor: '#1A96A0',
            confirmButtonColor: '#1A96A0',
            text: '¡Verifica los datos e intenta nuevamente!',
          });
        });
    } 
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        text: '¡Debes completar todos los campos!',
      });
    }
  });

  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");

  togglePassword.addEventListener("click", () => {
      if (passwordInput.type === "password") {
          passwordInput.type = "text";
          togglePassword.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
      } else {
          passwordInput.type = "password";
          togglePassword.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
      }
  });






