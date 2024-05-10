function cambiarValor(idInput, incremento) {
    const input = document.getElementById(idInput);
    const valorActual = parseInt(input.value);
    const nuevoValor = Math.max(valorActual + incremento, 0);
    input.value = nuevoValor;
}
(() => {
    "use strict";
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");
  // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
    form.addEventListener(
        "submit",
        (event) => {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add("was-validated");
        },
        false
    );
    });
})();

$('.validar-rut').focus(function (e) { 
  this.addEventListener("input", function () {
//function checkRut(rut) {
  var rut = this;
  // Despejar Puntos
  var valor = rut.value.replace(".", "");
  // Despejar Guión
  valor = valor.replace("-", "");

  // Aislar Cuerpo y Dígito Verificador
  cuerpo = valor.slice(0, -1);
  dv = valor.slice(-1).toUpperCase();

  // Formatear RUN
  rut.value = cuerpo + "-" + dv;

  // Si no cumple con el mínimo ej. (n.nnn.nnn)
  if (cuerpo.length < 7) {
    rut.setCustomValidity("RUT Incompleto");
    return false;
  }

  // Calcular Dígito Verificador
  suma = 0;
  multiplo = 2;

  // Para cada dígito del Cuerpo
  for (i = 1; i <= cuerpo.length; i++) {
    // Obtener su Producto con el Múltiplo Correspondiente
    index = multiplo * valor.charAt(cuerpo.length - i);

    // Sumar al Contador General
    suma = suma + index;

    // Consolidar Múltiplo dentro del rango [2,7]
    if (multiplo < 7) {
      multiplo = multiplo + 1;
    } else {
      multiplo = 2;
    }
  }

  // Calcular Dígito Verificador en base al Módulo 11
  dvEsperado = 11 - (suma % 11);

  // Casos Especiales (0 y K)
  dv = dv == "K" ? 10 : dv;
  dv = dv == 0 ? 11 : dv;

  // Validar que el Cuerpo coincide con su Dígito Verificador
  if (dvEsperado != dv) {
    rut.setCustomValidity("RUT Inválido");
    return false;
  }

  // Si todo sale bien, eliminar errores (decretar que es válido)
  rut.setCustomValidity("");
});});

$(".editar-estado").click(function () {
    const botonId = $(this).attr("id");
    const ultimoCaracter = botonId.charAt(botonId.length - 1);
    const elementoId = "estado" + ultimoCaracter;
    $("#" + elementoId).prop("disabled", false);
});

$(".selector-estado").change(function () {
    $(this).prop("disabled", true);
});

$(".completar").click(function () {
    const botonId = $(this).attr("id");
    const ultimoCaracter = botonId.charAt(botonId.length - 1);
    const elementoId = "estado" + ultimoCaracter;
    const botonEditarId = "editar" + ultimoCaracter;
    if(confirm("¿Está seguro de que desea completar la tarea?")){
        $("#" + elementoId).val('3');
        $("#" + elementoId).prop("disabled", true);
        $(this).remove();
        $("#" + botonEditarId).remove();
    }
});

$(".bloquear-usuario").click(function () {
    const botonId = $(this).attr("id");
    const ultimoCaracter = botonId.charAt(botonId.length - 1);
    const elementoId = "desbloquear" + ultimoCaracter;
    if(confirm("¿Está seguro de que desea bloquear al usuario?")){
        $(this).toggleClass("d-none");
        $("#" + elementoId).toggleClass("d-none");
    }
});

$(".desbloquear-usuario").click(function () {
    const botonId = $(this).attr("id");
    const ultimoCaracter = botonId.charAt(botonId.length - 1);
    const elementoId = "bloquear" + ultimoCaracter;
    if(confirm("¿Está seguro de que desea desbloquear al usuario?")){
        $(this).toggleClass("d-none");
        $("#" + elementoId).toggleClass("d-none");
    }
});

$(".entrada-numeros").keypress(function (e) { 
    if(e.which < 48 || e.which > 57){
        e.preventDefault();
    }
});

$(".abrir-login").on("click", function () {
  $("#btnIniciarSesion").trigger("click");
});

$("#pass").focus(function (e) {
  this.addEventListener("input", function () {
    const pass = this;
    const passValue = pass.value;
    const passLength = passValue.length;
    
    if(passValue === ""){
      $("#clave-no-valida").text("Ingrese una contraseña");
    } else if(passLength < 8){
      pass.setCustomValidity("La contraseña debe tener al menos 8 caracteres");
      $("#clave-no-valida").text("La contraseña debe tener al menos 8 caracteres");
    } else if(!passValue.match(/[A-Z]/)){
      pass.setCustomValidity("La contraseña debe tener al menos una mayúscula");
      $("#clave-no-valida").text("La contraseña debe tener al menos una mayúscula");
    } else if(!passValue.match(/[a-z]/)){
      pass.setCustomValidity("La contraseña debe tener al menos una minúscula");
      $("#clave-no-valida").text("La contraseña debe tener al menos una minúscula");
    } else if(!passValue.match(/[0-9]/)){
      pass.setCustomValidity("La contraseña debe tener al menos un número");
      $("#clave-no-valida").text("La contraseña debe tener al menos un número");
    } else {
      pass.setCustomValidity("");
    }
  });
});

$("#Re-pass").focus(function (e) {
  this.addEventListener("input", function () {
    const pass = document.getElementById("pass");
    const rePass = this;
    const rePassValue = rePass.value;
    const passValue = pass.value;
    
    console.log(passValue);
    console.log(rePassValue);
    if(rePassValue !== passValue){
      rePass
      rePass.setCustomValidity("Las contraseñas no coinciden");
    } else {
      rePass.setCustomValidity("");
    }
  });
});

$("#editarPerfil").click(function () {
  $("#nombre").prop("disabled", false);
  $("#apellido").prop("disabled", false);
  $("#correo").prop("disabled", false);
  $("#telefono").prop("disabled", false);
  $("#pac-input").prop("disabled", false);
  $("#rut").prop("disabled", false);
  $("#editarPerfil").toggleClass("d-none");
  $("#guardarPerfil").toggleClass("d-none");
});
