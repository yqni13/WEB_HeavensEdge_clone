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
    "../assets/gallery/rooms/2superior_suite/superiorsuite_heavensedge_4.jpg"
]
var room3Images = [
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_1.jpg",
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_2.jpg",
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_3.jpg",
    "../assets/gallery/rooms/3two_bedroom/two_bedroom_suite_heavensedge_4.jpg"
]
var room4Images = [
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_1.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_2.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_3.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/villa_heavensedge_4.jpg"
]
sliderIndex1 = 0;
sliderIndex2 = 0;
sliderIndex3 = 0;
sliderIndex4 = 0;

var room1Gallery = [
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_1.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_2.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_3.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_4.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_5.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_6.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_7.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_8.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_9.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_10.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_11.jpg",
    "../assets/gallery/rooms/1deluxe_suite/overview/room1_12.jpg"
];
var room2Gallery = [
    "../assets/gallery/rooms/2superior_suite/overview/room2_1.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_2.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_3.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_4.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_5.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_6.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_7.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_8.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_9.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_10.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_11.jpg",
    "../assets/gallery/rooms/2superior_suite/overview/room2_12.jpg"
];
var room3Gallery = [
    "../assets/gallery/rooms/3two_bedroom/overview/room3_1.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_2.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_3.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_4.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_5.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_6.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_7.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_8.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_9.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_10.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_11.jpg",
    "../assets/gallery/rooms/3two_bedroom/overview/room3_12.jpg"
];
var room4Gallery = [
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_1.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_2.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_3.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_4.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_5.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_6.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_7.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_8.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_9.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_10.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_11.jpg",
    "../assets/gallery/rooms/4heavensedge_villa/overview/room4_12.jpg"
];

var currentFile = '';

initRoomsHelper();

function initRoomsHelper() {
    currentFile = getCurrentFile();
    
    switch(currentFile) {
        case 'nav_suites-and-villas.html': {
            carouselRoom1();
            carouselRoom2();
            carouselRoom3();
            carouselRoom4();
            break;
        }
        case 'rooms_deluxe-suite.html':
            assignRoom1Gallery();
            break;
        case 'rooms_superior-suite.html':
            assignRoom2Gallery();
            break;
        case 'rooms_2bedroom-villa.html':
            assignRoom3Gallery();
            break;
        case 'rooms_heavensedge-villa.html':
            assignRoom4Gallery();
            break;
    }
}

function getCurrentFile() {
    let url = location.href;
    return url.substring(url.lastIndexOf('/')+1);
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

function assignRoom1Gallery() {
    var wrapper = document.getElementById('wrapper_gallery_img');

    for(let i = 0; i < room1Gallery.length; i++) {
        var wrapperImg = document.createElement('div');
        var img = document.createElement('img');
    
        wrapperImg.className = 'wrapper_gallery_single_img';
        img.src = room1Gallery[i];
        wrapperImg.append(img);
        wrapper.append(wrapperImg);
    }
}

function assignRoom2Gallery() {
    var wrapper = document.getElementById('wrapper_gallery_img');
    for(let i = 0; i < room2Gallery.length; i++) {
        var wrapperImg = document.createElement('div');
        var img = document.createElement('img');

        wrapperImg.className = 'wrapper_gallery_single_img';
        img.src = room2Gallery[i];
        wrapperImg.append(img);
        wrapper.append(wrapperImg);
    }
}

function assignRoom3Gallery() {
    var wrapper = document.getElementById('wrapper_gallery_img');
    for(let i = 0; i < room3Gallery.length; i++) {
        var wrapperImg = document.createElement('div');
        var img = document.createElement('img');

        wrapperImg.className = 'wrapper_gallery_single_img';
        img.src = room3Gallery[i];
        wrapperImg.append(img);
        wrapper.append(wrapperImg);
    }
}

function assignRoom4Gallery() {
    var wrapper = document.getElementById('wrapper_gallery_img');
    for(let i = 0; i < room4Gallery.length; i++) {
        var wrapperImg = document.createElement('div');
        var img = document.createElement('img');

        wrapperImg.className = 'wrapper_gallery_single_img';
        img.src = room4Gallery[i];
        wrapperImg.append(img);
        wrapper.append(wrapperImg);
    }
}