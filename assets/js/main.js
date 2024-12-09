jQuery(document).ready(function($){
    // Etiquetas
    const contador_box = $('#countdown');
    const contador_day = $('#days');
    const contador_hrs = $('#hours');
    const contador_min = $('#minutes');
    const contador_seg = $('#seconds');


    // Fecha objetivo (año, mes - 1, día, horas, minutos, segundos)
    const targetDate = new Date(2025, 10, 5, 0, 0, 0); // 31 de diciembre de 2024, 23:59:59

    function updateCountdown() {
        const now = new Date(); // Fecha actual
        const diff = targetDate - now; // Diferencia en milisegundos

        if (diff <= 0) {
            // Si el tiempo se ha acabado
            contador_box.html('<p class="right__title">¡son diez años!</p>');
            clearInterval(interval); // Detener el intervalo
            return;
        }

        // Calcular días, horas, minutos y segundos restantes
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // Actualizar los elementos en el DOM
        contador_day.text(days.toString().padStart(2, '0'));
        contador_hrs.text(hours.toString().padStart(2, '0'));
        contador_min.text(minutes.toString().padStart(2, '0'));
        contador_seg.text(seconds.toString().padStart(2, '0'));
    }

    // Actualizar cada segundo
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Ejecutar la función inmediatamente al cargar
});