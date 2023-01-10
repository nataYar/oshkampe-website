//initial setting that can be changed when window resizes
let controller = new ScrollMagic.Controller();

//here we animate all the subtitles on the page
document.querySelectorAll(".subtitle").forEach(function(el) { 
  let tween = new TimelineMax()
  .fromTo(".subtitle", 2, { opacity: 0 }, { opacity: 1 })
  .fromTo(".subtitle", 5, { x: "-100%" },{x: "0%"}, "-=5")
  let sceneTitles = new ScrollMagic.Scene ({
    duration: "50%",
    triggerElement: el,
    triggerHook: "onEnter",
  })
  .setTween(tween)
  .addTo(controller);
})


document.querySelectorAll(".parallax-img").forEach(function(el) { 
  
  let tween = new TimelineMax()
  .to(".parallax-img", 5, { y: -150 })
  let sceneParallax = new ScrollMagic.Scene ({
    duration: "250%",
    triggerElement: el,
    triggerHook: "onEnter",
  })
  .setTween(tween)
  .addTo(controller);
})

document.querySelectorAll(".painting").forEach(function(el) { 
  console.log('hey')
  let tween = new TimelineMax()
  .to(".painting", 1, { width: '10%' })
  .fromTo(".painting-overlay", 1, { x: "-100%" },{x: "0%"})
  let scenePaintings = new ScrollMagic.Scene ({
    // duration: "100%",
    triggerElement: el,
    triggerHook: "onEnter",
  })
  .setTween(tween)
  .addTo(controller);
})



  function sizeIt() {
    if (window.innerWidth < 768){
        const welcomePics = document.querySelectorAll('.welcome-pic')
        welcomePics.forEach(el => el.style.display = "none")
        document.querySelector(".scrollIcon").style.display = "none"
        document.querySelector(".name").style.opacity = "1";
      }
  }

  window.addEventListener("resize", sizeIt);

  function setUp(){
    if (window.innerWidth > 768) {
      let tlWelcome_Big = new TimelineMax()
      .to(".scrollIcon", 3, { opacity: 0 })
      .fromTo(".picture-original-center", { opacity: 0 }, { opacity: 1, duration: 3}, "+=3")
      
      .fromTo(".picture-original-left", { opacity: 0 }, { opacity: 1, duration: 4}, )
      .fromTo(".picture-original-left", { top: "40%" }, { top: "55%", duration: 4})

      .fromTo(".picture-copy-right", { opacity: 0 }, { opacity: 1, duration: 4})
      .fromTo(".picture-copy-right", { top: "30%" }, { top: "50%", duration: 4})

      .fromTo(".picture-copy-center", { opacity: 0 }, { opacity: 1, duration: 4})
      .fromTo(".picture-copy-center", { top: "30%" }, { top: "50%", duration: 4})

      .to(".picture-original-center", 8, { y: 1600 })
      .to(".picture-original-left", 8, { x: -1600 }, "-=8")
      .to(".picture-copy-right", 8, { x: 1600 }, "-=8")
      .to(".picture-copy-center", 8, { y: -1600 }, "-=8")

      .fromTo(".name", { opacity: 0 }, { opacity: 1, duration: 5}, "-=3")
      let sceneWelcomeBig = new ScrollMagic.Scene({
        triggerElement: ".section-welcome",
        duration: "200%",
        triggerHook: 0,
      })
      .setTween(tlWelcome_Big)
      .setPin(".section-welcome")
      .addTo(controller);

      let tlMyWorks = new TimelineMax()
      .fromTo(".mw-cont", 1, {y: "-100%", }, { y: "0%", ease: "Back.easeIn"})
      let sceneMw = new ScrollMagic.Scene({
        triggerElement: ".parallax-container",
        duration: "50%",
        triggerHook: 1,
      })
      .setTween(tlMyWorks)
      .addTo(controller);

    } else {
      let tlWelcome_Small = new TimelineMax()
      .fromTo(".cta1", 1.5,{ x: "100%", opacity: 0.2 }, { x: 0 , opacity: 1, ease: "Back.easeOut"}, "+=.3")
      .fromTo(".cta2", 1.5,{ x: "-100%", opacity: 0.2 }, { x: 0 , opacity: 1, ease: "Back.easeOut"}, "<20%")
      .fromTo(".instagram", 1.5,{ y: "-100%", opacity: 0 }, { y: 0 , opacity: 1, ease: "Back.easeOut"}, "<20%")
      .fromTo(".vk", 1.5,{ y: "100%", opacity: 0 }, { y: 0 , opacity: 1, ease: "Back.easeOut"}, "<20%")
      
      let sceneWelcome_Small = new ScrollMagic.Scene({
        triggerElement: ".section-welcome",
        triggerHook: 1,
      })
      .setTween(tlWelcome_Small)
      .addTo(controller);
    }
  }

  window.addEventListener("load", setUp)
