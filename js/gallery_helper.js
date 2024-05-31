const galleryImages = [
    '../assets/gallery/photo1.png',
    '../assets/gallery/photo3.png',
    '../assets/gallery/photo4.png',
    '../assets/gallery/photo5.png',
    '../assets/gallery/photo8.png',
    '../assets/gallery/photo11.png',
    '../assets/gallery/photo12.png',
    '../assets/gallery/photo13.png',
    '../assets/gallery/photo14.png',
    '../assets/gallery/photo15.png',
    '../assets/gallery/photo16.png',
    '../assets/gallery/photo17.png',
    '../assets/gallery/photo18.png',
    '../assets/gallery/photo9.png',
    '../assets/gallery/photo19.png',
    '../assets/gallery/photo20.png',
    '../assets/gallery/photo21.png',
    '../assets/gallery/photo2.png',
    '../assets/gallery/photo22.png',
    '../assets/gallery/photo23.png',
    '../assets/gallery/photo24.png',
    '../assets/gallery/photo25.png',
    '../assets/gallery/photo26.png',
    '../assets/gallery/photo27.png',
    '../assets/gallery/photo28.png',
    '../assets/gallery/photo29.png',
    '../assets/gallery/photo30.png',
    '../assets/gallery/about/about_2.jpg',
    '../assets/gallery/about/about_3.jpg',
    '../assets/gallery/about/about_4.jpg',
    '../assets/gallery/about/about_5.jpg',
    '../assets/gallery/about/about_6.jpg',
    '../assets/gallery/about/about_7.jpg',
    '../assets/gallery/rooms/deluxe_suite_heavensedge_19.jpg',
    '../assets/gallery/rooms/deluxe_suite_heavensedge_1.jpg',
    '../assets/gallery/rooms/villa_heavensedge_21.jpg',
];

const wrapperClass = 'wrapper_gallery_img';
var activeImgPath = '';
var activeImgIndex = 0;

initGallery();

function initGallery() {
    setGalleryImages();
}

function setGalleryImages() {
    var dynamicLoader = document.getElementById('gallery_img_dynamic_loader');
    
    Object.values(galleryImages).forEach((path) => {
        var wrapper = document.createElement('div');
        var img = document.createElement('img');

        img.src = path;
        img.setAttribute("onclick", `openGallerySlider('${path}')`);
        wrapper.className = wrapperClass;
        wrapper.append(img);
        dynamicLoader.append(wrapper);
    })
}

function openGallerySlider(path) {
    var body = document.body;
    
    // creation
    var darkBackground = document.createElement('div');
    var menuWrapper = document.createElement('div');
    var menuStart = document.createElement('div');
    var menuEnd = document.createElement('div');
    var sliderWrapper = document.createElement('div');
    var sliderNavPrevious = document.createElement('div');
    var sliderImgWrapper = document.createElement('div');
    var sliderImg = document.createElement('div');
    var sliderNavNext = document.createElement('div');
    var spanImgPosition = document.createElement('span');
    var iconClose = document.createElement('i');
    var iconPrevious = document.createElement('i');
    var iconNext = document.createElement('i');

    // identification
    darkBackground.id = 'gallery_slider_box';
    menuWrapper.className = 'gallery_slider_menu_wrapper';
    menuStart.className = 'gallery_slider_menu_start';
    menuEnd.className = 'gallery_slider_menu_end';
    sliderWrapper.className = 'gallery_slider_content_wrapper';
    sliderNavPrevious.className = 'gallery_slider_content_previous';
    sliderImgWrapper.className = 'gallery_slider_content_img';
    sliderImg.id = 'gallery_slider_img_bg'
    sliderNavNext.className = 'gallery_slider_content_next';
    spanImgPosition.id = 'gallery_slider_img_position';
    iconClose.className = 'icon-Close';
    iconPrevious.className = 'icon-Previous';
    iconNext.className = 'icon-Next';

    // logic
    activeImgPath = path;
    activeImgIndex = galleryImages.indexOf(activeImgPath);
    spanImgPosition.innerHTML = `${activeImgIndex+1} / ${galleryImages.length}`;
    iconClose.setAttribute('onclick', 'closeGallerySlider()');
    iconPrevious.setAttribute('onclick', "updateGallerySlider('previous')");
    sliderImg.style.backgroundImage = `url(${activeImgPath})`;
    iconNext.setAttribute('onclick', "updateGallerySlider('next')");
    
    // assembling
    menuStart.append(spanImgPosition);
    menuEnd.append(iconClose);
    menuWrapper.append(menuStart, menuEnd);

    sliderNavPrevious.append(iconPrevious);
    sliderImgWrapper.append(sliderImg);
    sliderNavNext.append(iconNext);
    sliderWrapper.append(sliderNavPrevious, sliderImgWrapper, sliderNavNext);

    darkBackground.append(menuWrapper, sliderWrapper);
    body.append(darkBackground);
}

function updateGallerySlider(mode) {
    if(mode === 'next') {
        activeImgIndex === galleryImages.length-1
            ? activeImgIndex = 0
            : activeImgIndex++;
    } else {
        activeImgIndex === 0
            ? activeImgIndex = galleryImages.length-1
            : activeImgIndex--;
    }

    activeImgPath = galleryImages[activeImgIndex];

    var spanImgPosition = document.getElementById('gallery_slider_img_position');
    spanImgPosition.innerHTML = `${activeImgIndex+1} / ${galleryImages.length}`;

    var sliderImg = document.getElementById('gallery_slider_img_bg');
    sliderImg.style.backgroundImage = `url(${galleryImages[activeImgIndex]})`;
}

function closeGallerySlider() {
    var slider = document.getElementById('gallery_slider_box');
    slider.remove();
}