import colocaDados from "./home.js";

export default function buscaDados(url = "https://pokeapi.co/api/v2/pokemon/", limit = 0) {
  fetch(`${url}?limit=12&offset=${limit}`)
    .then((resposta) => resposta.json())
    .then((dados) => colocaDados(dados));
}