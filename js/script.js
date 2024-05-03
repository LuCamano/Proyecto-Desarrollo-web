function cambiarValor(idInput, incremento) {
    const input = document.getElementById(idInput);
    const valorActual = parseInt(input.value);
    const nuevoValor = Math.max(valorActual + incremento, 0);
    input.value = nuevoValor;
}

(() => {
    'use strict'
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

function validarCorreo(){
    const correo = document.getElementById('correo');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(correo.value)){
        document.getElementById('correo').classList.remove('is-invalid');
        document.getElementById('correo').classList.add('is-valid');
    } else {
        document.getElementById('correo').classList.remove('is-valid');
        document.getElementById('correo').classList.add('is-invalid');
    }
}