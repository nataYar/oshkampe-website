// NAV ANIMATION
const nav= document.querySelector("nav");
const navBelowMenu = document.querySelector(".nav-vertical-links");
const navLinks = document.querySelectorAll(".nav-vertical-links li")
const burger = document.querySelector(".burger");
const navSlide = () => {
    // const burger = document.querySelector(".burger");
    // const nav= document.querySelector("nav");
    // const navBelowMenu = document.querySelector(".nav-vertical-links");
    // const navLinks = document.querySelectorAll(".nav-vertical-links li")

    //toggle nav bar
    burger.addEventListener('click', (e) => {
        nav.classList.toggle("showNav");
        // navBelowMenu.classList.toggle("nav-vertical-active");
        navLinks.forEach((link) => {
            link.classList.toggle("navLinkShown")
        });
        burger.classList.toggle("toggle");
        navBelowMenu.onmouseover = function() {mouseCursor.classList.add("cursor-circle-hidden");}
    })}
navSlide();

// navLinks.forEach((link) => {
//     link.onclick = function(){ 
//         navLinks.classList.toggle("navLinkShown") 
//         nav.classList.toggle("showNav");
//         burger.classList.toggle("toggle")}
//     ;
// });

//FILL IN SECTION WITH PAINTINGS
const images = [
{direction:"horizontal", lowQuality: "painting/original/preview/Action, 2010 FOR SALE 333$-min.JPG", fullImg: "painting/original/preview/Action, 2010 FOR SALE 333$-min.JPG" , name: "Action, 2010 FOR SALE 333$", description: "2010, FOR SALE 333$"},
{direction:"horizontal", lowQuality: "painting/original/preview/Competition, 2011 FOR SALE 222$-min.jpg", fullImg: "painting/original/preview/Competition, 2011 FOR SALE 222$-min.jpg",  name: "Competition, 2011 FOR SALE 222$", description: "Competition, 2011 FOR SALE 222$"},
{direction:"vertical", lowQuality: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "E, 2015, acrylic FOR SALE 665$", description: "E, 2015, acrylic FOR SALE 665$"},

{direction:"vertical", lowQuality: "painting/original/preview/Autumn tomatoes, 2017 FOR SALE 300$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Autumn tomatoes, 2017 FOR SALE 300$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Chess Composition, march 2015, oilcanvas FOR SALE 30000$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Chess Composition, march 2015, oilcanvas FOR SALE 30000$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Dragon fruit. 2017 FOR SALE 333$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Dragon fruit. 2017 FOR SALE 333$", description: "E, 2015, acrylic FOR SALE 665$"},

{direction:"vertical", lowQuality: "painting/original/preview/Family of 4, 2013, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Family of 4, 2013, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Flowers, 2009 FOR SALE 444$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Flowers, 2009 FOR SALE 444$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Fresh Calm  (for Tonya) september 2014, in private collection .JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Fresh Calm September 2014, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},

{direction:"vertical", lowQuality: "painting/original/preview/Live to death, 2010, in private collection-min-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Live to death, 2010, in private collection-min-min", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Mad Body's Wishes, 2012 FOR SALE 555$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Mad Body's Wishes, 2012 FOR SALE 555$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/LTH, 2009, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "LTH, 2009, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},

{direction:"vertical", lowQuality: "painting/original/preview/M-animal, 2009, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "M-animal, 2009, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Money Happen's, 2009-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Money Happens, 2009", description: "E, 2015, acrylic FOR SALE 665$"},

// {direction:"vertical", lowQuality: "painting/original/preview/Live to death, 2010, in private collection-min-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "E, 2015, acrylic FOR SALE 665$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/My Child may-july 2014, oil,acrylic FOR SALE 20000$ .jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "My Child may-july 2014, oil,acrylic FOR SALE 20000$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Pain 2013 FOR SALE 555$-min-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Pain 2013 FOR SALE 555$", description: "E, 2015, acrylic FOR SALE 665$"},

{direction:"vertical", lowQuality: "painting/original/preview/Part of you will stay with me, 2013 FOR SALE 777$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Part of you will stay with me, 2013 FOR SALE 777$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Pepper, 2017 FOR SALE 222$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Pepper, 2017 FOR SALE 222$", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Portrait of Alexander, 2008, in private collection .jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Portrait of Alexander, 2008, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},

{direction:"vertical", lowQuality: "painting/original/preview/Rest in Park 2009, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Rest in Park 2009, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/Sweet Vynil Rooney, 2012, acrylic, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Sweet Vynil Rooney, 2012, acrylic, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
{direction:"vertical", lowQuality: "painting/original/preview/u r my Alter-Ego, 2013 FOR SALE 555$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "u r my Alter-Ego, 2013 FOR SALE 555$", description: "E, 2015, acrylic FOR SALE 665$"},

// {direction:"vertical", lowQuality: "painting/original/preview/Part of you will stay with me, 2013 FOR SALE 777$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "E, 2015, acrylic FOR SALE 665$", description: "E, 2015, acrylic FOR SALE 665$"},
// {direction:"vertical", lowQuality: "painting/original/preview/Pepper, 2017 FOR SALE 222$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "E, 2015, acrylic FOR SALE 665$", description: "E, 2015, acrylic FOR SALE 665$"},
// {direction:"vertical", lowQuality: "painting/original/preview/Portrait of Alexander, 2008, in private collection .jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "E, 2015, acrylic FOR SALE 665$", description: "E, 2015, acrylic FOR SALE 665$"},
];
//CREATE IMAGES
const placeForImages = document.querySelector(".section-images");

function createImageNode() {
    images.forEach((element) => {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("painting-container")
        placeForImages.appendChild(containerDiv); 
        
        const img = document.createElement("img");
        img.src = element.lowQuality;
        img.alt = element.name;
        img.classList.add("painting");
        containerDiv.appendChild(img);

        const overlayDiv = document.createElement("div");
        overlayDiv.classList.add("painting-overlay")
        containerDiv.appendChild(overlayDiv); 

        const imgName = document.createElement("p");
        imgName.innerHTML = element.name;
        imgName.classList.add("painting-name");
    });
}
createImageNode();

//FULL IMAGE FUNCTION
const fullImgCont = document.querySelector(".full-img-container");
const previews = document.querySelectorAll(".painting-container");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption")

function fullSizeImg() {
    previews.forEach((element, index) => {
        element.addEventListener("click", () => {
            burger.classList.toggle("hidden");
            fullImgCont.classList.add("open");
            original.classList.add('full-img');
            
            //customize fullImgCont div: img and text
            
            // console.log(element.style.width, element.style.height)
            original.setAttribute("src", `${images[index].lowQuality}`);
            // original.classList.add(`${images[index].direction}`);
            original.alt = `${images[index].name}`;
            caption.innerHTML = `${images[index].name}`;
            //stop scrolling
            document.body.classList.add("stop-scrolling");
        }) 
    })
}


//functiol to CLOSE THE FULL IMG
original.addEventListener("click", (e)=> {
    burger.classList.toggle("hidden");
    e.target.className = "full-img";
    // if(e.target.classList.contains("full-img")){
    //     // e.target.classList.contains("horizontal") ? 
    //     //     e.target.classList.classList.remove("horizontal") : e.target.classList.classList.remove("vertical") 
    //     console.log(e.target)
    //     // original.classList.remove("horizontal")
    //     // original.classList.remove("vertical");
        document.body.classList.remove("stop-scrolling");
        fullImgCont.classList.remove("open");
    // }
})

fullSizeImg();

const currentImg = document.querySelector(".full-img");
function getCurrImg(){
    const found = (el) => el.name == currentImg.alt;
    let currIndex = images.findIndex(found);
    console.log('currIndex'+currIndex)
    return currIndex;
}
function goDownGallery(n){
    let newIndex = getCurrImg() - n;
    console.log('before ind'+newIndex)
    changeImg(newIndex);
}
function goUpGallery(n){
    let newIndex = getCurrImg() + n;
    console.log('next ind'+newIndex)
    changeImg(newIndex);
}
function changeImg(newIndex){
    // console.log('changeimg')
    if (newIndex < 0){
        newIndex = images.length-1;
    }
    if (newIndex > images.length-1){
        newIndex = 0;
    }
    console.log(currentImg);

    currentImg.setAttribute("src", `${images[newIndex].lowQuality}`);
    currentImg.setAttribute("alt", `${images[newIndex].name}`);
    currentImg.setAttribute("class", "full-img");
    // currentImg.setAttribute("class", `${images[newIndex].direction}`);
    // currentImg.classList.add(`${images[newIndex].direction}`); //will be added dinamically
    caption.innerHTML = `${images[newIndex].name}`;
}

//SLIDER 
const slider = document.querySelector(".slider");
let pressed = false;
let startX, scrollLeft;
  
let startDragging = function (e) {
  pressed = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft; 
  slider.style.cursor='grabbing';
};

let stopDragging = function(event) {
  pressed = false;
  slider.style.cursor='grab'
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!pressed) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});


slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);



