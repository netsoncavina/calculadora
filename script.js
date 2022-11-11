const entrada = document.querySelector("#entrada");
const saida = document.querySelector("#saida");
const botao = document.getElementsByName("botao");
const userName = document.getElementById("userName");

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

async function getHistorico() {
  const response = await fetch("http://localhost:3000/calculos", {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  const data = await response.json();
  return data;
}

function mostrarHistorico() {
  let historico = document.getElementById("historico");
  getHistorico().then((data) => {
    historico.innerHTML = `
    <table>
      <tr>
        <th>Entrada</th>
        <th>Saida</th>
        <th>Autor</th>
        <th>Data</th>
      </tr>
      ${data
        .map(
          (item) => `
      <tr>
        <td>${item.conta}</td>
        <td>${item.resultado}</td>
        <td>${item.autor}</td>
        <td>${item.data_criacao
          .substring(0, 10)
          .split("-")
          .reverse()
          .join("/")}</td>
      </tr>
    `
        )
        .join("")}
    </table>
    `;
  });
}

// function toggleHistorico() {
//   let historico = document.getElementById("historico");
//   let btnHistorico = document.getElementById("button-historico");
//   mostrarHistorico();
//   if (historico.style.display === "none") {
//     historico.style.display = "block";
//     btnHistorico.innerHTML = "Esconder historico de cálculos";
//   } else {
//     historico.style.display = "none";
//     btnHistorico.innerHTML = "Mostrar historico de cálculos";
//   }
// }

function postCalculo() {
  const data_criacao =
    new Date().getUTCFullYear() +
    "-" +
    (new Date().getUTCMonth() + 1) +
    "-" +
    new Date().getUTCDate();
  fetch("http://localhost:3000/calculos", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      conta: entrada.value,
      resultado: saida.value,
      autor: userName.value,
      data_criacao: data_criacao,
    }),
  });
}

function validaPost() {
  if (userName.value === "") {
    alert("Digite seu nome");
  } else if (entrada.value === "") {
    alert("Digite uma conta");
  } else {
    postCalculo();
    mostrarHistorico();
    entrada.value = saida.value;
    saida.value = "";
  }
}

// getHistorico();
