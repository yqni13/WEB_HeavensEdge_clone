const tilelayer = 'https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.jpg';
// const tilelayer = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
// const tilelayer = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const coordinates = [36.43440575472026, 25.421328373568183];
const zoom = 17;
const attribution = 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';

initLocation();

function initLocation() {
    setupMap();
}

function setupMap() {

    var map = L.map('map').setView(coordinates, zoom);
    
    L.tileLayer(tilelayer, {
        minZoom: 0,
        maxZoom: 20,
        // attribution: attribution
    }).addTo(map);
    // L.tileLayer(tilelayer, {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);
    
    var marker = L.marker(coordinates).addTo(map);
}
