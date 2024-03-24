$(document).ready(function () {
    // Ascunde imaginile cu clasa hidden la început
    $('.image.hidden').hide();

    function toggleImages(button) {
        var galleryId = $(button).data('gallery');
        var gallery = $('#' + galleryId);

        // Selectăm toate imaginile din galerie
        var allImages = gallery.find('.image');

        // Verificăm dacă galeria este deja deschisă
        var isOpen = gallery.hasClass('open');

        // Verificăm dacă galeria este deschisă și conține imagini cu clasa hidden
        if (!isOpen) {
            // Deschide galeria și afișează toate imaginile ascunse
            gallery.addClass('open');
            allImages.filter('.hidden').slideDown();
        } else {
            // Închide galeria și ascunde imaginile care au clasa hidden
            gallery.removeClass('open');
            allImages.filter('.hidden').slideUp();
        }
    }

    // Adaugă evenimentul de click pe butonul "Vezi mai multe"
    $('.show-more-btn').on('click', function () {
        toggleImages(this);
    });
});

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
