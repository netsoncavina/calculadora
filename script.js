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

getHistorico();
