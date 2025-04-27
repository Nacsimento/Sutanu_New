const menu_open= document.querySelector(".menu_open");
const menu_close= document.querySelector(".menu_close");
const sideMenu = document.querySelector(".side_menu");



menu_open.addEventListener("click" , ()=>{
    menu_open.style.display="none";
    menu_close.style.display="block";
    sideMenu.classList.add("open");
})


menu_close.addEventListener("click" , ()=>{
    menu_open.style.display="block";
    menu_close.style.display="none";
    sideMenu.classList.remove("open");
})



document.addEventListener("mousemove", function (e) {
    const image = document.querySelector(".hover-image");
    const { clientX, clientY } = e;

    const moveX = (clientX / window.innerWidth - 0.5) * 20; 
    const moveY = (clientY / window.innerHeight - 0.5) * 20;

    image.style.transform = `translate(${moveX}px, ${moveY}px)`;
});



document.addEventListener("DOMContentLoaded", function () {
    const folios = document.querySelectorAll(".folio");

    function fadeInOnScroll() {
        folios.forEach((folio) => {
            const rect = folio.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                folio.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // Trigger on page load in case sections are already in view
});


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".folio, .gallery img");

    function fadeInOnScroll() {
        elements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});



document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".item");

    images.forEach((img) => {
        img.addEventListener("click", function () {
            if (img.classList.contains("fullscreen")) {
                img.classList.remove("fullscreen"); // Exit fullscreen
            } else {
                img.classList.add("fullscreen"); // Enter fullscreen
            }
        });
    });
});



const courseCards = document.querySelectorAll('.card');

courseCards.forEach(card => {
  card.addEventListener('click', function() {
    // Toggle the active class to show/hide details
    this.classList.toggle('active');
  });
});