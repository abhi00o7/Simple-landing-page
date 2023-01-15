///Navbar needs to be added dynamically through JavaScript as per rubrics.
//select overlay div
const landing_overlay = document.querySelector(".landing-page .overlay");
//create header div
const header = document.createElement("div");
// add header class to header
header.className = "header";
//ADD header div to overlay div
landing_overlay.appendChild(header);
//add class logo
const logo = document.createElement("div");
logo.className = "logo";
header.appendChild(logo);
logo.textContent = "EGYPT";
//add ul  Element
const ulElement = document.createElement("ul");
ulElement.className = "list";
ulElement.setAttribute("id", "navbar__list");
header.appendChild(ulElement);
const ArrayNames = {
  About: ".about-us",
  "My Skills": ".skills",
  "Gallery Of Egypt": ".Gallery",
  "Time Line": ".time-line",
  "Contact Us": ".contact",
};
const entries = Object.entries(ArrayNames);
for (const [name, d] of entries) {
  const liElement = document.createElement("li");
  ulElement.appendChild(liElement);
  const aElement = document.createElement("a");
  liElement.appendChild(aElement);
  aElement.setAttribute("data-section", d);
  aElement.textContent = name;
  aElement.style.cursor = "pointer";
}
//// Create Nav Bullets Section USing JS
const navBullets = document.createElement("div");
navBullets.className = "nav-bullets";
document.body.appendChild(navBullets);
dataObject = {
  "Landing Page Section": ".landing-page",
  "About Me": ".about-us",
  "Skills Section": ".skills",
  "Gallery Section": ".Gallery",
  "Time Line Section": ".time-line",
  "Contact Us Section": ".contact",
};
const entries2 = Object.entries(dataObject);
for (const [name, d] of entries2) {
  const bulletElement = document.createElement("div");
  bulletElement.className = "bullet";
  bulletElement.setAttribute("data-section", d);
  navBullets.appendChild(bulletElement);
  const toolTipEle = document.createElement("div");
  toolTipEle.className = "toolTip";
  toolTipEle.textContent = name;
  bulletElement.appendChild(toolTipEle);
}

////////////////////////////// Random Background option
let backoption = true;
let Interval;
//check if local storage
let maincolor = localStorage.getItem("color-option");
//remove active class from all color list
document.querySelectorAll(".color-list li").forEach((Element) => {
  Element.classList.remove("active");
  //add active class on element with data color ===local storage
  if (Element.dataset.color == maincolor) {
    // add active class
    Element.classList.add("active");
  }
});
if (maincolor !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
  //add active class on element with data color ===local storage
}
//////////////////////////////////// check if local storage (Random background option)
let backlocalItem = localStorage.getItem("random-option");
// check if local storage is empty
if (backlocalItem !== null) {
  if (backlocalItem === "true") {
    backoption = true;
  } else {
    backoption = false;
  }
  //////remove active class from classlist of spans
  document.querySelectorAll(".random span").forEach((Element) => {
    Element.classList.remove("active");
  });
  if (backlocalItem === "true") {
    document.querySelector(".random .yes").classList.add("active");
  } else {
    document.querySelector(".random .no").classList.add("active");
  }
}

