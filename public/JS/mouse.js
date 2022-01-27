const mouseCursor = document.querySelector(".cursor-circle");
// const sectionPaintings = document.getElementById("section-paintings");

const sectionExhibitions = document.getElementById("section-exhibitions");
const sectionWelcome = document.getElementById("section-welcome"); 
const sectionPaintings = document.querySelector(".section-paintings");
const sectionContacts = document.getElementById("section-contacts") 
const navCursor = document.querySelector("nav");
const parallaxPics = document.querySelector(".parallax-container ")
// const fullImgCont2 = document.querySelector(".full-img-container");


const arrayOfCircledCursor = [sectionWelcome, sectionExhibitions, sectionContacts, sectionPaintings, parallaxPics];

arrayOfCircledCursor.map(section => section.addEventListener("mousemove", cursor));

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.classList.remove("cursor-circle-hidden")
}

navCursor.addEventListener("mouseover", noCursor);

function noCursor(e){
    mouseCursor.classList.add("cursor-circle-hidden")
}

window.onscroll = function(){ mouseCursor.classList.add("cursor-circle-hidden") };
