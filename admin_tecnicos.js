import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, getDocs, collection, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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

// Rutas de subcolecciones
const subcollections = [
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

// Carga todos los técnicos
async function cargarTecnicos() {
  const tbody = document.querySelector("#tabla-tecnicos tbody");
  tbody.innerHTML = "";
  let tecnicos = [];

  for (const path of subcollections) {
    const q = collection(db, ...path);
    const snapshot = await getDocs(q);
    snapshot.forEach(docSnap => {
      tecnicos.push({
        ...docSnap.data(),
        _id: docSnap.id,
        _path: path
      });
    });
  }

  tecnicos.forEach(tecnico => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${tecnico.Nombre || ""}</td>
      <td>${tecnico.Telefono || ""}</td>
      <td>${tecnico.Ciudad || ""}</td>
      <td>${tecnico.Edad || ""}</td>
      <td>${tecnico.Servicio || ""}</td>
      <td>${tecnico.Descripcion || ""}</td>
      <td>${tecnico.Foto ? `<img src="${tecnico.Foto}" width="50" height="50" style="object-fit:cover;">` : ""}</td>
      <td>
        <button class="btn btn-sm btn-warning btn-editar" data-id="${tecnico._id}" data-path='${JSON.stringify(tecnico._path)}'>Editar</button>
        <button class="btn btn-sm btn-danger btn-eliminar" data-id="${tecnico._id}" data-path='${JSON.stringify(tecnico._path)}'>Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Eliminar técnico
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-eliminar')) {
    const id = e.target.dataset.id;
    const path = JSON.parse(e.target.dataset.path);
    if (confirm("¿Seguro que quieres eliminar este técnico?")) {
      await deleteDoc(doc(db, ...path, id));
      cargarTecnicos();
    }
  }
});

// Editar técnico (formulario simple con SweetAlert2)
document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btn-editar')) {
    const id = e.target.dataset.id;
    const path = JSON.parse(e.target.dataset.path);
    const docRef = doc(db, ...path, id);

    // Obtén datos actuales
    const snap = await getDocs(collection(db, ...path));
    let tecnico = null;
    snap.forEach(docSnap => { if (docSnap.id === id) tecnico = docSnap.data(); });

    const { value: formValues } = await Swal.fire({
      title: 'Editar Técnico',
      html:
        `<input id="swal-nombre" class="swal2-input" placeholder="Nombre" value="${tecnico.Nombre || ""}">
        <input id="swal-telefono" class="swal2-input" placeholder="Teléfono" value="${tecnico.Telefono || ""}">
        <input id="swal-ciudad" class="swal2-input" placeholder="Ciudad" value="${tecnico.Ciudad || ""}">
        <input id="swal-edad" class="swal2-input" placeholder="Edad" value="${tecnico.Edad || ""}">
        <input id="swal-servicio" class="swal2-input" placeholder="Servicio" value="${tecnico.Servicio || ""}">
        <input id="swal-descripcion" class="swal2-input" placeholder="Descripción" value="${tecnico.Descripcion || ""}">`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-nombre').value,
          document.getElementById('swal-telefono').value,
          document.getElementById('swal-ciudad').value,
          document.getElementById('swal-edad').value,
          document.getElementById('swal-servicio').value,
          document.getElementById('swal-descripcion').value
        ]
      }
    });

    if (formValues) {
      await updateDoc(docRef, {
        Nombre: formValues[0],
        Telefono: formValues[1],
        Ciudad: formValues[2],
        Edad: formValues[3],
        Servicio: formValues[4],
        Descripcion: formValues[5]
      });
      cargarTecnicos();
    }
  }
});

// Inicializa tabla
cargarTecnicos();