/* =========================================
   SONU PHOTOSTATE & MOBILE ACCESSORIES
   MAIN JAVASCRIPT
========================================= */

/* =========================================
   MOBILE NAVBAR
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("show")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });


    /* Close mobile menu after clicking a link */

    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach((item) => {

        item.addEventListener("click", () => {

            navLinks.classList.remove("show");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

}


/* =========================================
   STICKY NAVBAR SCROLL EFFECT
========================================= */
    const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}

/* =========================================
   HOME HERO SLIDER
========================================= */

const heroSlides = document.querySelectorAll(".hero-slide");
const sliderDots = document.querySelectorAll(".slider-dots .dot");

let currentSlide = 0;
let slideTimer;


function showSlide(index) {

    if (!heroSlides.length) {
        return;
    }


    heroSlides.forEach((slide) => {

        slide.classList.remove("active");

    });


    sliderDots.forEach((dot) => {

        dot.classList.remove("active");

    });


    heroSlides[index].classList.add("active");

    if (sliderDots[index]) {

        sliderDots[index].classList.add("active");

    }


    currentSlide = index;
}


/* ---------- NEXT SLIDE ---------- */

function nextSlide() {

    let nextIndex =
        (currentSlide + 1) % heroSlides.length;

    showSlide(nextIndex);

}


/* ---------- AUTO SLIDER ---------- */

function startSlider() {

    if (heroSlides.length > 1) {

        slideTimer = setInterval(
            nextSlide,
            5000
        );

    }

}


/* ---------- DOT CLICK ---------- */

sliderDots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);


        clearInterval(slideTimer);

        startSlider();

    });

});


/* ---------- START ---------- */

showSlide(0);

startSlider();