document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Reproductor de Radio ---
    const radioStream = document.getElementById('radio-stream');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playPauseIcon = playPauseBtn.querySelector('.material-icons');

    // **URL de Streaming para Radio IPUC (Ejemplo de prueba)
    // Usamos una URL que parece ser de una transmisión en vivo para esta emisora.
    const streamUrl = "https://play14.tikast.com:22038/stream"; 
    radioStream.src = streamUrl;

    playPauseBtn.addEventListener('click', () => {
        if (radioStream.paused) {
            // Intentar reproducir
            radioStream.play()
                .then(() => {
                    playPauseIcon.textContent = 'pause'; // Cambiar a ícono de pausa
                    console.log("Radio reproduciéndose...");
                })
                .catch(error => {
                    console.error("Error al intentar reproducir la radio:", error);
                    // Mensaje para el usuario si falla la reproducción
                    alert("No se pudo iniciar la reproducción. La URL del streaming puede haber cambiado.");
                });
        } else {
            // Pausar
            radioStream.pause();
            playPauseIcon.textContent = 'play_arrow'; // Cambiar a ícono de play
            console.log("Radio pausada.");
        }
    });


    // --- Lógica del Menú Lateral ---
    const menuToggle = document.getElementById('menu-toggle');
    const menuLateral = document.getElementById('menu-lateral');

    menuToggle.addEventListener('click', () => {
        // Alternar la clase 'open' para mostrar/ocultar el menú
        menuLateral.classList.toggle('open');
        
        // Cambiar el ícono de la hamburguesa (menu / close)
        const menuIcon = menuToggle.querySelector('.material-icons');
        if (menuLateral.classList.contains('open')) {
            menuIcon.textContent = 'close';
        } else {
            menuIcon.textContent = 'menu';
        }
    });
    
    // Opcional: Cerrar el menú si se hace clic fuera de él (útil para la UX móvil)
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuLateral.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && menuLateral.classList.contains('open')) {
            menuLateral.classList.remove('open');
            menuToggle.querySelector('.material-icons').textContent = 'menu';
        }
    });
});
