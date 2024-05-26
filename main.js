
var sliderIndex = 0;
var box3Images = [
    "assets/gallery/photo16.png",
    "assets/gallery/photo1.png",
    "assets/gallery/photo15.png",
    "assets/gallery/photo10.png",
    "assets/gallery/photo9.png"
]
var currentFile = '';

initProject();

function initProject() {
    // var widthRequestSlowedDown = $.debounce(300, () => {
    //     this.setNavWidthDynamically(window.screen.width);
    // })
    // window.addEventListener("resize", widthRequestSlowedDown, false);
    currentFile = getCurrentFile();
    loadNavBar();
    loadFooter();
    if(currentFile === 'index.html') carouselBox3();
}

function carouselBox3() {
    var image = document.getElementById("box3_img");
    var locationReference = '';
    currentFile === 'index.html' ? locationReference = './' : locationReference = '../';

    if (sliderIndex >= box3Images.length) {
        sliderIndex = 0;
    }
    
    image.style.backgroundImage = "url(" + locationReference + box3Images[sliderIndex] + ")";
    sliderIndex++;
    setTimeout(carouselBox3, 3500);
}

function getCurrentFile() {
    let url = location.href;
    return url.substring(url.lastIndexOf('/')+1);
}

function loadNavBar() {
    const navbar = document.getElementById("nav_bar_target");
    const menuElements = {
        "Home": "index.html",
        "About": "nav_about.html",
        "Suites & Villas": "nav_suites-and-villas.html",
        "Experience": "nav_experience.html",
        "Booking": "https://heavensedge.reserve-online.net/"
    }

    let logo_element = document.createElement('a');
    let ul_element = document.createElement('ul');
    let menu_element = document.createElement('a');
    let img_element = document.createElement('img');
    let i_element = document.createElement('i');
    
    // logo
    var locationReference = '';
    currentFile === 'index.html' ? locationReference = '.' : locationReference = '..';
    logo_element.href = locationReference + "/index.html";    
    logo_element.className = "logo";
    img_element.src = locationReference + "/assets/img/HeavensEdge_Logo.png";
    logo_element.appendChild(img_element);

    // ul
    Object.entries(menuElements).forEach(([key, value]) => {
        let li_element = document.createElement('li');
        let a_element = document.createElement('a');
        if (key === 'Home') {
            a_element.href = locationReference + `/${value}`;
        } else if (key === 'Booking') {
            a_element.href = value;
            a_element.target = "_blank";
        } else {
            currentFile === 'index.html'
                ? a_element.href = `./components/${value}`
                : a_element.href = `./${value}`;
        }
        a_element.innerHTML = key;
        li_element.appendChild(a_element);
        ul_element.appendChild(li_element);
    })

    // burger-menu
    menu_element.className = "burger-menu";
    i_element.className = "icon-BurgerMenu";
    menu_element.appendChild(i_element);

    // final assemble
    navbar.append(logo_element, ul_element, menu_element);
}

