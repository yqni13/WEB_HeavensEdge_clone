import { MAP_API_KEY } from "../environments/environment.js";

const apiKey = MAP_API_KEY;
const tilelayer = `https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg?api_key=${apiKey}`;
const coordinates = [36.43440575472026, 25.421328373568183];
const zoom = 17;

initLocation();

function initLocation() {
    setupMap();
}

function setupMap() {

    var map = L.map('map').setView(coordinates, zoom);
    
    L.tileLayer(tilelayer, {
        minZoom: 0,
        maxZoom: 20,
        attribution: '84700, Imerovigli, Santorini, Greece'
    }).addTo(map);
    
    L.marker(coordinates).addTo(map);
}
