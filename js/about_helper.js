const aboutBox3Gallery = [
    "../assets/gallery/about/about_3.jpg",
    "../assets/gallery/about/about_4.jpg",
    "../assets/gallery/about/about_5.jpg",
    "../assets/gallery/about/about_6.jpg",
    "../assets/gallery/about/about_7.jpg",
];

const aboutBox4Gallery = [
    "../assets/gallery/photo4.png",
    "../assets/gallery/photo16.png",
    "../assets/gallery/photo21.png",
];

var galleryIndex = 0;
var windowIndex = 0;
var timeoutIDBox4 = 0;

initAboutComponent();

function initAboutComponent() {
    carouselAboutBox3();
    carouselAboutBox4();
}

function carouselAboutBox3() {
    var bgBox3 = document.getElementById('section_about_box3');
    if(galleryIndex >= aboutBox3Gallery.length) galleryIndex = 0;

    bgBox3.style.backgroundImage = "url(" + aboutBox3Gallery[galleryIndex] + ")";
    galleryIndex++;
    setTimeout(carouselAboutBox3, 3500);
}

function setBox4Img(index) {
    clearTimeout(timeoutIDBox4);
    windowIndex = index;
    carouselAboutBox4();
}

function carouselAboutBox4() {
    var windowImg = document.getElementById('about_box4_window');
    var dots = document.getElementById('about_box4_dot_parent').children;
    windowImg.innerHTML = '';
    
    if(windowIndex >= aboutBox4Gallery.length) windowIndex = 0;

    for(let i = 0; i < aboutBox4Gallery.length; i++) {
        if(i === windowIndex) {
            dots[i].style.backgroundColor = 
            getComputedStyle(document.documentElement).getPropertyValue('--logo-gold');
        } else {
            dots[i].style.backgroundColor = 
            getComputedStyle(document.documentElement).getPropertyValue('--dots-passive');
        }
    }

    var img = document.createElement('img');
    img.src = aboutBox4Gallery[windowIndex];
    windowImg.append(img);
    windowIndex++;
    timeoutIDBox4 = setTimeout(carouselAboutBox4, 3500);
}