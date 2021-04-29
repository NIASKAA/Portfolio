const tl = gsap.timeline({default: {ease: "power1.out"} });

tl.to(".cText", {y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", {y: "0%", duration: 1.5, delay: 0.5 });
tl.to(".coverPage", {y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".titleText", {y: "0%", duration: 1.5, delay: 2.0});

