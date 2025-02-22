// Función para validar el formulario
function validarFormulario(event) {
    // Obtenemos los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const descripcion = document.getElementById('descripcion').value;
    const sexo = document.querySelector('input[name="sexo"]:checked');
    
    // Validación de campos obligatorios
    if (!nombre || !apellidos || !correo || !sexo) {
        alert('Por favor, complete todos los campos obligatorios.');
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    // Validación del correo electrónico
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!correoRegex.test(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    // Validación de la edad (opcional, si es mayor que 0)
    if (edad && edad <= 0) {
        alert('Por favor, ingrese una edad válida.');
        event.preventDefault();
        return false;
    }

    // Validación de la descripción (opcional, pero asegurando que no esté vacía)
    if (!descripcion) {
        alert('Por favor, cuéntanos tu experiencia.');
        event.preventDefault(); // Evita el envío del formulario
        return false;
    }

    // Si todo está correcto, se puede enviar el formulario
    return true;
}
