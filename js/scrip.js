/* COMIENZO MAPS */

const baCoords = {lat: -34.6083, lng: -58.3712};
const mapDiv = document.getElementById("map");
let map;
let marker;
function initMap() {
    map = new google.maps.Map(mapDiv, {
        center: {lat: -34.6083, lng: -58.3712},
        zoom: 13,
      });
      marker = new google.maps.Marker({
        position: baCoords,
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.5372048, lng: -58.478056},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.503249, lng: -58.481786},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.5302226, lng: -58.5520591},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.7490278, lng: -58.233286},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.7182595, lng: -58.3017463},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.6705253, lng: -58.3659808},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.6567012, lng: -58.3470872},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.6775395, lng: -58.561672},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.5372048, lng: -58.478056},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.5372048, lng: -58.5447571},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.6376764, lng: -58.5381457},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.7123256, lng: -58.5755262},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.622035, lng: -58.3778417},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.6132353, lng: -58.3602217},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.5972633, lng: -58.4083444},
        map: map,
        icon: "./img/point.png"
      });
      marker = new google.maps.Marker({
        position: {lat: -34.6378201, lng: -58.37687926},
        map: map,
        icon: "./img/point.png"
      });  
}

/* FIN MAPS */

/* BENEFICIOS SWIPER CARRUSEL*/

var swiper = new Swiper(".beneficios-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* FIN BENEFICIOS SWIPER CARRUSEL*/

/* CARRUSEL DE PRODUCTOS */

var swiper = new Swiper(".producto-slider", {
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  spaceBetween: 20,
  pagination: {
     el: ".swiper-pagination",
     clickable: true,
  },
  breakpoints: {
     0: {
       slidesPerView: 1,
     },
     700: {
       slidesPerView: 2,
     },
     1000: {
       slidesPerView: 3,
     },
  },
});

let previewContainer = document.querySelector('.producto-preview-container');
let previewBox = previewContainer.querySelectorAll('.producto-preview');

document.querySelectorAll('.producto .slide').forEach(producto =>{
producto.onclick = () =>{
   previewContainer.style.display = 'flex';
   let name = producto.getAttribute('data-name');
   previewBox.forEach(preveiw =>{
      let target = preveiw.getAttribute('data-target');
      if(name == target){
         preveiw.classList.add('active');
      }
   });
};
});

previewContainer.querySelector('#close-preview').onclick = () =>{
previewContainer.style.display = 'none';
previewBox.forEach(close =>{
   close.classList.remove('active');
});
};

/* FIN CARRUSEL DE PRODUCTOS */
