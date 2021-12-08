var map;
var places = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
   
    zoom: 10,
  });
  ReqJson();
}

function ReqJson(){
    fetch("https://amapalanches.com/includes/v1/getTodas.php")
    .then(function(resp){
       return resp.json();
    })
    .then(function(resp2){
        places = resp2.todas
        getCenter(map,places)
        Markers(places)
})} 
 function Markers(places){
     for(var i=0;i<places.length;i++){
     var marker = new google.maps.marker({
         'map':map,
         "position":{
            "lat":parseFloat(places[i].lat),
            "lng":parseFloat(places[i].lng),
         }
     });
    }
 }

 function getCenter(map,places){
    for (var i = 0; i < places.length; i++) {

        var latitude = places[i].lat;
        var longitude = places[i].lng;
    var latlng = new google.maps.LatLng(latitude, longitude);
    map.setCenter(latlng);
 }}