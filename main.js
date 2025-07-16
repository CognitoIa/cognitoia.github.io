document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Opcional: para animar el ícono de hamburguesa
        });

        // Cerrar menú al hacer clic en un enlace (útil en móviles)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }

    // Opcional: Añadir un efecto de scroll suave a los enlaces de anclaje
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Funcionalidad para el botón de suscripción del newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    const newsletterSubmitBtn = document.getElementById('newsletterSubmit');

    if (newsletterForm && newsletterSubmitBtn) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Previene el envío real del formulario

            // Simula una acción de suscripción
            console.log('Correo electrónico enviado para suscripción.');

            // Cambiar texto y estilo del botón
            newsletterSubmitBtn.textContent = '¡Suscrito! ✓';
            newsletterSubmitBtn.classList.add('subscribed');
            newsletterSubmitBtn.disabled = true; // Deshabilita el botón

            // Opcional: Restablecer el botón después de un tiempo (ej. 3 segundos)
            setTimeout(() => {
                newsletterSubmitBtn.textContent = 'Suscribirse';
                newsletterSubmitBtn.classList.remove('subscribed');
                newsletterSubmitBtn.disabled = false;
                newsletterForm.reset(); // Limpia el campo de email
            }, 3000);
        });
    }
});