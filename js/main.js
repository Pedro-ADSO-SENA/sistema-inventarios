// MODAL: ¿Olvidó su contraseña?
var myModal = document.getElementById("modal-olvido");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});

// MODAL: Registrar nuevo usuario
var myModal = document.getElementById("registrar-usuario");
var myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});