function loadFooter() {
    var locationReference = '';
    currentFile === 'index.html' ? locationReference = './components/' : locationReference = './';
    const linksElements = {
        "Resort Information": {
            "Gallery": "footer_gallery.html",
            "Location": "footer_location.html"
        },
        "Terms & Conditions": {
            "Booking": "https://heavensedge.reserve-online.net/",
            "Privacy Policy": "footer_policy.html",
            "Terms of use": "footer_terms.html"
        },
        
        "Heavens Edge": {
            "Newsletter": "footer_newsletter.html",
            "Reviews": "footer_reviews.html"
        }
    }
    const contactElements = {
        "Reception": [
            "+30 22860 21992",
            "icon-Reception"
        ],
        "Reservations": [
            "+30 21076 58310",
            "icon-Phone"
        ],
        "E-Mail": [
            "info@heavensedge.gr",
            "icon-Mail"
        ]
    }
    const formElements = {
        "input": {
            "First Name": "uneven",
            "Last Name": "even",
            "Email": "uneven",
            "Phone": "even"
        }
    }

    // wrapper
    const wrapperBase = document.createElement('div');
    wrapperBase.className = 'wrapper_footer';
    const wrapperLinks = document.createElement('div');
    wrapperLinks.className = 'wrapper_links';
    const wrapperContact = document.createElement('div');
    wrapperContact.className = 'wrapper_contact';

    // additional links    
    let ul_element1 = document.createElement('ul');
    let column1 = document.createElement('div');
    column1.id = 'links_column1';
    let h5_element1 = document.createElement('h5');
    h5_element1.innerHTML = 'Resort Information';
    Object.entries(linksElements['Resort Information']).forEach(([key, value]) => {
        let li_element = document.createElement('li');
        let a_element = document.createElement('a');
        a_element.href = locationReference + value;
        a_element.innerHTML = key;
        li_element.append(a_element);
        ul_element1.append(li_element);
    })
    column1.append(h5_element1, ul_element1);
    wrapperLinks.append(column1);
    
    let ul_element2 = document.createElement('ul');
    let column2 = document.createElement('div');
    column2.id = 'links_column2';
    let h5_element2 = document.createElement('h5');
    h5_element2.innerHTML = 'Terms & Conditions';
    Object.entries(linksElements['Terms & Conditions']).forEach(([key, value]) => {
        let li_element = document.createElement('li');
        let a_element = document.createElement('a');
        if(key === 'Booking') {
            a_element.href = value;
            a_element.target = "_blank";
        } else {
            a_element.href = locationReference + value;
        }
        a_element.innerHTML = key;
        li_element.append(a_element);
        ul_element2.append(li_element);
    })
    column2.append(h5_element2, ul_element2);
    wrapperLinks.append(column2);
    
    let ul_element3 = document.createElement('ul');
    let column3 = document.createElement('div');
    column3.id = 'links_column3';
    let h5_element3 = document.createElement('h5');
    h5_element3.innerHTML = 'Heavens Edge';
    Object.entries(linksElements['Heavens Edge']).forEach(([key, value]) => {
        let li_element = document.createElement('li');
        let a_element = document.createElement('a');
        a_element.href = locationReference + value;
        a_element.innerHTML = key;
        li_element.append(a_element);
        ul_element3.append(li_element);
    })
    column3.append(h5_element3, ul_element3);
    wrapperLinks.append(column3);
    
    let p_element = document.createElement('p');
    let i_element = document.createElement('i');

    i_element.className = 'icon-CopyRight';
    i_element.id = 'copyright';
    p_element.append("2024 ", i_element, " Heavens Edge. All rights reserved.");
    wrapperLinks.append(p_element);
    wrapperBase.append(wrapperLinks);


    // contact us    
    let contact = document.createElement('div');
    contact.className = 'contact';
    let contactUs = document.createElement('div');
    contactUs.className = 'contact_us'
    let h5_contact = document.createElement('h5');
    h5_contact.innerHTML = 'Contact us';
    contactUs.append(h5_contact);
    contact.append(contactUs);

    let contactData = document.createElement('div');
    contactData.className = 'contact_data';
    let contactMsg = document.createElement('div');
    contactMsg.className = 'contact_msg';
    let count = 0;
    
    Object.entries(contactElements).forEach(([key, values]) => {
        let h6_element = document.createElement('h6');
        let i_element = document.createElement('i');
        let p_element = document.createElement('p');
        let contactDetails = document.createElement('div');
        count++;
        contactDetails.className = `contact_details data${count}`;
        h6_element.innerHTML = key;
        p_element.innerHTML = values[0];
        i_element.className = values[1];
        contactDetails.append(i_element, h6_element, p_element);
        contactData.append(contactDetails);
    })
    wrapperContact.append(contactData);

    let form = document.createElement('form');
    Object.entries(formElements["input"]).forEach(([key, value]) => {
        let div = document.createElement('div');
        let input = document.createElement('input');
        div.className = value;
        input.className = `msg_${value}`;
        input.placeholder = key;
        input.type = 'text';
        div.appendChild(input);
        form.append(div);
    })

    let textarea = document.createElement('textarea');
    let btn = document.createElement('button');
    textarea.placeholder = 'Message';
    btn.innerHTML = 'Submit';
    form.append(textarea, btn);
    contactMsg.append(form);
    wrapperContact.append(contactMsg);
    contact.append(wrapperContact);
    
    wrapperBase.append(contact);
    const footer = document.getElementById('footer_target');
    footer.append(wrapperBase);
}

// TODO: responsive navbar (example portfolio project)
// function setNavWidthDynamically(width) {
//     // sets data attribute for body and in media.scss style settings are applied

//     if(width > 768) {
//         document.body.setAttribute("data-nav", 'navDesktop');
//     } else {
//         document.body.setAttribute("data-nav", 'navMobileCollapsed');
//     }
// }

// function expandNavMobile(closeAfterRouting = false) {
//     const screenWidth = window.screen.width;
//     if(screenWidth <= 768 && closeAfterRouting)  this.mobileNavExpended = true;
//     if(screenWidth > 768 && !closeAfterRouting) return;

//     if(screenWidth <= 768) {
//         if(this.mobileNavExpended) {
//             document.body.setAttribute("data-nav", 'navMobileCollapsed')
//             this.mobileNavExpended = false;
//         } else {
//             document.body.setAttribute("data-nav", 'navMobileExtended')
//             this.mobileNavExpended = true;
//         }
//     }
// }