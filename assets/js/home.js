import buscaDados from "./api.js";
const limit = 10;
let ofset = 0;
const container = document.getElementById("main-container");
const botao = document.getElementById("button");

buscaDados();

export default function colocaDados(dados) {
  return dados.results.forEach((element) => {
    return (container.innerHTML += `
        <a href="./pokemon.html?name=${element.name}" class="main-container__botao-redirecionamento">
            <div class="main-container__card">
                ${element.name}
            </div>
        </a>
    `);
  });
}

botao.addEventListener("click", () => {
  ofset += limit;
  const next = ofset + limit;

  buscaDados("https://pokeapi.co/api/v2/pokemon/", next);
});
