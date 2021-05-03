const tl = gsap.timeline({default: {ease: "power1.out"} });

tl.to(".cText", {y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", {y: "0%", duration: 1.5, delay: 0.5 });
tl.to(".coverPage", {y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo(".titleText", {opacity: 0}, {opacity: 1, duration: 0.5});

const navButton = () => {
    const naviBtn = document.querySelector('.resButton');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    naviBtn.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.6}s `;
            }
        });
    });

    
}

navButton();

var swiper = new swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifer: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    }
});