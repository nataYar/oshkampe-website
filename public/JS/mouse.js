const mouseCursor = document.querySelector(".cursor-circle");
// const sectionPaintings = document.getElementById("section-paintings");

const sectionExhibitions = document.getElementById("section-exhibitions");
const sectionWelcome = document.getElementById("section-welcome"); 
const sectionAbout = document.getElementById("section-about");
const sectionPaintings = document.querySelector(".section-paintings");
const sectionContacts = document.getElementById("section-contacts") 
const navCursor = document.querySelector("nav");



const arrayOfCircledCursor = [sectionWelcome, sectionAbout];
const noCursorArray = [sectionPaintings, sectionExhibitions, sectionContacts, navCursor]

arrayOfCircledCursor.map(section => section.addEventListener("mousemove", cursor));

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
    mouseCursor.classList.remove("cursor-circle-hidden")
}

noCursorArray.map(section => section.addEventListener("mouseover", noCursor));

function noCursor(e){
    mouseCursor.classList.add("cursor-circle-hidden")
}
// sectionContacts.onmouseover = function(){mouseCursor.classList.toggle("cursor-smaller")}

// sectionPaintings.onmouseover = function() {mouseCursor.classList.add("cursor-circle-hidden");}

// navCursor.onmouseover = function() {mouseCursor.classList.add("cursor-circle-hidden");}

window.onscroll = function(){ mouseCursor.classList.add("cursor-circle-hidden") };