//switch colors
const colorli = document.querySelectorAll(".color-list li");
//loop ON all list items
colorli.forEach((li) => {
  //click on every list items
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set color on local storage
    localStorage.setItem("color-option", e.target.dataset.color);
    //remove active class from children
    e.target.parentElement.querySelectorAll(".active").forEach((Element) => {
      Element.classList.remove("active");
    });
    //add active class on target
    e.target.classList.add("active");
  });
});
/////////////////////////////////////////////// switch random background option
const randombackel = document.querySelectorAll(".random span");
//// oop on all span
randombackel.forEach((span) => {
  // click on every span
  span.addEventListener("click", (e) => {
    // remove active class from children
    e.target.parentElement.querySelectorAll(".active").forEach((Element) => {
      Element.classList.remove("active");
    });
    // add active class on self
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      backoption = true;
      randomize();
      localStorage.setItem("random-option", true);
    } else {
      backoption = false;
      clearInterval(Interval);
      localStorage.setItem("random-option", false);
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////
//toggle spin on icon
document.querySelector(".toggle .fa-gear").onclick = function () {
  //toggle class fa-spin for roration on self
  this.classList.toggle("fa-spin");
  //toggle open class on setting-box
  document.querySelector(".setting-box").classList.toggle("open");
};

//////////////////select landing page element
let landingpage = document.querySelector(".intro");
//Get array of images
let arrayimgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
//function To randomize Images
function randomize() {
  if (backoption == true) {
    Interval = setInterval(function () {
      let randomN = Math.floor(Math.random() * arrayimgs.length);
      landingpage.style.backgroundImage =
        'url("images/' + arrayimgs[randomN] + '")';
    }, 500);
  }
}
randomize();
/////////////////////////////////////select Skills Selectors
let Ourskills = document.querySelector(".skills h2");
window.onscroll = function () {
  // Skills offset Top
  let SkillsOffsetTop = Ourskills.offsetTop;
  this.console.log(SkillsOffsetTop);
  // Skills outer height
  let SkillsOuterHeight = Ourskills.offsetHeight;
  // window Height
  let WindowHeight = this.innerHeight;
  //window ScrollTop
  let WindowScrollTop = this.pageYOffset;
  if (WindowScrollTop >= SkillsOffsetTop + SkillsOuterHeight - WindowHeight) {
    this.console.log("Skill Section Reached");
    let allSkills = document.querySelectorAll(
      ".skills .skill-box .skill-progress span"
    );
    allSkills.forEach((Element) => {
      Element.style.width = Element.dataset.progress;
    });
  }
};

//////////////////////////////////////////// Create Popup Box
//create Popup Box
let OurGallery = document.querySelectorAll(".Gallery .image-box img");
OurGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create Overlay Element
    let OverlayPopup = document.createElement("div");
    // Add Class To Overlay
    OverlayPopup.className = "Popup-Overlay";
    //Append Overlay To Body
    document.body.appendChild(OverlayPopup);
    //create popup Box
    let PopupBox = document.createElement("div");
    // Add Class TO Popup Box
    PopupBox.className = "Popup-Box";
    if (img.alt !== null) {
      // Create Heading
      let imageHeading = document.createElement("h3");
      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);
      // Append Text To Heading
      imageHeading.appendChild(imgText);
      // Append imageHeading To Popup Box
      PopupBox.appendChild(imageHeading);
    }
    // Create Imge
    let PopupImage = document.createElement("img");
    // Set Image Source
    PopupImage.src = img.src;
    //Add Image To PopupBox
    PopupBox.appendChild(PopupImage);
    // Append Popup Box To the Body
    document.body.appendChild(PopupBox);
    ///////// Create CloseButton
    let closeButton = document.createElement("span");
    // Create The closeButton Text
    let closeButtonText = document.createTextNode("X");
    // append Text To closeButton
    closeButton.appendChild(closeButtonText);
    // append Class to closeButton
    closeButton.className = "close-Button";
    // ADD closeButton To Popup Box
    PopupBox.appendChild(closeButton);
  });
});
////////////// Close PopupBox
document.addEventListener("click", function (e) {
  if (e.target.className == "close-Button") {
    // Remove Popup Box
    e.target.parentElement.remove();
    // Remove the overlay
    document.querySelector(".Popup-Overlay").remove();
  }
});
////////////////////////////////////////////////Bullets
// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");
const allLinks = document.querySelectorAll(".header .list li a");

function scrollToSomeWhere(Elements) {
  Elements.forEach((Ele) => {
    Ele.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    });
  });
}
scrollToSomeWhere(allBullets);
scrollToSomeWhere(allLinks);

const sectionOneOptions = {
  rootMargin: "-550px 0px 0px 0px",
};
const sectionTwo = document.querySelector("#section2");

const sectionTwoObserver = new IntersectionObserver(function (
  entries,
  sectionTwoObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      allLinks[0].classList.toggle("active");
    } else {
      allLinks[0].classList.remove("active");
    }
  });
},
sectionOneOptions);
sectionTwoObserver.observe(sectionTwo);

const sectionThree = document.querySelector("#section3");
const sectionThreeObserver = new IntersectionObserver(function (
  entries,
  sectionThreeObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      allLinks[1].classList.toggle("active");
    } else {
      allLinks[1].classList.remove("active");
    }
  });
},
sectionOneOptions);
sectionThreeObserver.observe(sectionThree);

const sectionFour = document.querySelector("#section4");
const sectionFourObserver = new IntersectionObserver(function (
  entries,
  sectionFourObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      allLinks[2].classList.toggle("active");
    } else {
      allLinks[2].classList.remove("active");
    }
  });
},
sectionOneOptions);

sectionFourObserver.observe(sectionFour);

const sectionFive = document.querySelector("#section5");
const sectionFiveObserver = new IntersectionObserver(function (
  entries,
  sectionFiveObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      allLinks[3].classList.toggle("active");
    } else {
      allLinks[3].classList.remove("active");
    }
  });
},
sectionOneOptions);

sectionFiveObserver.observe(sectionFive);
const sectionSix = document.querySelector("#section6");
const sectionSixObserver = new IntersectionObserver(function (
  entries,
  sectionSixObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      allLinks[4].classList.toggle("active");
    } else {
      allLinks[4].classList.remove("active");
    }
  });
},
sectionOneOptions);

sectionSixObserver.observe(sectionSix);
