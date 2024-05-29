const aboutGallery = [
    "../assets/gallery/about/about_3.jpg",
    "../assets/gallery/about/about_4.jpg",
    "../assets/gallery/about/about_5.jpg",
    "../assets/gallery/about/about_6.jpg",
    "../assets/gallery/about/about_7.jpg",
];

const windowImage = "../assets/gallery/about/about_2.jpg";

var galleryIndex = 0;
var windowIndex = 0;

initAboutComponent();

function initAboutComponent() {
    carouselAboutBox3();
    // carouselAboutBox4();
}

function carouselAboutBox3() {
    var bgBox3 = document.getElementById('section_about_box3');
    if(galleryIndex >= aboutGallery.length) galleryIndex = 0;

    bgBox3.style.backgroundImage = "url(" + aboutGallery[galleryIndex] + ")";
    galleryIndex++;
    setTimeout(carouselAboutBox3, 3500);
}

// function carouselAboutBox4() {
//     var image = 
// }