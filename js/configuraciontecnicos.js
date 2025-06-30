
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signOut, updatePassword, onAuthStateChanged, deleteUser } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, getDocs, collection, doc, getDoc, updateDoc, query, where, setDoc } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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

const nameUserElement = document.getElementById("nameuser");



onAuthStateChanged(auth, (user) => {
  if (user) {
    // Actualiza el contenido del elemento HTML con el correo del usuario
    var nameandlastname = document.getElementById("nameandlastname")
    var numberphone = document.getElementById("numberphone")
    var city = document.getElementById("city")
    var age = document.getElementById("age")

    getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })

    getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })
    getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid)))
      .then(querySnapshot => {
        querySnapshot.forEach((doc) => {
          nameandlastname.value = doc.data().Nombre;
          numberphone.value = doc.data().Telefono;
          city.value = doc.data().Ciudad;
          age.value = doc.data().Edad;
        })
      })

    nameUserElement.textContent = user.email;
  } else {
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
  }
});
onAuthStateChanged(auth, (user) => {
  if (user) {
    getDocs(collection(db, "Technical", user.uid, "Private_Data"), where("Id", "==", user.uid))
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          const data = doc.data();

          var nameandlastname = document.getElementById("nameandlastname")
          var numberphone = document.getElementById("numberphone")
          var city = document.getElementById("city")
          var age = document.getElementById("age")
          var service = document.getElementById("service")

          nameandlastname.value = data.Nombre;
          numberphone.value = data.Telefono;
          city.value = data.Ciudad;
          age.value = data.Edad;
          service.value = data.Servicio;
        }
      })

    if (getAuth().currentUser.emailVerified) {

    }
    nameUserElement.textContent = user.email;
  } else {
    Swal.fire({
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      icon: 'error',
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
  }
});

logoutBtn.addEventListener('click', (e) => {
  Swal.fire({
    title: '¿Estás seguro que quieres cerrar sesión?',
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#000',
    iconColor: '#1A96A0',
    confirmButtonColor: '#1A96A0',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sí, ciérrala!'
  }).then((result) => {
    if (result.isConfirmed) {
      signOut(auth).then(() => {
        // Sign-out successful.
        Swal.fire({
          icon: 'success',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Sesión cerrada!',
          text: '¡La sesión se cerró correctamente.!',
        }).then(() => {
          location.href = "/menu/logintecnicos.html";
        });
      }).catch((error) => {
        // An error happened.
      });
    }
  });
});

save.addEventListener('click', (e) => {
  e.preventDefault();
  var newPassword = document.getElementById("newPassword").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  const user = auth.currentUser;

  if (newPassword.length !== 0 && confirmPassword.length !== 0) {
    if (newPassword === confirmPassword) {
      updatePassword(user, newPassword).then(() => {
        // Update successful.
        Swal.fire({
          icon: 'success',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Felicidades!',
          text: "Tu contraseña se actualizó con éxito",
        });
      }).catch((error) => {
        // An error occurred
        Swal.fire({
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          icon: 'error',
          title: 'Error',
          iconColor: '#1A96A0',
          text: 'Inicia sesión para cambiar tu contraseña',
        }).then(() => {
          location.href = "/menu/logintecnicos.html";
        });
      });
    } else {
      Swal.fire({
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        icon: 'error',
        title: 'Error',
        iconColor: '#1A96A0',
        text: 'Las contraseñas no coinciden',
      });
    }
  } else {
    Swal.fire({
      iconColor: '#1A96A0',
      confirmButtonColor: '#1A96A0',
      icon: 'error',
      title: 'Error',
      iconColor: '#1A96A0',
      text: 'Debes llenar todos los datos',
    });
  }
});

deletebutton.addEventListener('click', (e) => {
  Swal.fire({
    title: '¿Estás seguro que quieres borrar tu cuenta?',
    icon: 'warning',
    showCancelButton: true,
    iconColor: '#1A96A0',
    cancelButtonColor: '#000',
    confirmButtonColor: '#1A96A0',
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Sí, borrala!'
  }).then((result) => {
    if (result.isConfirmed) {
      const user = auth.currentUser;
      deleteUser(user).then(() => {
        // User deleted.
        Swal.fire({
          icon: 'success',
          title: '¡Felicidades!',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          text: 'La Cuenta se borro correctamente',
        }).then(() => {
          location.href = "/menu/logintecnicos.html";
        });

      }).catch((error) => {
        // An error ocurred
        // ...
        Swal.fire({
          icon: 'error',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Vuelve a iniciar sesión para borrar tu cuenta!',
        }).then(() => {
          location.href = "/menu/logintecnicos.html";
        });
      });

    }
  });
})

