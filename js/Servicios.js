$(document).ready(function () {
  $('#loading').fadeOut('slow');
  $('body').removeClass('hidden');

});

btn1.addEventListener('click',(e)=>{
location.href="/menu/Servicios.html";
})
// Inicializa el carrusel
var carousel = document.getElementById("carousel");

// Define la función para cambiar la diapositiva actual
function changeSlide(direction) {
  var currentSlide = carousel.querySelector(".slide.active");
  var nextSlide = currentSlide.nextElementSibling;

  if (direction === "next") {
    nextSlide = currentSlide.nextElementSibling;
  } else if (direction === "prev") {
    nextSlide = currentSlide.previousElementSibling;
  }

  if (nextSlide) {
    nextSlide.classList.add("active");
    currentSlide.classList.remove("active");
  }
}

// Agrega controladores de evento para los botones de flecha
document.getElementById("prev").addEventListener("click", function() {
  changeSlide("prev");
});

document.getElementById("next").addEventListener("click", function() {
  changeSlide("next");
});



