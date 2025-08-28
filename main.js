document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('edadForm');
    const input = document.getElementById('edadInput');
    const mensaje = document.getElementById('mensajeEdad');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const edad = parseInt(input.value, 10);

        if (isNaN(edad)) {
            mensaje.textContent = 'Por favor, ingresa una edad válida.';
            mensaje.style.color = 'red';
        } else if (edad < 18) {
            mensaje.textContent = 'Usted es menor.';
            mensaje.style.color = 'red';
        } else if (edad >= 18 && edad < 60) {
            mensaje.textContent = '¡Puedes entrar!';
            mensaje.style.color = 'green';
        } else if (edad >= 60) {
            mensaje.textContent = 'Eres de la tercera edad.';
            mensaje.style.color = 'blue';
        }
    });

    // Contacto form
    const contactoForm = document.getElementById('formContacto');
    const mensajeContacto = document.getElementById('mensajeContacto');

    if (contactoForm) {
        contactoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            mensajeContacto.textContent = 'Datos ingresados correctamente';
            mensajeContacto.style.color = 'green';
        });
    }
});