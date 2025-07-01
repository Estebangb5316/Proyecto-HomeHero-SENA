import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDVySMb0nxA3B4MfFnFNj6z-IaLcF7JGa8",
  authDomain: "home-hero-new.firebaseapp.com",
  projectId: "home-hero-new",
  storageBucket: "home-hero-new.appspot.com",
  messagingSenderId: "410974637075",
  appId: "1:410974637075:web:e6cbaa7376221a9684c3e6",
  measurementId: "G-96EQ038M15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    alert('Debes iniciar sesión.');
    window.location.href = "/menu/logintecnicos.html";
    return;
  }

  // Todas las rutas posibles de subcolecciones
  const categories = [
    ["Technical", "1", "Plumbing"],
    ["Technical", "2", "Electricity"],
    ["Technical", "3", "locksmith"],
    ["Technical", "4", "Gardening"],
    ["Technical", "5", "Paint"],
    ["Technical", "6", "Homeappliances"],
    ["Technical", "7", "Pets"],
    ["Technical", "8", "CleanHome"],
    ["Technical", "9", "Vehicles"],
    ["Technical", "10", "Plumbing"], // Solo si usas Plumbing dos veces
  ];

  let userData = null;

  for (const path of categories) {
    const q = query(collection(db, ...path), where("Id", "==", user.uid));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      userData = snapshot.docs[0].data();
      break;
    }
  }

  if (userData) {
    document.getElementById("nameandlastname").textContent = userData.Nombre || "";
    document.getElementById("phone").textContent = userData.Telefono || "";
    document.getElementById("city").textContent = userData.Ciudad || "";
    document.getElementById("age").textContent = userData.Edad || "";
    document.getElementById("service").textContent = userData.Servicio || "";
    const foto = document.getElementById("contenedor-imagen");
    if (!userData.Foto || userData.Foto === '') {
      foto.style.backgroundImage = "url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png')";
    } else {
      foto.style.backgroundImage = `url('${userData.Foto}')`;
    }
    if(document.getElementById("Description")) {
      document.getElementById("Description").textContent = userData.Descripcion || "";
    }
  } else {
    // Si no encuentra el usuario, muestra mensaje de error o limpia los campos
    document.getElementById("nameandlastname").textContent = "Sin datos";
    document.getElementById("phone").textContent = "";
    document.getElementById("city").textContent = "";
    document.getElementById("age").textContent = "";
    document.getElementById("service").textContent = "";
    const foto = document.getElementById("contenedor-imagen");
    foto.style.backgroundImage = "url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png')";
    if(document.getElementById("Description")) {
      document.getElementById("Description").textContent = "";
    }
  }
});


document.getElementById('loading').style.display = 'none';
document.body.classList.remove('hidden');

if (!userData) {
  document.getElementById("btn-cambiar-foto").disabled = true;
}