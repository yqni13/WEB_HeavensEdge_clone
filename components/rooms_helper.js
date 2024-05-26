var room1Images = [
    "../assets/gallery/rooms/1deluxe_suite/deluxe_suite_heavensedge_1.jpg",
    "../assets/gallery/rooms/1deluxe_suite/deluxe_suite_heavensedge_2.jpg",
    "../assets/gallery/rooms/1deluxe_suite/deluxe_suite_heavensedge_3.jpg",
    "../assets/gallery/rooms/1deluxe_suite/deluxe_suite_heavensedge_4.jpg"
]
var room2Images = [
    "../assets/gallery/rooms/2superior_suite/superiorsuite_heavensedge_1.jpg",
    "../assets/gallery/rooms/2superior_suite/superiorsuite_heavensedge_2.jpg",
    "../assets/gallery/rooms/2superior_suite/superiorsuite_heavensedge_3.jpg",
    "../assets/gallery/rooms/2superior_suite/superiorsuite_heavensedge_4.jpg",
]
var room3Images = [
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_1.jpg",
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_2.jpg",
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_3.jpg",
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_4.jpg",
]
var room4Images = [
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_1.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_2.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_3.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_4.jpg",
]
sliderIndex1 = 0;
sliderIndex2 = 0;
sliderIndex3 = 0;
sliderIndex4 = 0;

initRoomsHelper();

function initRoomsHelper() {
    carouselRoom1();
    carouselRoom2();
    carouselRoom3();
    carouselRoom4();
}

function carouselRoom1() {
    var image = document.getElementById('room1_img');
    if (sliderIndex1 >= room1Images.length) sliderIndex1 = 0;

    image.style.backgroundImage = "url(" + room1Images[sliderIndex1] + ")";
    sliderIndex1++;
    setTimeout(carouselRoom1, 3500);
}
function carouselRoom2() {
    var image = document.getElementById('room2_img');
    if (sliderIndex2 >= room2Images.length) sliderIndex2 = 0;

    image.style.backgroundImage = "url(" + room2Images[sliderIndex2] + ")";
    sliderIndex2++;
    setTimeout(carouselRoom2, 3500);
}
function carouselRoom3() {
    var image = document.getElementById('room3_img');
    if (sliderIndex3 >= room3Images.length) sliderIndex3 = 0;

    image.style.backgroundImage = "url(" + room3Images[sliderIndex3] + ")";
    sliderIndex3++;
    setTimeout(carouselRoom3, 3500);
}

function carouselRoom4() {
    var image = document.getElementById('room4_img');
    if (sliderIndex4 >= room4Images.length) sliderIndex4 = 0;

    image.style.backgroundImage = "url(" + room4Images[sliderIndex4] + ")";
    sliderIndex4++;
    setTimeout(carouselRoom4, 3500);
}