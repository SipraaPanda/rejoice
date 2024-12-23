function locoScroll(){
gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
locoScroll();

// Cursor Effect
const cursor = document.querySelector('#cursor');
const page1Content = document.querySelector('#page1-content');

function cursorEffect() {
  page1Content.addEventListener("mousemove", function(dets) {
    
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
       
    });
  });

  page1Content.addEventListener("mouseenter", function() {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1
    });
  });

  page1Content.addEventListener("mouseleave", function() {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0
    });
  });
}

cursorEffect();

function page2Animation() {
  // Placeholder for page2 animation logic
}

page2Animation();

 
function page2Animation() {
  const page2Content2 = document.querySelector(".page2content2");
  page2Content2.addEventListener("mouseenter", function() {
      gsap.to(page2Content2, {
          opacity: 10,
          duration: 0.1,

          zIndex: 7
      });
  });
  page2Content2.addEventListener("mouseleave", function() {
    gsap.to(page2Content2, {
        opacity: 10,
        duration: 0.1,

        zIndex: 7
    });
});
  
}

page2Animation();
