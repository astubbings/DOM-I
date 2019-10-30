const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// next 2 images in the document
let callToActionImage = document.getElementById("cta-img");
callToActionImage.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//navigation text 
const navigationLinks = document.querySelectorAll('nav a');
navigationLinks[0].textContent = 'Services';
navigationLinks[1].textContent = 'Product';
navigationLinks[2].textContent = 'Vision';
navigationLinks[3].textContent = 'Features';
navigationLinks[4].textContent = 'About';
navigationLinks[5].textContent = 'Contact';


// used to append and prepend new a tags in the nav tag
const newNavLinks = document.querySelector('nav');

const newNavOne = document.createElement('a');
newNavOne.textContent = 'Clouds';
const newNavTwo = document.createElement('a');
newNavTwo.textContent = 'Ocean';

newNavLinks.appendChild(newNavOne);
newNavLinks.prepend(newNavTwo);



// GREEN nav a COLOR CHANGER
const navigationLinksColor = document.querySelectorAll('a');
navigationLinksColor.forEach( itemplaceholder => itemplaceholder.style.color = 'green');



//const callToActionText = document.querySelector('.cta-text h1');
//callToActionText.textContent = siteContent["cta"]["h1"];

document.querySelector('.cta-text h1').innerHTML = 'DOM<br> IS<br> AWESOME';

const callToActionButton = document.querySelector('.cta-text button');
callToActionButton.textContent = siteContent["cta"]["button"];

// TOP CONTENT 
const topContentH4 = document.querySelectorAll('.top-content h4');
topContentH4[0].textContent = siteContent["main-content"]["features-h4"];
topContentH4[1].textContent = siteContent["main-content"]["about-h4"];

const topContentPara = document.querySelectorAll('.top-content p');
topContentPara[0].textContent = siteContent["main-content"]["features-content"];
topContentPara[1].textContent = siteContent["main-content"]["about-content"];
topContentPara[0].style.margin ='0 5% 0 0';


const bottomContentH4 = document.querySelectorAll('.bottom-content h4');
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"];

const bottomContentPara = document.querySelectorAll('.bottom-content p');
bottomContentPara[0].textContent = siteContent["main-content"]["services-content"];
bottomContentPara[1].textContent = siteContent["main-content"]["product-content"];
bottomContentPara[2].textContent = siteContent["main-content"]["vision-content"];
bottomContentPara[2].style.padding ='0 2% 0 0';

const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent["contact"]["contact-h4"];

const contactPara = document.querySelectorAll('.contact p');
contactPara[0].innerHTML = '123 Way 456 Street<br> Somewhere, USA';
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

document.querySelector('footer p').textContent = siteContent["footer"]["copyright"];


