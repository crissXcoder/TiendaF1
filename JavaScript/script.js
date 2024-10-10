// Agregar un listener para el evento de desplazamiento
window.addEventListener('scroll', function() {
    var header = document.querySelector('.main-header');
    // Si el usuario ha bajado más de 50px, aplica la clase 'scroll-active'
    if (window.scrollY > 50) {
        header.classList.add('scroll-active');
    } else {
        header.classList.remove('scroll-active');
    }
});

// Función para manejar el desplazamiento suave
function smoothScrollToSection(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
   
    if (targetElement) {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Agregar el evento a todos los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScrollToSection);
    });
});