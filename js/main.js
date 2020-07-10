$(window).scroll(function() {
    var scrl = $(window).scrollTop();
    if (scrl < 60) {
        $('.header-1').removeClass('fixednav');
    } else {
        $('.header-1').addClass('fixednav');
    }
});

var slideIndex = 1;
showSlides(slideIndex);

function pushSlide(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function showSlides(slideIndex) {
    var slides = document.getElementsByClassName('slider');
    if (window.slideIndex > slides.length) {
        window.slideIndex = 1;
    }
    if (window.slideIndex < 1) {
        window.slideIndex = slides.length;
    }
    // console.log(window.slideIndex);
    var i = 0;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[window.slideIndex - 1].style.display = 'block';
}