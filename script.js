document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');
    const closeButton = document.querySelector('.close-btn');

    // Mostrar la primera diapositiva al cargar
    showSlides(slideIndex);

    // Botón para navegar hacia atrás en el carrusel
    document.querySelector('.prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    // Botón para navegar hacia adelante en el carrusel
    document.querySelector('.next').addEventListener('click', function() {
        moveSlide(1);
    });

    // Botón de "Empezar" para redirección
    document.getElementById('start-trip').addEventListener('click', function() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.latam.xp&hl=es_EC';
    });

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        if (n >= slides.length) slideIndex = 0;
        if (n < 0) slideIndex = slides.length - 1;

        // Ocultar todas las diapositivas
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        // Mostrar la diapositiva actual
        slides[slideIndex].style.display = 'block';

        // Mostrar el botón "Cerrar" solo en la segunda imagen (índice 1)
        closeButton.style.display = (slideIndex === 1) ? 'block' : 'none';
    }
});

// Función para cerrar el diálogo
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}
