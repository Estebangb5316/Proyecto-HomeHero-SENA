import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDtfL9s0NOXMfsTOLjhgunQwmei8Y1SG2U",
    authDomain: "homehero-d79da.firebaseapp.com",
    projectId: "homehero-d79da",
    storageBucket: "homehero-d79da.appspot.com",
    messagingSenderId: "324839475759",
    appId: "1:324839475759:web:9660c338ee53fe2e1814da",
    measurementId: "G-BGW4V4Q157"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Elementos del DOM
const messageContainer = document.getElementById('message-container');
const usersBody = document.getElementById('usersBody');

// Cargar usuarios al inicio
async function loadUsers() {
    const usersCollection = collection(db, "Technical");
    const profilesCollection = collection(db, "Perfiles"); // Colección de perfiles
    messageContainer.innerHTML = '';

    try {
        const userDocs = await getDocs(usersCollection);
        const profileDocs = await getDocs(profilesCollection); // Obtener perfiles

        usersBody.innerHTML = ''; // Limpiar la tabla antes de cargar

        // Mostrar datos de usuarios técnicos
        userDocs.forEach(doc => {
            const userData = doc.data();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${userData.Cedula}</td>
                <td>${userData.Nombre}</td>
                <td>${userData.Correo}</td>
                <td>${userData.Telefono}</td>
                <td>${userData.Ciudad}</td>
                <td>${userData.Edad}</td>
                <td>${userData.Servicio}</td>
                <td>
                    <button onclick="deleteUser('${doc.id}', '${userData.Correo}')">Eliminar</button>
                </td>
            `;
            usersBody.appendChild(row);
        });

        // Mostrar datos de perfiles
        profileDocs.forEach(doc => {
            const profileData = doc.data();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td></td> 
                <td>${profileData.nameandlastname}</td>
                <td>${profileData.Correo}</td>
                <td>${profileData.phone}</td>
                <td>${profileData.city}</td>
                <td>${profileData.age}</td>
                <td>${profileData.service}</td>
                <td>
                    <button onclick="deleteUser('${doc.id}', '${profileData.Correo}')">Eliminar Perfil</button>
                </td>
            `;
            usersBody.appendChild(row);
        });

    } catch (error) {
        console.error("Error al cargar datos: ", error);
        messageContainer.innerHTML = '<p style="color: red;">No se pudieron cargar los datos.</p>';
    }
}

// Función para eliminar usuario y perfil
window.deleteUser = async function(userId, userEmail){
    const confirmDelete = confirm("¿Estás seguro de que deseas eliminar este usuario/perfil?");
    if (confirmDelete) {
        try {
            // Eliminar de la colección "Technical"
            const userRef = doc(db, "Technical", userId);
            if (userRef){
                await deleteDoc(userRef);
            }

            // Eliminar de la colección "Perfiles"
            const profilesCollection = collection(db, "Perfiles");
            const profilesQuery = query(profilesCollection, where("Correo", "==", userEmail));
            const profilesSnapshot = await getDocs(profilesQuery);
            profilesSnapshot.forEach(async (profileDoc) => {
                await deleteDoc(profileDoc.ref);
            });

            // Eliminar de la colección "Secciones" (si existe)
            const sectionsCollection = collection(db, "Secciones");
            const sectionsQuery = query(sectionsCollection, where("Correo", "==", userEmail));
            const sectionsSnapshot = await getDocs(sectionsQuery);
            sectionsSnapshot.forEach(async (sectionDoc) => {
                await deleteDoc(sectionDoc.ref);
            });

            messageContainer.innerHTML = '<p style="color: green;">Usuario/Perfil eliminado exitosamente.</p>';
            loadUsers();
        } catch (error) {
            console.error("Error al eliminar usuario/perfil: ", error);
            messageContainer.innerHTML = '<p style="color: red;">No se pudo eliminar el usuario/perfil.</p>';
        }
    }
}




// Cargar usuarios al cargar la página
loadUsers();