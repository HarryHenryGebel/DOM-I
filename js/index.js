'use strict';

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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// set navbar ids and text
const navAnchors = document.getElementsByTagName(
  'nav')[0].getElementsByTagName('a');
const anchorSpecifications = siteContent.nav;
for(let anchor in anchorSpecifications) {
  if (anchor.includes('nav-item')) {
    // figure out which anchor we are
    const anchorIndex = parseInt(anchor[anchor.length -1]) - 1;
    const anchorElement = navAnchors[anchorIndex];
    // set id to object key
    anchorElement.setAttribute('id', anchor);
    anchorElement.textContent = anchorSpecifications[anchor];
  }
}

// set cta elements
const cta = siteContent.cta;
for(let elementName in cta) {
  if (elementName == 'img-src') {
    const image = document.getElementById('cta-img');
    image.setAttribute("src", cta['img-src']);
  }
  else {
    const element = document.getElementsByTagName(elementName)[0];
    element.textContent = cta[elementName];
  }
}

// main-content
const mainContent = siteContent['main-content'],
      topContent = ['features', 'about'];
for (let i = 0; i < topContent.length; i++)
{
  const divName = topContent[i];
  const childNumber = i + 1;
  // console.log(divName, childNumber, document.querySelector(
  //   `body > div > section.main-content > div.top-content > div:nth-child(${childNumber}) > h4`));
  document.querySelector(
    `body > div > section.main-content > div.top-content > div:nth-child(${childNumber}) > h4`).textContent = mainContent[`${divName}-h4`];
  document.querySelector(
    `body > div > section.main-content > div.top-content > div:nth-child(${childNumber}) > p`).textContent = mainContent[`${divName}-content`];
}
//  LocalWords: cta img LocalWords
