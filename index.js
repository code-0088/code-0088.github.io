document.addEventListener('DOMContentLoaded', function() {
  const typewriterText = document.getElementById('typewriter-text');
  const text = "I´am developer...";
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Velocidad más rápida
    } else {
      setTimeout(() => {
        index = 0;
        typewriterText.textContent = '';
        setTimeout(type, 4000); // Pausa antes de reiniciar
      }, 2000); // Pausa después de completar el texto
    }
  }

  type();
});