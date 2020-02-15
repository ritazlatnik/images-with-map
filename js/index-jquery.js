// Make the script wait for the document to be ready before it runs any code (= wait for DOM elements to load before execution)
$(document).ready(function() {

    var coordinates = {                              // Object (key/city - value/coordinates pair) - factoring
        Watford: [51.6573979, -0.3814787],           // My location
        Dunakeszi: [47.636977, 19.152957],
        London: [51.515272, -0.14202],               // Oxford Circus
        Prague: [50.087709, 14.411817],
        Sahara: [31.0607396, -4.0007574],            // Merzouga
        Bournemouth: [50.715224, -1.868362],
        Chefchaouen: [35.1608424, -5.2653876],
        Dover: [51.126374, 1.326234],
        NYC: [40.759547, -73.983065],
        Rome: [41.893173, 12.477722],
    };

    // Load map in Watford (my location)
    var mymap = L.map('map', {                        // L - leaflet = object
        scrollWheelZoom: true                         // Enable mouse wheel zoom
    }).setView(coordinates.Watford, 13);

    // Add tile layer to map
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1Ijoicml0YXpsYXRuaWsiLCJhIjoiY2p1ZHl5OTE4MHpvbjQ0bWh6a3dpdHNxcSJ9.0iKZMf2DWgxeuS-UUbu0Iw'           // From Mapbox account after registering.
    }).addTo(mymap);

    // Create variable for marker and add to map
    // var marker = L.marker(coordinates.London).addTo(mymap);

    // Set viewport to London after 5 sec
    // setTimeout(function() {
    //     mymap.setView(coordinates.London)
    // }, 5000);

    // Create variable for button
    // var button = document.getElementById('button');

    // If I click on the Go button, set viewport to London
    // button.addEventListener('click', (event) => {
    //     mymap.setView(coordinates.London);
    // });

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


    // If I click on 1st image, set viewport to Dunakeszi, add a marker and a popup with city and country name
    // var dunakeszi = $('#dunakeszi');    
    $('#dunakeszi').on('click', function() {
        mymap.setView(coordinates.Dunakeszi, 11);
        L.marker(coordinates.Dunakeszi).addTo(mymap);
        L.popup().setLatLng([47.66, 19.153]).setContent("Dunakeszi, Hungary").openOn(mymap);
    });

    // If I click on 2nd image, set viewport to London, add a marker
    $('#london').on('click', function() {
        mymap.setView(coordinates.London, 12);
        L.marker(coordinates.London).addTo(mymap);
        L.popup().setLatLng([51.5254, -0.142]).setContent("London, United Kingdom").openOn(mymap);
    });

    // If I click on 3rd image, set viewport to Prague, add a marker
    $('#prague').on('click', function() {
        mymap.setView(coordinates.Prague, 11);
        L.marker(coordinates.Prague).addTo(mymap);
        L.popup().setLatLng([50.11, 14.413]).setContent("Prague, Poland").openOn(mymap);
    });

    // If I click on 4th image, set viewport to Sahara, add a marker
    $('#sahara').on('click', function() {
        mymap.setView(coordinates.Sahara, 11);
        L.marker(coordinates.Sahara).addTo(mymap);
        L.popup().setLatLng([31.0886, -4.002]).setContent("Merzouga, Morocco").openOn(mymap);
    });

    // If I click on 5th image, set viewport to Bournemouth, add a marker
    $('#bournemouth').on('click', function() {
        mymap.setView(coordinates.Bournemouth, 11);
        L.marker(coordinates.Bournemouth).addTo(mymap);
        L.popup().setLatLng([50.735, -1.867]).setContent("Bournemouth, United Kingdom").openOn(mymap);
    });

    // If I click on 6th image, set viewport to Chefchaouen, add a marker
    $('#chefchaouen').on('click', function() {
        mymap.setView(coordinates.Chefchaouen, 9);
        L.marker(coordinates.Chefchaouen).addTo(mymap);
        L.popup().setLatLng([35.27, -5.26]).setContent("Chefchaouen, Morocco").openOn(mymap);
    });

    // If I click on 7th image, set viewport to Dover, add a marker
    $('#dover').on('click', function() {
        mymap.setView(coordinates.Dover, 10);
        L.marker(coordinates.Dover).addTo(mymap);
        L.popup().setLatLng([51.168, 1.33]).setContent("Dover, United Kingdom").openOn(mymap);
    });

    // If I click on 8th image, set viewport to NYC, add a marker
    $('#nyc').on('click', function() {
        mymap.setView(coordinates.NYC, 11);
        L.marker(coordinates.NYC).addTo(mymap);
        L.popup().setLatLng([40.785, -73.98]).setContent("New York City, USA").openOn(mymap);
    });

    // If I click on 9th image, set viewport to Rome, add a marker
    $('#rome').on('click', function() {
        mymap.setView(coordinates.Rome, 11);
        L.marker(coordinates.Rome).addTo(mymap);
        L.popup().setLatLng([41.918, 12.479]).setContent("Rome, Italy").openOn(mymap);
    });
});



