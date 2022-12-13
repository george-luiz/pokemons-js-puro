
const url = new URLSearchParams(window.location.search);
const nameUrl = url.get("name");
const nome = document.getElementById("nome-pokemon");
const imagem = document.getElementById("imagem");
const especie = document.getElementById("especie");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const habilidade = document.getElementById("habilidade");

fetch(`https://pokeapi.co/api/v2/pokemon/${nameUrl}`)
    .then((resposta) => resposta.json())
    .then((dados) => colocandoDados(dados));

function colocandoDados(dados) {
    nome.innerHTML = dados.name;
    imagem.setAttribute("src", `${dados.sprites.other.dream_world.front_default}`);
    especie.innerHTML = dados.species.name;
    altura.innerHTML = dados.height;
    peso.innerHTML = dados.weight;
    
    dados.abilities.map((skil) => {
        return habilidade.innerHTML += `${skil.ability.name}, `;
    });
}


