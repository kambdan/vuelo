window.onload = function() {
    document.getElementById('dialog').style.display = 'block';

    document.getElementById('start-trip').addEventListener('click', function() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.latam.xp&hl=es_EC';
    });
};

function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}

let slideIndex = 0;
const items = document.querySelectorAll('.carousel-item');
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n >= items.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = items.length - 1;
    }
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = 'none';
    }
    items[slideIndex].style.display = 'block';
}
