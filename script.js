const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultContainer = document.getElementById("result-container");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const pokemonImg = document.getElementById("pokemon-img");
const weightElement = document.getElementById("weight");
const heightElement = document.getElementById("height");
const typesElement = document.getElementById("types");
const hpElement = document.getElementById("hp");
const attackElement = document.getElementById("attack");
const defenseElement = document.getElementById("defense");
const specialAttackElement = document.getElementById("special-attack");
const specialDefenseElement = document.getElementById("special-defense");
const speedElement = document.getElementById("speed");

const pokemonDatas = 'https://pokeapi-proxy.freecodecamp.rocks/api/pokemon';
let resultPokemon = {};
let result = [];
let nameOrId = '122';

const fetchData = async () => {
    try {
        const res = await fetch(`${pokemonDatas}/${nameOrId}`);
        const data = await res.json();
        console.log(data);
        showPokemon(data);
    } catch (error) {
        console.log(error);
        resultContainer.innerText = "Invalid Pokemon or someting wrong! Try again!"
    }
};

fetchData();

const showPokemon = (data) => {
    const { name, id, weight, height, types, sprites, stats } = data;
    const hp = stats[0].base_stat;
    const attack = stats[1].base_stat;
    const defense = stats[2].base_stat;
    const specAttack = stats[3].base_stat;
    const specDefense = stats[4].base_stat;
    const speed = stats[5].base_stat;
    const typeResult = types.map(item => {
        return `${item.type.name}`;
    }).join(', ').toUpperCase();

    pokemonName.textContent = `${name}`;
    pokemonId.textContent = `#${id}`;
    pokemonImg.innerHTML = `
        <img src="${sprites.front_default}" alt="pokemon" id="pokemon-img" />
    `;
    weightElement.textContent = `Weight: ${weight}`;
    heightElement.textContent = `Height: ${height}`;
    typesElement.textContent = `Types: ${typeResult}`;
    attackElement.textContent = `Attack: ${attack}`;
    defenseElement.textContent = `Defense: ${defense}`;
    specialAttackElement.textContent = `Special Attack: ${specAttack}`;
    specialDefenseElement.textContent = `Special Defense: ${specDefense}`;
    speedElement.textContent = `Speed: ${speed}`;
};

