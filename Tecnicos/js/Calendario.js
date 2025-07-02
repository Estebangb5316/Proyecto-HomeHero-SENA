import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Configuración de Firebase
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
const auth = getAuth(app);

// Puedes cambiar estos valores si tienes varias categorías/servicios
let tecnicoCategoria = "1";
let tecnicoServicio = "Plumbing";
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let eventsArr = [];

// Login DEMO automático (solo para pruebas, elimina en producción)
signInWithEmailAndPassword(auth, "tecnico@demo.com", "contraseña123").catch(()=>{});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    // 1. Obtener nombre del técnico autenticado
    const tecnicoDoc = doc(db, "Technical", tecnicoCategoria, tecnicoServicio, user.uid);
    const tecnicoSnap = await getDoc(tecnicoDoc);
    const tecnicoNombre = tecnicoSnap.exists() ? tecnicoSnap.data().Nombre : "Técnico sin nombre";
    document.getElementById("tecnicoNombre").textContent = `Bienvenido, ${tecnicoNombre}`;

    // 2. Obtener citas del técnico autenticado
    const citasRef = collection(db, "Technical", tecnicoCategoria, tecnicoServicio, user.uid, "Citas");
    const snapshot = await getDocs(citasRef);
    eventsArr = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      if (!data.fecha) return;
      const [year, month, day] = data.fecha.split('-').map(Number);
      let eventDay = eventsArr.find(ev => ev.day === day && ev.month === month && ev.year === year);
      if (!eventDay) {
        eventDay = { day, month, year, events: [] };
        eventsArr.push(eventDay);
      }
      eventDay.events.push({ title: data.descripcion || "Cita", time: data.hora || "" });
    });
    renderCalendar();
  } else {
    document.getElementById("tecnicoNombre").textContent = "Inicia sesión como técnico para ver tus citas";
    document.getElementById("days").innerHTML = '';
    document.getElementById("eventUl").innerHTML = '';
  }
});

function renderCalendar() {
  const daysDiv = document.getElementById("days");
  const monthLabel = document.getElementById("monthLabel");
  daysDiv.innerHTML = "";
  const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
  monthLabel.textContent = `${months[currentMonth]} ${currentYear}`;
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Días vacíos antes del 1
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    daysDiv.appendChild(emptyDiv);
  }

  // Días del mes
  for (let i = 1; i <= lastDate; i++) {
    const dayDiv = document.createElement("div");
    dayDiv.className = "day";
    if (currentYear === new Date().getFullYear() && currentMonth === new Date().getMonth() && i === new Date().getDate()) {
      dayDiv.classList.add("today");
    }
    // ¿Tiene evento?
    const hasEvent = eventsArr.some(ev => ev.day === i && ev.month === currentMonth + 1 && ev.year === currentYear);
    if (hasEvent) dayDiv.classList.add("event");
    dayDiv.textContent = i;
    dayDiv.onclick = () => showEvents(i);
    daysDiv.appendChild(dayDiv);
  }
}

function showEvents(day) {
  const eventUl = document.getElementById("eventUl");
  eventUl.innerHTML = "";
  const found = eventsArr.find(ev => ev.day === day && ev.month === currentMonth + 1 && ev.year === currentYear);
  if (found) {
    found.events.forEach(ev => {
      const li = document.createElement("li");
      li.textContent = ev.time ? `${ev.title} - ${ev.time}` : ev.title;
      eventUl.appendChild(li);
    });
  } else {
    eventUl.innerHTML = "<li>No hay eventos</li>";
  }
}

// Navegación de meses
document.getElementById("prevBtn").onclick = () => {
  currentMonth--;
  if (currentMonth < 0) { currentMonth = 11; currentYear--; }
  renderCalendar();
};
document.getElementById("nextBtn").onclick = () => {
  currentMonth++;
  if (currentMonth > 11) { currentMonth = 0; currentYear++; }
  renderCalendar();
};