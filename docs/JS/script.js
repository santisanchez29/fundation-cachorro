// Permitir sonido en el video al hacer interacción
const heroVideo = document.getElementById('heroVideo');
if (heroVideo) {
  document.addEventListener('click', () => {
    heroVideo.muted = false;
    heroVideo.play();
  });
};

// Nos ayuda a que el video que agregamos se le puede escuchar el audio que tenga //