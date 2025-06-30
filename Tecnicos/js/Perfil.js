$(document).ready(function () {
    $('#loading').fadeOut('slow');
    $('body').removeClass('hidden');

});

// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore, getDocs, collection, doc, getDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.22.1//firebase-storage.js";


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
const storage = getStorage();


onAuthStateChanged(auth, (user) => {
    if (user) {

        getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")


                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }
                })
            })

        getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })
        getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })

            })

        getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })

        getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })
        getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })
        getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })
        getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })
            getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid)))
            .then(querySnapshot => {
                querySnapshot.forEach((doc) => {

                    var nameandlastname = document.getElementById("nameandlastname")
                    var numberphone = document.getElementById("phone")
                    var city = document.getElementById("city")
                    var age = document.getElementById("age")
                    var service = document.getElementById("service")
                    var description = document.getElementById("Description")
                    var foto = document.getElementById("contenedor-imagen")



                    nameandlastname.textContent = doc.data().Nombre;
                    numberphone.textContent = doc.data().Telefono;
                    city.textContent = doc.data().Ciudad;
                    age.textContent = doc.data().Edad;
                    service.textContent = doc.data().Servicio;
                    description.textContent = doc.data().Descripcion
                    if (doc.data().Foto == '') {
                        foto.style = "background-image: url('https://ceslava.s3-accelerate.amazonaws.com/2016/04/mistery-man-gravatar-wordpress-avatar-persona-misteriosa-510x510.png');"
                    }
                    else {
                        foto.style = "background-image: url('" + doc.data().Foto + "');"
                    }

                })
            })



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


editdescription.addEventListener('click', (e) => {
    e.preventDefault();

    Swal.fire({
        title: 'Editar Descripcion',
        cancelButtonColor: '#000',
        confirmButtonColor: '#1A96A0',
        confirmButtonText: 'Cambiar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        html: '<input id="swal-input1" class="inputchangedescription">',
        focusConfirm: false,
        preConfirm: () => {
            const newDescription = document.getElementById('swal-input1').value;
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "1", "Plumbing", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "2", "Electricity", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "3", "locksmith", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "4", "Gardening", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "5", "Paint", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "6", "Homeappliances", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "7", "Pets", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "8", "CleanHome", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                    getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid))).
                        then(querySnapshot => {
                            querySnapshot.forEach((doc2) => {
                                updateDoc(doc(db, "Technical", "9", "Vehicles", doc2.id), {
                                    Descripcion: newDescription
                                })
                            })
                        })
                }
            })
            return newDescription;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                iconColor: '#1A96A0',
                confirmButtonColor: '#1A96A0',
                title: '¡Se cambio correctamente la descripcion!',
            })
        }
    });
})


var changephoto = document.getElementById("btn-cambiar-foto")



changephoto.addEventListener('click', (e) => {
    Swal.fire({
        title: 'Cambiar foto de perfil',
        cancelButtonColor: '#000',
        confirmButtonColor: '#1A96A0',
        confirmButtonText: 'Cambiar',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        html: '<input id="swal-input2" class="inputchangephoto" type="file">',
        focusConfirm: false,
    }).then((result) => {
        if (result.isConfirmed) {
            
            onAuthStateChanged(auth, (user) => {
                if (user) {

                    const inputphoto = document.getElementById('swal-input2')

                    // Upload file and metadata to the object 'images/mountains.jpg'
                    const storageRef = ref(storage, 'images/' + user.uid);
                    const uploadTask = uploadBytesResumable(storageRef, inputphoto.files[0]);

                    // Listen for state changes, errors, and completion of the upload.
                    uploadTask.on('state_changed',
                        (snapshot) => {
                            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                            console.log('Upload is ' + progress + '% done');
                            switch (snapshot.state) {
                                case 'paused':
                                    console.log('Upload is paused');
                                    break;
                                case 'running':
                                    console.log('Upload is running');
                                    break;
                            }
                        },
                        (error) => {
                            // A full list of error codes is available at
                            // https://firebase.google.com/docs/storage/web/handle-errors
                            switch (error.code) {
                                case 'storage/unauthorized':
                                    // User doesn't have permission to access the object
                                    break;
                                case 'storage/canceled':
                                    // User canceled the upload
                                    break;

                                // ...

                                case 'storage/unknown':
                                    // Unknown error occurred, inspect error.serverResponse
                                    break;
                            }
                        },
                        () => {
                            // Upload completed successfully, now we can get the download URL
                            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                                getDocs(query(collection(db, "Technical", "1", "Plumbing"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "1", "Plumbing", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "2", "Electricity"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "2", "Electricity", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "3", "locksmith"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "3", "locksmith", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "4", "Gardening"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "4", "Gardening", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "5", "Paint"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "5", "Paint", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "6", "Homeappliances"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "6", "Homeappliances", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "7", "Pets"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "7", "Pets", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "8", "CleanHome"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "8", "CleanHome", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                                getDocs(query(collection(db, "Technical", "9", "Vehicles"), where("Id", "==", user.uid))).
                                    then(querySnapshot => {
                                        querySnapshot.forEach((doc2) => {
                                            updateDoc(doc(db, "Technical", "9", "Vehicles", doc2.id), {
                                                Foto: downloadURL
                                            })
                                        })
                                    })
                            });
                        }
                    );

                }
            })
        }
    });
})






