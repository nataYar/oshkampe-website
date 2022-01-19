console.clear();
let w = window.innerWidth;
let controller = new ScrollMagic.Controller();
let size = w > 768 ? "big" : "small";
if (size === "big") {
  forBigScreen();
  forBothScreens();
} else {
  forSmallScreen();
  forBothScreens();
}
 // "onEnter" => 1
  // "onCenter" => 0.5
  // "onLeave" => 0

function forBigScreen() {
  //FIRST SECTION 
  let tlWelcome = new TimelineMax()
  .fromTo(".picture-original-center", { opacity: 0 }, { opacity: 1, duration: 3})
  .to(".scrollIcon", 3, { opacity: 0 }, "-=3")
  .fromTo(".picture-original-left", { opacity: 0 }, { opacity: 1, duration: 20}, "-=1")
  .fromTo(".picture-original-left", { top: "40%" }, { top: "55%", duration: 20}, "-=20")

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
    duration: "170%",
    triggerHook: 0,
  })
  .setTween(tlWelcome)
  .setPin(".section-welcome")
  .addTo(controller);

  //_____________________________________________________________________
  let tlExhibitions_Enter = new TimelineMax()
  .fromTo(".section-exhibitions-title", 1.5, { opacity: 0 }, { opacity: 1})
  .fromTo(".section-exhibitions-title", 1.5, { y: -30 }, { y: 0, duration: 1.5}, "<")
  .to(".exh-1-img-wrapper", 1.5, {x: "12%", y: "30%"}, "<")
  .to(".exh-1-text", 1.5, {x: "-30%", y: "-55%"}, "<")
  .to(".exh-2-img-wrapper", 1.5, {x: "15%", y: "-20%"}, "<")
  .to(".exh-2-text", 1.5, {x: "19%", y: "70%"}, "<")
  
  let scene6 = new ScrollMagic.Scene({
    triggerElement: ".music",
    duration: '100%',
    triggerHook: .7, //onLeave
  })
  .setTween(tlExhibitions_Enter)
  .addTo(controller);
}

// MOBILE
function forSmallScreen () {
  const welcomePics = document.querySelectorAll('.welcome-pic')
  console.log(welcomePics)
  welcomePics.forEach(el => el.style.display = "none")

  document.querySelector(".scrollIcon").style.display = "none"

  let tlWelcomeSmall = new TimelineMax()
  .fromTo(".cta1", 1.5,{ x: "100%", opacity: 0.2 }, { x: 0 , opacity: 1, ease: "Back.easeOut"}, "+=.3")
  .fromTo(".cta2", 1.5,{ x: "-100%", opacity: 0.2 }, { x: 0 , opacity: 1, ease: "Back.easeOut"}, "<20%")
  .fromTo(".instagram", 1.5,{ y: "-100%", opacity: 0 }, { y: 0 , opacity: 1, ease: "Back.easeOut"}, "<20%")
  .fromTo(".vk", 1.5,{ y: "100%", opacity: 0 }, { y: 0 , opacity: 1, ease: "Back.easeOut"}, "<20%")
  let scene1small = new ScrollMagic.Scene({
    triggerElement: ".section-welcome",
    triggerHook: 1,
  })
  .setTween(tlWelcomeSmall)
  .addTo(controller);


  let tlExhibitions_Mobile = new TimelineMax()
  .fromTo(".section-exhibitions-title", 1.5, { opacity: 0 }, { opacity: 1})
  .fromTo(".section-exhibitions-title", 1.5, { y: -30 }, { y: 0, duration: 1.5}, "<")
  .fromTo(".exh-1-img-wrapper", 2, { x: "-130%"},{ x: 0, ease: "Back.easeOut" }, "<")
  .fromTo(".exh-1-text", 2, { x: "-130%"},{ x: 0, ease: "Back.easeOut" }, "<")
  .fromTo(".exh-2-img-wrapper", 2, { scale: 1, x: "180%" },{ scale: 1, x: "55%", ease: "Back.easeOut" }, "<")
  .fromTo(".exh-2-text",  2, { x: "110%"},{ x: 0, ease: "Back.easeOut" }, "<")
  let scene7 = new ScrollMagic.Scene({
    triggerElement: ".section-exhibitions",
    triggerHook: .5,
  })
  .setTween(tlExhibitions_Mobile)
  .addTo(controller);
}



