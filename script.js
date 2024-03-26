

// Asigură-te că script-urile jQuery și Slick Carousel sunt încărcate înainte de acest script

// Așteaptă ca documentul să fie complet încărcat
document.addEventListener("DOMContentLoaded", function () {
    // Inițializează slider-ul
    $('.testimonials-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Intervalul de timp între slide-uri în milisecunde
        arrows: false, // Ascunde săgețile de navigare (poți adăuga propriile săgeți sau navigare)
    });
});
