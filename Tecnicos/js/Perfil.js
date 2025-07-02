 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";

import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

import { getFirestore, getDocs, collection, query, where, doc, updateDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-storage.js";



// TU CONFIGURACIÓN REAL DE FIREBASE (home-hero-new)

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

const storage = getStorage(app);



const categories = [

["Technical", "1", "Plumbing"],

["Technical", "2", "Electricity"],

["Technical", "3", "locksmith"],

["Technical", "4", "Gardening"],

["Technical", "5", "Paint"],

["Technical", "6", "Homeappliances"],

["Technical", "7", "Pets"],

["Technical", "8", "CleanHome"],

["Technical", "9", "Vehicles"]

];



function fillProfile(userData) {

document.getElementById("nameandlastname").textContent = userData.Nombre || "";

document.getElementById("phone").textContent = userData.Telefono || "";

document.getElementById("city").textContent = userData.Ciudad || "";

document.getElementById("age").textContent = userData.Edad || "";

document.getElementById("service").textContent = userData.Servicio || "";

document.getElementById("Description").textContent = userData.Descripcion || "";

const foto = document.getElementById("contenedor-imagen");

if (!userData.Foto || userData.Foto === '') {

foto.style.backgroundImage = "url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png')";

} else {

foto.style.backgroundImage = `url('${userData.Foto}')`;

}

}



function clearProfile() {

document.getElementById("nameandlastname").textContent = "Sin datos";

document.getElementById("phone").textContent = "";

document.getElementById("city").textContent = "";

document.getElementById("age").textContent = "";

document.getElementById("service").textContent = "";

document.getElementById("Description").textContent = "";

const foto = document.getElementById("contenedor-imagen");

foto.style.backgroundImage = "url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png')";

}



onAuthStateChanged(auth, async (user) => {

if (!user) {

Swal.fire({

icon: 'error',

iconColor: '#1A96A0',

confirmButtonColor: '#1A96A0',

title: '¡No has iniciado sesión!',

text: 'Inicia sesión para continuar',

allowOutsideClick: false,

allowEscapeKey: false,

allowEnterKey: false,

}).then((result) => {

if (result.isConfirmed) {

location.href = "/menu/logintecnicos.html";

}

});

return;

}



let userData = null;

let docRef = null;

let docPath = null;



for (const pathArr of categories) {

const q = query(collection(db, ...pathArr), where("Id", "==", user.uid));

const snapshot = await getDocs(q);

if (!snapshot.empty) {

const docSnap = snapshot.docs[0];

userData = docSnap.data();

docRef = doc(db, ...pathArr, docSnap.id);

docPath = pathArr;

break;

}

}



if (userData) {

fillProfile(userData);

// Guarda para edición de descripción y foto

window._profileDocRef = docRef;

window._profileDocPath = docPath;

} else {

clearProfile();

}

});



// Editar descripción

document.getElementById("editdescription").addEventListener('click', async (e) => {

e.preventDefault();

const { value: newDescription } = await Swal.fire({

title: 'Editar Descripción',

input: 'text',

inputPlaceholder: 'Nueva descripción',

showCancelButton: true,

cancelButtonColor: '#000',

confirmButtonColor: '#1A96A0',

confirmButtonText: 'Cambiar',

cancelButtonText: 'Cancelar'

});

if (newDescription !== undefined && window._profileDocRef) {

await updateDoc(window._profileDocRef, { Descripcion: newDescription });

document.getElementById("Description").textContent = newDescription;

Swal.fire({ icon: 'success', iconColor: '#1A96A0', confirmButtonColor: '#1A96A0', title: '¡Se cambió correctamente la descripción!' });

}

});



// Cambiar foto de perfil

document.getElementById("btn-cambiar-foto").addEventListener('click', async (e) => {

const { value: file } = await Swal.fire({

title: 'Cambiar foto de perfil',

html: '<input id="swal-input2" class="inputchangephoto" type="file">',

focusConfirm: false,

showCancelButton: true,

cancelButtonColor: '#000',

confirmButtonColor: '#1A96A0',

confirmButtonText: 'Cambiar',

preConfirm: () => document.getElementById('swal-input2').files[0]

});

if (file && window._profileDocRef) {

const user = auth.currentUser;

const storageRef = ref(storage, 'images/' + user.uid);

const uploadTask = uploadBytesResumable(storageRef, file);



uploadTask.on('state_changed', null, null, async () => {

const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

await updateDoc(window._profileDocRef, { Foto: downloadURL });

document.getElementById("contenedor-imagen").style.backgroundImage = `url('${downloadURL}')`;

Swal.fire({ icon: 'success', iconColor: '#1A96A0', confirmButtonColor: '#1A96A0', title: '¡Se cambió correctamente la foto!' });

});

}

});



// Loader (opcional, si tienes un loader visual)

$(document).ready(function () {

$('#loading').fadeOut('slow');

$('body').removeClass('hidden');

});









// Botón abre input file

document.getElementById('btn-cambiar-foto').addEventListener('click', () => {

document.getElementById('input-foto').click();

});



// Cuando se elige una imagen, subirla

document.getElementById('input-foto').addEventListener('change', async (e) => {

const file = e.target.files[0];

if (!file) return;

const user = auth.currentUser;

if (!user || !profileDocRef) return alert('No hay sesión o perfil cargado');



// Sube la foto a Storage

const storageRef = ref(storage, 'images/' + user.uid);

await uploadBytes(storageRef, file);



// Obtén la URL y actualiza el perfil

const url = await getDownloadURL(storageRef);

await updateDoc(profileDocRef, { Foto: url });



// Actualiza la imagen en pantalla

document.getElementById("contenedor-imagen").style.backgroundImage = `url('${url}')`;

alert('¡Foto actualizada!');

});