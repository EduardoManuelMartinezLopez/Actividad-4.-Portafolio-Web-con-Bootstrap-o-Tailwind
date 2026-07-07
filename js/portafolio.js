// Validar carga
console.log("Sistema cargado. Diseño inspirado en StartBootstrap Personal, desarrollado desde cero.");

// Añadir sombra a la barra de navegación al hacer scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow');
        navbar.classList.remove('shadow-sm');
    } else {
        navbar.classList.add('shadow-sm');
        navbar.classList.remove('shadow');
    }
});