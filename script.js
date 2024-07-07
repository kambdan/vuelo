// Mostrar el diálogo al cargar la página
window.onload = function() {
    document.getElementById('dialog').style.display = 'block';

    // Añadir el manejador de eventos al botón 'Empezar viaje'
    document.getElementById('start-trip').addEventListener('click', function() {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.latam.xp&hl=es_EC';
    });
};

// Función para cerrar el diálogo
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
}
