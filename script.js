const entrada = document.querySelector("#entrada");
const saida = document.querySelector("#saida");
const botao = document.getElementsByName("botao");

for (let i = 0; i < botao.length; i++) {
  botao[i].addEventListener("click", function () {
    if (botao[i].innerHTML === "+/-") {
      mudaSinais();
      // }
    } else {
      entrada.value += botao[i].innerHTML;
    }
    calcula();
  });
}

function limpa() {
  entrada.value = "";
  saida.value = "";
}

function substituiX() {
  return entrada.value.replace(/x/g, "*");
}

function calcula() {
  saida.value = eval(substituiX());
}

function mudaSinais() {
  let array = Array.from(entrada.value);
  for (let i = 0; i < array.length; i++) {
    if (i !== 0 && array[i] === "-") {
      array[i] = "+";
    } else if (i !== 0 && array[i] === "+") {
      array[i] = "-";
    }
  }
  array = array.join("");
  entrada.value = array;
}
