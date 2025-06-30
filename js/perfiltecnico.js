$(document).ready(function () {
  $('#loading').fadeOut('slow');
  $('body').removeClass('hidden');

});

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, getDocs, collection, doc, getDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

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
const db = getFirestore(app);


  getDocs(collection(db, "Technical", "1", "Plumbing")).
    then(querySnapshot => {
      querySnapshot.forEach((doc) => {

        var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      if (doc.data().Foto == '') {
        profile_image.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
      }
      else {
        profile_image.style = "background-image: url('" + doc.data().Foto + "');"
      }

    })

  })

getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      if (doc.data().Foto == '') {
        profile_image.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
      }
      else {
        profile_image.style = "background-image: url('" + doc.data().Foto + "');"
      }

    })

  })
  getDocs(collection(db, "Technical", "3", "locksmith")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      foto.style = "background-image: url('" + doc.data().Foto + "');"


    })

  })
  getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      foto.style = "background-image: url('" + doc.data().Foto + "');"


    })

  })
  getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      foto.style = "background-image: url('" + doc.data().Foto + "');"


    })

  })
  getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      foto.style = "background-image: url('" + doc.data().Foto + "');"


    })

  })
  getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      foto.style = "background-image: url('" + doc.data().Foto + "');"


    })

  })
  getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      foto.style = "background-image: url('" + doc.data().Foto + "');"


    })

  })
  getDocs(collection(db, "Technical", "2", "Electricity")).
  then(querySnapshot => {
    querySnapshot.forEach((doc) => {

      var nameandlastname = document.getElementById("nameandlastname")
      var numberphone = document.getElementById("phone")
      var city = document.getElementById("city")
      var age = document.getElementById("age")
      var service = document.getElementById("service")
      var foto = document.getElementById("contenedor-imagen")


      nameandlastname.textContent = doc.data().Nombre
      numberphone.textContent = doc.data().Telefono;
      city.textContent = doc.data().Ciudad;
      age.textContent = doc.data().Edad;
      service.textContent = doc.data().Servicio;
      if (doc.data().Foto == '') {
        profile_image.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
      }
      else {
        profile_image.style = "background-image: url('" + doc.data().Foto + "');"
      }

    })

  })

document.addEventListener("DOMContentLoaded", function () {
  const commentInput = document.getElementById("commentInput");
  const submitBtn = document.getElementById("submitBtn");
  const commentList = document.getElementById("commentList");

  submitBtn.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
      const commentDiv = document.createElement("div");
      commentDiv.className = "comment";
      commentDiv.textContent = commentText;
      commentList.appendChild(commentDiv);
      commentInput.value = "";
    }
  });
});


