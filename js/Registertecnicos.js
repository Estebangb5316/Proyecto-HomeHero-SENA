// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Your web app's Firebase configuration
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
const db = getFirestore(app);

button2.addEventListener('click', async (e) => {
  e.preventDefault();

  // Obtener valores de los campos
  var nameandlastname = document.getElementById("nameandlastname").value.trim();
  var cedula = document.getElementById("cedula").value.trim();
  var numberphone = document.getElementById("numberphone").value.trim();
  var email = document.getElementById("email").value.trim();
  var city = document.getElementById("city").value.trim();
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  var service = document.getElementById("service").value.trim();
  var age = document.getElementById("age").value.trim();

  // Validaciones 
  if (!nameandlastname || !cedula || !numberphone || !email || !city || !password || !confirmpassword || !service || !age) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: 'Debes registrar todos los datos',
    });
    return;
  }

  // Validación de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'Email inválido',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: 'Por favor ingresa un email válido.',
    });
    return;
  }

  // Validación de teléfono 
  if(numberphone.length < 7 || isNaN(numberphone)) {
    Swal.fire({
      icon: 'error',
      title: 'Teléfono inválido',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: 'Por favor ingresa un número de teléfono válido.',
    });
    return;
  }

  // Validación de edad
  if (isNaN(age) || Number(age) < 18) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: 'Debes ser mayor de edad',
    });
    return;
  }

  // Validación de contraseñas
  if(password !== confirmpassword) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Las contraseñas no coinciden',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
    });
    return;
  }

  // Contraseña mínima 
  if(password.length < 6) {
    Swal.fire({
      icon: 'error',
      title: 'Contraseña muy corta',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: 'La contraseña debe tener al menos 6 caracteres.',
    });
    return;
  }

  // Si todo pasa, crear usuario
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await sendEmailVerification(auth.currentUser);

    // Asigna la colección según el servicio seleccionado
    const servicioMap = {
      "Plomeria": ["Technical", "1", "Plumbing"],
      "Electricidad": ["Technical", "2", "Electricity"],
      "Cerrajeria": ["Technical", "3", "locksmith"],
      "Jardineria": ["Technical", "4", "Gardening"],
      "Pintura": ["Technical", "5", "Paint"],
      "Electrodomesticos": ["Technical", "6", "Homeappliances"],
      "Mascotas": ["Technical", "7", "Pets"],
      "Limpieza del hogar": ["Technical", "8", "CleanHome"],
      "Vehiculos": ["Technical", "9", "Vehicles"]
    };

    let path = servicioMap[service];

    if (!path) {
      Swal.fire({
        icon: 'error',
        title: 'Servicio inválido',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        text: 'Selecciona un servicio válido.',
      });
      return;
    }

    // Armado del objeto técnico (puedes ajustar según tu BD)
    let tecnicoObj = {
      Nombre: nameandlastname,
      Cedula: cedula,
      Telefono: numberphone,
      Correo: email,
      Ciudad: city,
      Servicio: service,
      Edad: age,
      Foto: "",
      Descripcion: "",
      Id: user.uid
    };
    if (service === "Plomeria" || service === "Vehiculos") {
      tecnicoObj.Comentarios = "";
    }
    

    await addDoc(collection(db, ...path), tecnicoObj);

    // Mejora de redirección tras registro
    Swal.fire({
      icon: 'success',
      title: '¡Felicidades!',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: '¡Verifica tu correo electrónico para finalizar el proceso de registro!',
      timer: 3500,
      timerProgressBar: true,
    }).then(() => {
      window.location.href = "/menu/logintecnicos.html"; // Redirección automática
    });

  } catch (error) {
    // Firebase error codes para registro
    let mensaje = "Ocurrió un error inesperado";
    if (error.code === "auth/email-already-in-use") {
      mensaje = "El correo ingresado ya se encuentra en uso";
    } else if (error.code === "auth/invalid-email") {
      mensaje = "El correo es inválido";
    } else if (error.code === "auth/weak-password") {
      mensaje = "La contraseña es muy débil";
    }
    Swal.fire({
      icon: 'error',
      title: 'Error',
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      text: mensaje,
    });
  }
});

// Mostrar/ocultar contraseña
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