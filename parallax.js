let controller = new ScrollMagic.Controller();

let timeline1 = new TimelineMax().to(".name", 4, { y: -400 })
.to(".welcome-picture", 4, { y: 300 }, "-=4")
//next
.fromTo(".about-me-text", { opacity: 0 }, { opacity: 1, duration: 3 })
// .fromTo(".about-me-text", { opacity: 1 }, { opacity: 0, duration: 3 }, ">+10")

// .fromTo(".section-works", { y: -200 }, { y: 0, duration: 3 }, ">+2")

let scene1 = new ScrollMagic.Scene({
  triggerElement: ".section-welcome",
  duration: "100%",
  //0 is beginning, 1 is the end of the section
  triggerHook: 0,
}).setTween(timeline1)
.addTo(controller);
//.setPin("section")


let timeline2= new TimelineMax()
.to(".about-me-text", 4, { opacity: 0 }, ">+10")
.to(".section-works", 3, { backgroundColor: 'black' })

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".section-about",
  duration: "100%",
  triggerHook: 0,
}).setTween(timeline2).addTo(controller);

// controller.addScene([
//   scene1,
//   scene2
// ]);


let timeline2= new TimelineMax()
.to(".about-me-text", 4, { opacity: 0 }, ">+10")
.to(".section-works", 3, { backgroundColor: 'black' })

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".section-about",
  duration: "100%",
  triggerHook: 0,
}).setTween(timeline2).addTo(controller);
