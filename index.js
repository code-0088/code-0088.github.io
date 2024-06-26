document.addEventListener('DOMContentLoaded', function() {
  const typewriterText = document.getElementById('typewriter-text');
  const text = "I am a developer...";
  let index = 0;

  function type() {
    if (index < text.length) {
      typewriterText.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Velocidad de tipeo
    } else {
      setTimeout(() => {
        index = 0;
        typewriterText.textContent = '';
        setTimeout(type, 1000); // Pausa antes de reiniciar
      }, 2000); // Pausa después de completar el texto
    }
  }

  type();
});
let data = [
  { id: 1, nombre: "Lugar A", latitud: 40.7128, longitud: -74.0060 },
  { id: 2, nombre: "Lugar B", latitud: 34.0522, longitud: -118.2437 },
  { id: 3, nombre: "Lugar C", latitud: 51.5074, longitud: -0.1278 }
];

// Función para obtener todos los lugares
function getAllPlaces() {
  return data;
}

// Función para obtener un lugar por su ID
function getPlaceById(id) {
  return data.find(place => place.id === id);
}
