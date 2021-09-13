const swiper = new Swiper(".case-study-slider", {
  // Optional parameters
  // direction: 'vertical',

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".fillBox1", {
  duration: 2,
  ease: "none",
  height: "100%",
  scrollTrigger: {
    trigger: ".fillLine1",
    start: "top 70%",
    end: "bottom 70%",
    scrub: true,
  },
});

gsap.to(".c1", {
  duration: 0.1,
  backgroundColor: "rgb(47, 231, 63)",
  border: "none",
  scrollTrigger: {
    trigger: ".c1",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});

gsap.to(".c2", {
  backgroundColor: "rgb(47, 231, 63)",
  duration: 0.1,
  border: "none",
  scrollTrigger: {
    trigger: ".c2",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});

gsap.to(".c3", {
  backgroundColor: "rgb(47, 231, 63)",
  duration: 0.1,
  border: "none",
  scrollTrigger: {
    trigger: ".c3",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
gsap.to(".c4", {
  backgroundColor: "rgb(47, 231, 63)",
  duration: 0.1,
  border: "none",
  scrollTrigger: {
    trigger: ".c4",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
gsap.to(".c5", {
  backgroundColor: "rgb(47, 231, 63)",
  duration: 0.1,
  border: "none",
  scrollTrigger: {
    trigger: ".c5",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});

// Here comes the on scroll text content

const as2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c1",
    start: "80% 80%",
    end: "center bottom",
    toggleActions: "play none none reset",
  },
});

as2.from(".appear > p:nth-child(1)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const img3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c1",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
img3.from(".appear2 > img:nth-child(2)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c2",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
as3.from(".appear2 > p:nth-child(1)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const img2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c2",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
img2.from(".appear > img:nth-child(4)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c2",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
as5.from(".appear > p:nth-child(2)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const img4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c3",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
img4.from(".appear2 > img:nth-child(3)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c3",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
as4.from(".appear > p:nth-child(3)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as04 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c3",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
as04.from(".appear > p:nth-child(7)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c4",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
as6.from(".appear2 > p:nth-child(4)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as06 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c4",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
as06.from(".appear > p:nth-child(8)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const img6 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c4",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
img6.from(".appear > img:nth-child(6)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c5",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
as7.from(".appear > p:nth-child(9)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const as07 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c5",
    start: "80% 80%",
    end: "bottom top",
    toggleActions: "play none none reset",
  },
});
as07.from(".appear > p:nth-child(5)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});

const img7 = gsap.timeline({
  scrollTrigger: {
    trigger: ".c5",
    start: "80% 80%",
    end: "bottom",
    toggleActions: "play none none reset",
  },
});
img7.from(".appear2 > img:nth-child(5)", {
  opacity: 0,
  y: 70,
  ease: Back.easeOut,
  duration: 1,
});