function forBothScreens() {
  let tlSectionAbout_Enter = new TimelineMax()
  .fromTo(".name", { y: 0 }, { y: 400, duration: 6})
  .to(".name", { opacity: 0, duration: 6}, "<")
  .fromTo(".about-me-text", { opacity: 0 }, { opacity: 1, duration: 3}, "-=4")
  .fromTo(".about-me-text", { y: -100 }, { y: 0, duration: 3}, "<")
  let scene2 = new ScrollMagic.Scene({
    triggerElement: ".section-about",
    duration: '100%',
    triggerHook: "onEnter",
  })
  .setTween(tlSectionAbout_Enter)
  .addTo(controller)

  //_____________________________________________________________________
  let tlAbout_Leave = new TimelineMax()
  .to(".about-me-text", 3, { opacity: 0 }) 
  .to(".about-me-text", 3, { y: 200 }, "<")
  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".section-about",
    duration: '100%',
    triggerHook: 0,
  })
  .setTween(tlAbout_Leave)
  .addTo(controller);

  //_____________________________________________________________________
  let tlOriginal = new TimelineMax()
  .fromTo(".section-paintings h4:nth-child(1)", { opacity: 0 }, { opacity: 1, duration: 3}, "-=1")
  .fromTo(".section-paintings h4:nth-child(1)", { y: -100 }, { y: 0, duration: 3}, "<")
  let scene35 = new ScrollMagic.Scene({
    triggerElement: ".original",
    duration: '100%',
    triggerHook: 1,
  })
  .setTween(tlOriginal)
  .addTo(controller);

  //_____________________________________________________________________
  let tlCopies = new TimelineMax()
  .fromTo(".section-paintings h4:nth-child(3)", { opacity: 0 }, { opacity: 1, duration: 2}, "<")
  .fromTo(".section-paintings h4:nth-child(3)", { y: -100 }, { y: 0, duration: 2}, "<")
  let scene4 = new ScrollMagic.Scene({
    triggerElement: ".copies",
    duration: '100%',
    triggerHook: 1,
  })
  .setTween(tlCopies)
  .addTo(controller);

  //_____________________________________________________________________
  let tlMusic = new TimelineMax()
  .fromTo(".section-paintings h4:nth-child(5)", { opacity: 0 }, { opacity: 1, duration: 2}, "<")
  .fromTo(".section-paintings h4:nth-child(5)", { y: -100 }, { y: 0, duration: 2}, "<")
  let scene5 = new ScrollMagic.Scene({
    triggerElement: ".music",
    duration: '100%',
    triggerHook: 1
  })
  .setTween(tlMusic)
  .addTo(controller);
}


function sizeIt() {
  w = window.innerWidth;
  let newSize = w > 768 ? "big" : "small";
  if (newSize != size) {
    size = newSize;
    if (newSize === "big") {
      console.log("The screen is now large - ScrollMagic is active.");
      // timelineWelcome.kill()
      forBigScreen();
      forBothScreens();
      // TweenMax.set("#target", { clearProps: "all" });
      // TimelineMax.clear(true);
      // timelineWelcome.kill()
      // timelineSectionAbout_Enter.kill()
      // timelineSectionAbout_Leave.kill()
      // timelineOriginal.kill()
      // timelineCopies.kill()
      // timelineMusic.kill() 
      // timelineSectionExhibitions_Enter.kill()
      // controller.destroy(true);
    } else {
      console.log("The screen is now small - ScrollMagic has been destroyed by aliens.");
      forSmallScreen();
      forBothScreens();
    }
  }
}

window.addEventListener("resize", sizeIt);