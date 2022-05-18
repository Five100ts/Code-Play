// Obtem o modal
var modalDica = document.getElementById("myModalDica");

// Pega o botão que abre o modal
var btn = document.getElementById("myBtnDica");

// Obtem o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abra o modal 
btn.onclick = function() {
  modalDica.style.display = "block";
}

// Quando o usuário clicar em <span> (x), feche o modal
span.onclick = function() {
  modalDica.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, feche-o
window.onclick = function(eventDica) {
  if (eventDica.target == modalDica) {
    modalDica.style.display = "none";
  }
}