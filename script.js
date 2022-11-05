const entrada = document.querySelector("#entrada");
const saida = document.querySelector("#saida");
const botao = document.getElementsByName("botao");

for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function () {
    entrada.value += botao[i].innerHTML;
  });
}

function limpa() {
  entrada.value = "";
  saida.value = "";
}

function substituiX() {
  return entrada.value.replace(/X/g, "*");
}

function calcula() {
  saida.value = eval(substituiX());
}
