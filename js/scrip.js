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
