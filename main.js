
var projectJSONData = require("./data/content.json");
// var projectData;
var sliderIndex = 0;
var box3Images = [
    "./assets/gallery/photo16.png",
    "./assets/gallery/photo1.png",
    "./assets/gallery/photo15.png",
    "./assets/gallery/photo10.png",
    "./assets/gallery/photo9.png"
]

function initProject() {
    // projectData = projectJSONData;
    carouselBox3();
}

function carouselBox3() {
    var image = document.getElementById("box3_img");
    if (sliderIndex >= box3Images.length) {
        sliderIndex = 0;
    }
    image.style.backgroundImage = "url(" + box3Images[sliderIndex] + ")";
    sliderIndex++;
    setTimeout(carouselBox3, 5000);
}

initProject();