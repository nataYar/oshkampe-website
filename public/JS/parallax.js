let controller = new ScrollMagic.Controller();

//FIRST SECTION 
let timelineWelcome = new TimelineMax()
// .to(".section-about", 1, { position: "relative"})
.fromTo(".picture-original-center", { opacity: 0 }, { opacity: 1, duration: 3})
.to(".scrollIcon", 3, { opacity: 0 }, "-=3")
.fromTo(".picture-original-left", { opacity: 0 }, { opacity: 1, duration: 20}, "-=1")
.fromTo(".picture-original-left", { top: "40%" }, { top: "50%", duration: 20}, "-=20")

.fromTo(".picture-copy-right", { opacity: 0 }, { opacity: 1, duration: 20}, "-=1")
.fromTo(".picture-copy-right", { top: "30%" }, { top: "50%", duration: 20}, "-=20")

.fromTo(".picture-copy-center", { opacity: 0 }, { opacity: 1, duration: 20}, "-=10")
.fromTo(".picture-copy-center", { top: "30%" }, { top: "50%", duration: 20}, "-=20")

.to(".picture-original-center", 40, { y: 1600 }, "+=4")
.to(".picture-original-left", 40, { x: -1600 }, "-=40")
.to(".picture-copy-right", 40, { x: 1600 }, "-=40")
.to(".picture-copy-center", 40, { y: -1600 }, "-=40")

.fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 5},"-=30")

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-welcome",
  duration: "200%",
  triggerHook: 0,
})
.setTween(timelineWelcome)
.setPin(".section-welcome")
.addTo(controller);

// _____________________________________________________________________
let timelineSectionAbout_Enter = new TimelineMax()
.fromTo(".name", { y: 0 }, { y: 400, duration: 8})
.to(".name", { opacity: 0, duration: 4}, "<")

.fromTo(".about-me-text", { opacity: 0 }, { opacity: 1, duration: 5}, "-=2")
.fromTo(".about-me-text", { y: -100 }, { y: 0, duration: 3}, "-=5")
// .fromTo(".section-paintings", { y: 0 }, { y: '-100vh', duration: 50}, '+=50')

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".section-about",
  duration: '100%',
  triggerHook: "onEnter",
})
.setTween(timelineSectionAbout_Enter)
// .setPin(".section-about")
.addTo(controller)


//_____________________________________________________________________
let timelineSectionAbout_Leave = new TimelineMax()
.to(".about-me-text", 4, { opacity: 0 }, "+=5") 
.to(".about-me-text", 3, { y: 200 }, "<")

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".section-about",
  duration: '100%',
  triggerHook: 0.5,
})
.setTween(timelineSectionAbout_Leave)
.addTo(controller);


//_____________________________________________________________________
// const sectionPaintings = document.querySelector(".section-paintings");

// let timelineSectionPaintings_Enter = new TimelineMax() 
// // .to(".about-me-text", 2, { opacity: 0 }, "+=1") 
// // .to(".about-me-text", 3, { y: 200 }, "-=2")

// let scene4 = new ScrollMagic.Scene({
//   triggerElement: ".section-paintings",
//   duration: '100%',
//   triggerHook: "onEnter",
// })
// .setTween(timelineSectionPaintings_Enter)
// .addTo(controller);







//_____________________________________________________________________
let timelineSectionExhibitions_Enter = new TimelineMax()
.fromTo(".section-exhibitions-title", { opacity: 0 }, { opacity: 1, duration: 3})
.fromTo(".section-exhibitions-title", { y: -150 }, { y: 0, duration: 3}, "-=3")


let scene5 = new ScrollMagic.Scene({
  triggerElement: ".section-exhibitions",
  duration: '100%',
  triggerHook: "onEnter",
})
.setTween(timelineSectionExhibitions_Enter)
.addTo(controller);

//_____________________________________________________________________
// let timelineSectionContacts_Enter = new TimelineMax()
// .fromTo(".section-contacts a", { y: -100 }, { y: 0, duration: 0.5})
// .fromTo(".section-contacts a", { opacity: 0 }, { opacity: 1, duration: 0.5}, "-=0.5")
// .fromTo(".media-icon-container", { y: -100 }, { y: 0, duration: 0.5}, "-=0.5")
// .fromTo(".media-icon-container", { opacity: 0 }, { opacity: 1, duration: 0.5}, "-=0.5")


// let scene6 = new ScrollMagic.Scene({
//   triggerElement: ".section-contacts",
//   duration: '40%',
//   triggerHook: "onEnter",
// })
// .setTween(timelineSectionContacts_Enter)
// .addTo(controller);
