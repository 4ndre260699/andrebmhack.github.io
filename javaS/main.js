const btnMood = document.querySelector('#mood');

btnMood.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnMood.classList.toggle('active');
});


// Función para establecer el modo (oscuro o light) en el localStorage
function setModePreference(mode) {
    localStorage.setItem('mode', mode);
}

// Función para obtener el modo (oscuro o light) del localStorage
function getModePreference() {
    return localStorage.getItem('mode');
}

// Función para aplicar el modo (oscuro o light) al cargar la página
function applyMode() {
    const mode = getModePreference();
    if (mode === 'light') {
        document.body.classList.add('light');
        document.querySelector('#mood').classList.add('active');
    } else {
        document.body.classList.remove('light');
        document.querySelector('#mood').classList.remove('active');
    }
}
// Función para recargar la página y mantener el modo actual
function reloadPage() {
    // Obtener el modo actual antes de recargar
    const currentMode = document.body.classList.contains('light') ? 'light' : 'dark';

    // Recargar la página
    location.reload();

    // Establecer el modo nuevamente después de recargar
    setModePreference(currentMode);
}

// Función para llevar al elemento con el id="hero" al hacer clic en el botón de logo y recargar la página
function scrollToHeroAndReload() {
    // Obtener el modo actual antes de recargar
    const currentMode = document.body.classList.contains('light') ? 'light' : 'dark';
  
    // Recargar la página
    location.reload();
  
    // Establecer el modo nuevamente después de recargar
    setModePreference(currentMode);
  
    // Llevar al elemento con id="hero"
    const heroElement = document.getElementById('hero');
    heroElement.scrollIntoView({ behavior: 'smooth' });
  }

// Funcion para mantener el modo actual

function reloadPage() {
    // Obtener el modo actual antes de recargar
    const currentMode = document.body.classList.contains('light') ? 'light' : 'dark';

    // Recargar la página
    location.reload();

    // Establecer el modo nuevamente después de recargar
    setModePreference(currentMode);
}
  
  // Agregar el evento click al botón de logo para que te lleve al elemento con id="hero" y recargar la página
  const logo = document.getElementById('logo');
  logo.addEventListener('click', scrollToHeroAndReload);