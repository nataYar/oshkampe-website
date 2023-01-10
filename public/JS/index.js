// NAV ANIMATION
const nav= document.querySelector("nav");
const navBelowMenu = document.querySelector(".nav-vertical-links");
const navLinks = document.querySelectorAll(".nav-vertical-links li")
const burger = document.querySelector(".burger");
const navSlide = () => {
    //toggle nav bar
    burger.addEventListener('click', (e) => {
        nav.classList.toggle("showNav");
        navLinks.forEach((link) => {
            link.classList.toggle("navLinkShown")
        });
        burger.classList.toggle("toggle");
        // navBelowMenu.onmouseover = function() {mouseCursor.classList.add("cursor-circle-hidden");}
    })}
navSlide();

//FILL IN SECTION WITH PAINTINGS
const originalImages = [
    {direction:"horizontal", lowQuality: "painting/original/preview/Composition_2013_FOR_SALE_333$.jpg", fullImg: "painting/original/preview/Competition, 2011 FOR SALE 222$-min.jpg",  name: "Composition 2013 FOR SALE 333$", description: "Composition 2013 FOR SALE 333$"},
    {direction:"horizontal", lowQuality: "painting/original/preview/Action, 2010 FOR SALE 333$-min.JPG", fullImg: "painting/original/preview/Action, 2010 FOR SALE 333$-min.JPG" , name: "Action, 2010 FOR SALE 333$", description: "2010, FOR SALE 333$"},
    {direction:"horizontal", lowQuality: "painting/original/preview/Competition, 2011 FOR SALE 222$-min.jpg", fullImg: "painting/original/preview/Competition, 2011 FOR SALE 222$-min.jpg",  name: "Competition, 2011 FOR SALE 222$", description: "Competition, 2011 FOR SALE 222$"},
    {direction:"vertical", lowQuality: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "E, 2015, acrylic FOR SALE 665$", description: "E, 2015, acrylic FOR SALE 665$"},

    {direction:"vertical", lowQuality: "painting/original/preview/Autumn tomatoes, 2017 FOR SALE 300$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Autumn tomatoes, 2017 FOR SALE 300$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Chess Composition, march 2015, oilcanvas FOR SALE 30000$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Chess Composition, march 2015, oilcanvas FOR SALE 30000$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Dragon fruit. 2017 FOR SALE 333$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Dragon fruit. 2017 FOR SALE 333$", description: "E, 2015, acrylic FOR SALE 665$"},

    {direction:"vertical", lowQuality: "painting/original/preview/Family of 4, 2013, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Family of 4, 2013, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Flowers, 2009 FOR SALE 444$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Flowers, 2009 FOR SALE 444$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Fresh Calm  (for Tonya) september 2014, in private collection .JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Fresh Calm September 2014, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},

    {direction:"vertical", lowQuality: "painting/original/preview/Live to death, 2010, in private collection-min-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Live to death, 2010, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Mad Body's Wishes, 2012 FOR SALE 555$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Mad Body's Wishes, 2012 FOR SALE 555$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/LTH, 2009, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "LTH, 2009, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},

    {direction:"vertical", lowQuality: "painting/original/preview/M-animal, 2009, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "M-animal, 2009, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Money Happen's, 2009-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Money Happens, 2009", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/My Child may-july 2014, oil,acrylic FOR SALE 20000$ .jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "My Child may-july 2014, oil,acrylic FOR SALE 20000$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Pain 2013 FOR SALE 555$-min-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Pain 2013 FOR SALE 555$", description: "E, 2015, acrylic FOR SALE 665$"},

    {direction:"vertical", lowQuality: "painting/original/preview/Part of you will stay with me, 2013 FOR SALE 777$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Part of you will stay with me, 2013 FOR SALE 777$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Pepper, 2017 FOR SALE 222$-min.JPG", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Pepper, 2017 FOR SALE 222$", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Portrait of Alexander, 2008, in private collection .jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Portrait of Alexander, 2008, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},

    {direction:"vertical", lowQuality: "painting/original/preview/Rest in Park 2009, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Rest in Park 2009, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/Sweet Vynil Rooney, 2012, acrylic, in private collection.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "Sweet Vynil Rooney, 2012, acrylic, in private collection", description: "E, 2015, acrylic FOR SALE 665$"},
    {direction:"vertical", lowQuality: "painting/original/preview/u r my Alter-Ego, 2013 FOR SALE 555$-min.jpg", fullImg: "painting/original/preview/E, 2015, acrylic FOR SALE 665$-min.jpg",  name: "u r my Alter-Ego, 2013 FOR SALE 555$", description: "E, 2015, acrylic FOR SALE 665$"}
];

const copiesImages = [
    {direction:"horizontal", lowQuality: "painting/copies/Albert Marquet, Port de Bougie, Algiers (The Port in Sunlight), 1925, copy, in private collection.jpg", 
    name: "Albert Marquet, Port de Bougie, Algiers (The Port in Sunlight)", 
    description: "1925, copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/copies/Amedeo Clemente Modigliani, Nudo seduto su un divano, Copy, in private collection .jpg", 
    name: "Amedeo Clemente Modigliani, Nudo seduto su un divano", 
    description: "Copy, in private collection "},

    {direction:"horizontal", lowQuality: "painting/copies/Bouquet of flowers, author unknown, 2018, in private collection.jpg", 
    name: "Bouquet of flowers", 
    description: "author unknown, 2018, in private collection.jpg"},

    {direction:"horizontal", lowQuality: "painting/copies/Bouquet of flowers, author unknown, Copy, 2017, in private collection.jpg", 
    name: "Bouquet of flowers, author unknown", 
    description: "Copy, 2017, in private collection"},

    {direction:"horizontal", lowQuality: "painting/copies/Copy of the painting by H. Schwamberger Bouquet of flowers, 2021, Copy, in private collection-min.jpg", 
    name: "Copy of the painting by H. Schwamberger Bouquet of flowers", 
    description: "2021, Copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/copies/Oscar-Claude Monet, Copy, in private collection.jpg", 
    name: "Oscar-Claude Monet", 
    description: "Copy, in private collection.jpg"},

    {direction:"horizontal", lowQuality: "painting/copies/Oscar-Claude Monet, Impression, soleil levant, Copy, in private collection.jpg", 
    name: "Oscar-Claude Monet, Impression, soleil levant", 
    description: "Copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/copies/Pieter Bruegel de Oude, Jagers in de Sneeuw, Copy, in private collection.jpg", 
    name: "Pieter Bruegel de Oude, Jagers in de Sneeuw", 
    description: "Copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/copies/Victor Borisov-Musatov Pond, in private collection-min.jpg", 
    name: "Victor Borisov-Musatov Pond", 
    description: "Copy, in private collection"},
]


const musicImages = [
    {direction:"horizontal", lowQuality: "painting/music/Dark Ambient, 2008-min.JPG", 
    name: "Dark Ambient, 2008", 
    description: ""},

    {direction:"horizontal", lowQuality: "painting/music/Dedicated to Richard David James, MyAphexEmptyDreaM, 2013 -min.JPG", 
    name: "Dedicated to Richard David James, MyAphexEmptyDreaM, 2013", 
    description: "Dedicated to Richard David James, MyAphexEmptyDreaM, 2013"},

    {direction:"horizontal", lowQuality: "painting/music/Dedication to the album Experience of the Prodigy, Symphony of twelve, 2010-min.JPG", 
    name: "Dedication to the album Experience of the Prodigy, Symphony of twelve, 2010", 
    description: "Dedication to the album Experience of the Prodigy, Symphony of twelve, 2010"},

    {direction:"horizontal", lowQuality: "painting/music/Dedication to the album Music For The Jilted Generation of The Prodigy, OFOG , 2010-min.JPG", 
    name: "Dedication to the album Music For The Jilted Generation of The Prodigy, OFOG , 2010", 
    description: "Copy, 2017, in private collection"},

    {direction:"horizontal", lowQuality: "painting/music/Dub Techno 2008-min.JPG", 
    name: "Dub Techno 2008-min.JPG", 
    description: "2021, Copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/music/Dub, 2009-min.JPG", 
    name: "Dub, 2009", 
    description: "Copy, in private collection.jpg"},

    {direction:"horizontal", lowQuality: "painting/music/Dubstep, 2008-min.JPG", 
    name: "Dubstep, 2008", 
    description: "Copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/music/Jazz, 2008-min.JPG", 
    name: "Jazz, 2008-min.JPG", 
    description: "Copy, in private collection"},

    {direction:"horizontal", lowQuality: "painting/music/Jungle, 2008-min.JPG", 
    name: "Jungle, 2008", 
    description: "Jungle, 2008"},

    {direction:"horizontal", lowQuality: "painting/music/Minimal, 2008-min.jpg", 
    name: "Minimal, 2008", 
    description: "Minimal, 2008"},

    {direction:"horizontal", lowQuality: "painting/music/More music, 2013-min.jpg", 
    name: "More music, 2013", 
    description: "More music, 2013"},

    {direction:"horizontal", lowQuality: "painting/music/Music time, 2012-min.jpg", 
    name: "Music time, 2012", 
    description: "Music time, 2012"},

    {direction:"horizontal", lowQuality: "painting/music/My Synesthezator, 2015-min.jpg", 
    name: "My Synesthezator, 2015", 
    description: "My Synesthezator, 2015"},

    {direction:"horizontal", lowQuality: "painting/music/Organ repertoire (Orgelmuzik), 2013-min.jpg", 
    name: "Organ repertoire (Orgelmuzik), 2013", 
    description: "Music time, 2012"},

    {direction:"horizontal", lowQuality: "painting/music/Ragga Jungle, 2008-min.jpg", 
    name: "Ragga Jungle, 2008", 
    description: "My Synesthezator, 2015"},

    {direction:"horizontal", lowQuality: "painting/music/Reggae, 2008-min.JPG", 
    name: "Reggae, 2008", 
    description: "Music time, 2012"},

    {direction:"horizontal", lowQuality: "painting/music/Rimshot, 2009-min.jpg", 
    name: "Rimshot, 2009", 
    description: "My Synesthezator, 2015"},

    {direction:"horizontal", lowQuality: "painting/music/Trance, 2008-min.JPG", 
    name: "Trance, 2008", 
    description: "Music time, 2012"},

    {direction:"horizontal", lowQuality: "painting/music/UK Garage, 2009-min.jpg", 
    name: "UK Garage, 2009", 
    description: "My Synesthezator, 2015"},

    {direction:"horizontal", lowQuality: "painting/music/ZEN000  dedication to Ninja Tune april 2016, acrylic-min.jpg", 
    name: "ZEN000  dedication to Ninja Tune april 2016, acrylic", 
    description: "My Synesthezator, 2015"},
    
]


//function for rendering  all the pictures
function createImageNode(array, place) {
    array.forEach((element) => {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add("painting-container")
        place.appendChild(containerDiv); 
        
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

const placeForOriginalImages = document.querySelector(".original");
const placeForCopiesImages = document.querySelector(".copies");
const placeForMusicImages = document.querySelector(".music");
createImageNode(originalImages, placeForOriginalImages );
createImageNode(copiesImages, placeForCopiesImages);
createImageNode(musicImages, placeForMusicImages);

//function for pics going Full-sized mode 
const fullImgCont = document.querySelector(".modal-container");
const previews = document.querySelectorAll(".painting-container");
const fullImgs = document.querySelector(".full-img");
const caption = document.querySelector(".caption")

previews.forEach((element, index) => {
    element.addEventListener("click", () => {
        burger.classList.toggle("hidden");
        // fullImgCont.classList.toggle("full-height");
        fullImgCont.classList.add("open");

        let link = previews[index].getElementsByTagName('img')[0].src
        // arrayOfCircledCursor.pop()
        // console.log(arrayOfCircledCursor)
        // mouseCursor.classList.add("cursor-circle-hidden")
        // console.log(mouseCursor.classList)
        //customize fullImgCont div: img and text

        fullImgs.setAttribute("src", link);
        fullImgs.alt = `${previews[index].getElementsByTagName('img')[0].alt}`;
        caption.innerHTML = `${previews[index].getElementsByTagName('img')[0].alt}`;
        //stop scrolling
        document.body.classList.add("stop-scrolling");
    }) 
})

//function to turn off the full-img mode
fullImgs.addEventListener("click", (e)=> {
    burger.classList.toggle("hidden");
    e.target.className = "full-img";
        document.body.classList.remove("stop-scrolling");
        fullImgCont.classList.remove("open");
})

//function to change picture
const currentImg = document.querySelector(".full-img");
function getCurrImg(){
    let currInd;
    let array;
    if (originalImages.find(el => el.name == currentImg.alt)) {
        currInd = originalImages.findIndex(el => el.name == currentImg.alt)
        array = originalImages
    } else if (copiesImages.find(el => el.name == currentImg.alt)) {
        currInd = copiesImages.findIndex(el => el.name == currentImg.alt)
        array = copiesImages
    } else if (musicImages.find(el => el.name == currentImg.alt)) {
        currInd = musicImages.findIndex(el => el.name == currentImg.alt)
        array = musicImages
    }
    return {currInd, array};
}

function goDownGallery(n){
    let {currInd, array} = getCurrImg();
    let newIndex = currInd - n;
    changeImg(newIndex, array);
}

function goUpGallery(n){
    let {currInd, array} = getCurrImg();
    let newIndex = currInd + n;
    changeImg(newIndex, array);
}

function changeImg(newIndex, array){
    if (newIndex < 0){
        newIndex = array.length-1;
    }
    if (newIndex > array.length-1){
        newIndex = 0;
    }
    currentImg.setAttribute("src", `${array[newIndex].lowQuality}`);
    currentImg.setAttribute("alt", `${array[newIndex].name}`);
    currentImg.setAttribute("class", "full-img");
    caption.innerHTML = `${array[newIndex].name}`;
}