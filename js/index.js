// Make the script wait for the document to be ready before it runs any code (= wait for DOM elements to load before execution)
window.addEventListener('load', (event) => {

    var coordinates = {                             // Object (key-value pair) - factoring
        Watford: [51.6573979,-0.3814787],
        City: [51.5, -0.09],
        Rome: [41.893173, 12.477722],
    };


    // Load map in Watford
    var mymap = L.map('map', {
        scrollWheelZoom: false
    }).setView(coordinates.Watford, 13);


    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoicml0YXpsYXRuaWsiLCJhIjoiY2p1ZHl5OTE4MHpvbjQ0bWh6a3dpdHNxcSJ9.0iKZMf2DWgxeuS-UUbu0Iw'
    }).addTo(mymap);

    // Add marker
    var marker = L.marker(coordinates.City).addTo(mymap);
    // // Set viewport to city after 5 sec
    // setTimeout(function() {
    //     mymap.setView(coordinates.City)
    // }, 5000);
    // Create variable for button
    var button = document.getElementById('button');
    // If I click on the button, set viewport to city
    button.addEventListener('click', (event) => {
        mymap.setView(coordinates.City);
    });
    // If I click on Rome, set viewport to Rome - copy coordinates from Google Maps
    var rome = document.getElementById('rome');
    rome.addEventListener('click', (event) => {
        mymap.setView(coordinates.Rome, 10);
    });
    // If I click on Add Marker, add it to Rome
    var addMarker = document.getElementById('add-marker');
    addMarker.addEventListener('click', (event) => {

        L.marker(coordinates.Rome).addTo(mymap);
    });

    var popup = L.popup();

    // function onMapClick(e) {
    //     popup
    //         .setLatLng(e.latlng)
    //         .setContent("You clicked the map at " + e.latlng.toString())
    //         .openOn(mymap);
    //     L.marker(e.latlng).addTo(mymap);
    //     console.log(e);
    // }

    // mymap.on('click', onMapClick);

});
