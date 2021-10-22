// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Search input
    $('.fa-search').click(function() {
        $('.search-input').toggle(500);
    }),
    // Dropdown button
    $('.mobile-dropbtn').click(function() {
        $('.mobile-content').slideToggle(500)
    })
})

// JavaScript
// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 51) {
        document.querySelector('.header').style.opacity = 0.85;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});

// Slideshow
function slideshow() {
    let slideIndex = 0;
    showSlides();
    function showSlides() {
    let i;
    const slides = document.querySelectorAll('.mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 1500); // Change image every 1.5 seconds
    }
};
slideshow();