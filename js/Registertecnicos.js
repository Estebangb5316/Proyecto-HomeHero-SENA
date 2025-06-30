
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, addDoc, collection, } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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
const db = getFirestore(app);

button2.addEventListener('click', (e) => {
  e.preventDefault()

  var nameandlastname = document.getElementById("nameandlastname").value
  var cedula = document.getElementById("cedula").value; // Obtener cédula
  var numberphone = document.getElementById("numberphone").value
  var email = document.getElementById("email").value
  var city = document.getElementById("city").value
  var password = document.getElementById("password").value
  var confirmpassword = document.getElementById("confirmpassword").value
  var service = document.getElementById("service").value
  var age = document.getElementById("age").value


  

  if (nameandlastname.length !== 0 && cedula.length !== 0 && numberphone.length !== 0 && email.length !== 0 && city.length !== 0 && password.length !== 0 && confirmpassword.length !== 0 && service.length !== 0 && age.length !== 0) {
    if (password == confirmpassword) {
      if (age >= 18) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            Swal.fire({
              icon: 'success',
              title: '¡Felicidades!',
              iconColor: '#1A96A0',
              confirmButtonColor: '#1A96A0',
              text: '¡Verifica tu correo electronico para finalizar el proceso de registro!',
            }).then(() => {
              //location.href = "/menu/logintecnicos.html";
            });

            sendEmailVerification(auth.currentUser)
              .then(() => {
                // Email verification sent!
                // ...

                /*Plomeria*/
                if (service == "Plomeria") {

                  addDoc(collection(db, "Technical", "1", "Plumbing"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Comentarios: "",
                    Id: user.uid

                  })

                }
                /*Electricidad*/
                if (service == "Electricidad") {

                  addDoc(collection(db, "Technical", "2", "Electricity"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid
                  })

                }
                /*Cerrajeria*/
                if (service == "Cerrajeria") {

                  addDoc(collection(db, "Technical", "3", "locksmith"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })

                }

                /*Jardineria*/
                if (service == "Jardineria") {

                  addDoc(collection(db, "Technical", "4", "Gardening"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })

                }
                /*Pintura*/
                if (service == "Pintura") {

                  addDoc(collection(db, "Technical", "5", "Paint"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })

                }

                /*Electrodomesticos*/
                if (service == "Electrodomesticos") {

                  addDoc(collection(db, "Technical", "6", "Homeappliances"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })

                }
                /*Mascotas*/
                if (service == "Mascotas") {

                  addDoc(collection(db, "Technical", "7", "Pets"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })

                }

                /*Limpieza del hogar*/
                if (service == "Limpieza del hogar") {

                  addDoc(collection(db, "Technical", "8", "CleanHome"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })

                }

                /*Vehiculos*/
                if (service == "Vehiculos") {

                  addDoc(collection(db, "Technical", "9", "Vehicles"), {
                    Nombre: nameandlastname,
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Id: user.uid

                  })


                  addDoc(collection(db, "Technical", "10", "Plumbing"), {
                    Nombre: nameandlastname,
                    Cedula: cedula, // Agregar cédula aquí
                    Telefono: numberphone,
                    Correo: email,
                    Ciudad: city,
                    Servicio: service,
                    Edad: age,
                    Foto: "",
                    Descripcion: "",
                    Comentarios: "",
                    Id: user.uid
                });

                }

              })
              .catch((error) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  iconColor: '#1A96A0',
                  confirmButtonColor: '#1A96A0',
                  text: 'El correo ingresado ya se encuentra en uso',
                })
              });
          })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          text: 'Debes ser mayor de edad',
        })
      }

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
      })
    }

  }

  else {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: 'Debes registrar todos los datos',
    })
  }


})

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

const passwordInputt = document.getElementById("confirmpassword");
const togglePasswordd = document.getElementById("toggle-password1");

togglePasswordd.addEventListener("click", () => {
  if (passwordInputt.type === "password") {
    passwordInputt.type = "text";
    togglePasswordd.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>';
  } else {
    passwordInputt.type = "password";
    togglePasswordd.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>';
  }
});










