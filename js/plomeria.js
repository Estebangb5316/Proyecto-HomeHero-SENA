import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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

$(document).ready(function () {
  $('#loading').fadeOut('slow');
  $('body').removeClass('hidden');
});

getDocs(collection(db, "Technical", "1", "Plumbing")).then(querySnapshot => {
  querySnapshot.forEach((doc) => {
    var container = document.getElementById("container");
    var card = document.createElement('div');
    var card_Header = document.createElement('div');
    var card_content = document.createElement('div');
    var profile_image = document.createElement('div');
    var nameandlastname = document.createElement('h3');
    var city = document.createElement('h4');
    var profession = document.createElement('h4');
    var space = document.createElement('br');
    var description = document.createElement('p');
    var link1 = document.createElement('a');
    var link2 = document.createElement('a');
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');

    // Asignar clases
    card.className = 'card';
    card_Header.className = 'card-header';
    card_Header.style = "background-image: url('https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80');";
    card_content.className = 'card-content';
    profile_image.className = 'profile-image';
    profile_image.style = "background-image: url('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png');";
    button1.className = 'button1';
    button2.className = 'button1';
    button2.id = 'button2';

    // Añadir los elementos
    container.appendChild(card);
    card.appendChild(card_Header);
    card.appendChild(card_content);
    card_content.appendChild(profile_image);
    card_content.appendChild(nameandlastname);
    card_content.appendChild(city);
    card_content.appendChild(profession);
    card_content.appendChild(space);
    card_content.appendChild(description);
    card_content.appendChild(link1);
    card_content.appendChild(link2);
    link1.appendChild(button1);
    link2.appendChild(button2);

    // Darle información
    nameandlastname.textContent = doc.data().Nombre;
    city.textContent = doc.data().Ciudad + ", Cundinamarca";
    profession.textContent = doc.data().Servicio;
    description.textContent = doc.data().Descripcion;
    if (doc.data().Foto == '') {
      profile_image.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');";
    } else {
      profile_image.style = "background-image: url('" + doc.data().Foto + "');";
    }

    button1.textContent = "Seleccionar Tecnico";
    button2.textContent = "Ver Perfil";

    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popup-close");
    const popupWhatsapp = document.getElementById("popup-whatsapp");
    const name = document.getElementById("popup-name");
    const citytechnical = document.getElementById("popup-city");
    const servicetechnical = document.getElementById("popup-service");
    const phonetechnical = document.getElementById("popup-phone");
    const emailtechnical = document.getElementById("popup-email");
    const picturetechnical = document.getElementById("popup-profile-image");

    button2.addEventListener('click', function () {
      popup.style.display = "block";
      name.textContent = doc.data().Nombre;
      citytechnical.textContent = doc.data().Ciudad;
      servicetechnical.textContent = doc.data().Servicio;
      phonetechnical.textContent = doc.data().Telefono;
      emailtechnical.textContent = doc.data().Correo;
      if (doc.data().Foto == '') {
        picturetechnical.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');";
      } else {
        picturetechnical.style = "background-image: url('" + doc.data().Foto + "');";
      }
    });

    popupClose.addEventListener("click", function () {
      popup.style.display = "none";
    });

    popupWhatsapp.addEventListener("click", function () {
      var phoneNumber = doc.data().Telefono;
      var formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '');
      var message = encodeURIComponent("Hola, vengo de HomeHero y estoy interesado en tus servicios.");
      var whatsappLink = "https://wa.me/" + formattedPhoneNumber + "?text=" + message;
      window.open(whatsappLink, '_blank');
    });

    button1.id = 'button1';
    button1.addEventListener("click", function () {
      var phoneNumber = doc.data().Telefono;
      var formattedPhoneNumber = +57 + phoneNumber.replace(/[^\d]/g, '');
      var message = encodeURIComponent("Hola, vengo de HomeHero y estoy interesado en tus servicios.");
      var whatsappLink = "https://wa.me/" + formattedPhoneNumber + "?text=" + message;
      window.open(whatsappLink, '_blank');
    });

    // --- AQUI VA EL BOTÓN DE AGENDAR CITA ---
    var buttonSchedule = document.createElement('button');
    buttonSchedule.className = 'button1';
    buttonSchedule.textContent = "Agendar Cita";
    card_content.appendChild(buttonSchedule);

    buttonSchedule.addEventListener('click', async function () {
      const { value: formValues } = await Swal.fire({
        title: 'Agendar Cita',
        html:
          `<input id="swal-date" type="date" class="swal2-input" placeholder="Fecha">
           <input id="swal-time" type="time" class="swal2-input" placeholder="Hora">
           <input id="swal-desc" class="swal2-input" placeholder="Descripción del lugar">`,
        focusConfirm: false,
        confirmButtonText: 'Agendar',
        preConfirm: () => {
          return [
            document.getElementById('swal-date').value,
            document.getElementById('swal-time').value,
            document.getElementById('swal-desc').value
          ];
        }
      });

      if (formValues) {
        const [date, time, desc] = formValues;
        if (!date || !time || !desc) {
          Swal.fire("Todos los campos son obligatorios.", "", "warning");
          return;
        }
        // Guardar la cita en Firestore (en la colección de citas del técnico)
        await addDoc(collection(db, "Technical", "1", "Plumbing", doc.id, "Citas"), {
          fecha: date,
          hora: time,
          descripcion: desc,
          tecnicoId: doc.id,
          tecnicoNombre: doc.data().Nombre,
          timestamp: serverTimestamp()
        });
        Swal.fire("¡Cita agendada!", "La cita ha sido guardada exitosamente.", "success");
      }
    });
    // --- FIN DEL BOTÓN DE AGENDAR CITA ---

  });
});

// ...comentarios y otros scripts...