changename.addEventListener('click', (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Actualizar Nombre',
    cancelButtonColor: '#000',
    confirmButtonColor: '#1A96A0',
    iconColor: '#1A96A0',
    confirmButtonText: 'Cambiar Nombre',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    html: '<input id="swal-input1" class="inputchangename">',
    focusConfirm: false,
    preConfirm: () => {
      const name = document.getElementById('swal-input1').value;
      return name;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        title: '¡Se cambio correctamente la informacion!',
      })
      const newName = result.value;
      if (newName) {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "1", "Plumbing", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "2", "Electricity", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "3", "locksmith", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "4", "Gardening", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "5", "Paint", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "6", "Homeappliances", doc2.id), {
                    Nombre: newName
                  })

                })

              })
            getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "7", "Pets", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "8", "CleanHome", doc2.id), {
                    Nombre: newName
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "9", "Vehicles", doc2.id), {
                    Nombre: newName
                  })
                })
              })

          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Debe llenar el campo!',
        })
      }
    }
  });
});

changephone.addEventListener('click', (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Actualizar Numero De Telefono',
    cancelButtonColor: '#000',
    confirmButtonColor: '#1A96A0',
    iconColor: '#1A96A0',
    confirmButtonText: 'Cambiar Numero De Telefono',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    html: '<input id="swal-input1" class="inputchangename">',
    focusConfirm: false,
    preConfirm: () => {
      const phone = document.getElementById('swal-input1').value;
      return phone;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        title: '¡Se cambio correctamente la informacion!',
      })
      const newPhone = result.value;
      if (newPhone) {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "1", "Plumbing", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "2", "Electricity", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "3", "locksmith", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "4", "Gardening", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "5", "Paint", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "6", "Homeappliances", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "7", "Pets", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "8", "CleanHome", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "9", "Vehicles", doc2.id), {
                    Telefono: newPhone
                  })
                })
              })

          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Debe llenar el campo!',
        })
      }
    }
  });
});


changecity.addEventListener('click', (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Actualizar Ciudad',
    cancelButtonColor: '#000',
    confirmButtonColor: '#1A96A0',
    iconColor: '#1A96A0',
    confirmButtonText: 'Cambiar Ciudad',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    html: `
      <label for="">
        <select placeholder="Motivo" class="changecity" name="subject" id="swal-input1" required>
          <option disabled hidden selected>Elige tu nueva ciudad</option>
          <option>Madrid</option>
          <option>Facatativa</option>
          <option>Funza</option>
          <option>Mosquera</option>
        </select>
      </label> 
    `,
    focusConfirm: false,
    preConfirm: () => {
      const city = document.getElementById('swal-input1').value;
      return city;
    }

  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        title: '¡Se cambio correctamente la informacion!',
      })
      const newCity = result.value;
      if (newCity) {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "1", "Plumbing", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "2", "Electricity", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "3", "locksmith", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "4", "Gardening", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "5", "Paint", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "6", "Homeappliances", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "7", "Pets", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "8", "CleanHome", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "9", "Vehicles", doc2.id), {
                    Ciudad: newCity
                  })
                })
              })

          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Debe llenar el campo!',
        })
      }
    }
  });
});
changeage.addEventListener('click', (e) => {
  e.preventDefault();

  Swal.fire({
    title: 'Actualizar Edad',
    cancelButtonColor: '#000',
    confirmButtonColor: '#1A96A0',
    iconColor: '#1A96A0',
    confirmButtonText: 'Cambiar Edad',
    cancelButtonText: 'Cancelar',
    showCancelButton: true,
    html: '<input id="input_age" class="inputchangename">',
    focusConfirm: false,
    preConfirm: () => {
      const age = document.getElementById('input_age').value;
      return age;
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        iconColor: '#1A96A0',
        confirmButtonColor: '#1A96A0',
        title: '¡Se cambio correctamente la informacion!',
      })
      const newAge = result.value;
      if (newAge) {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "1", "Plumbing", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "2", "Electricity", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "3", "locksmith", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "4", "Gardening", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "5", "Paint", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "6", "Homeappliances", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "7", "Pets", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "8", "CleanHome", doc2.id), {
                    Edad: newAge
                  })
                })
              })
            getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid))).
              then(querySnapshot => {
                querySnapshot.forEach((doc2) => {
                  updateDoc(doc(db, "Technical", "9", "Vehicles", doc2.id), {
                    Edad: newAge
                  })
                })
              })

          }
        });
      } else {
        Swal.fire({
          icon: 'error',
          iconColor: '#1A96A0',
          confirmButtonColor: '#1A96A0',
          title: '¡Debe llenar el campo!',
        })
      }
    }
  });
});

