function cambiarValor(idInput, incremento) {
    const input = document.getElementById(idInput);
    const valorActual = parseInt(input.value);
    const nuevoValor = Math.max(valorActual + incremento, 0);
    input.value = nuevoValor;
}