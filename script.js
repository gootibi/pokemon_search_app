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
let nameOrId = '';

const fetchData = async () => {
    nameOrId = (searchInput.value).toLowerCase();
    try {
        const res = await fetch(`${pokemonDatas}/${nameOrId}`);
        const data = await res.json();
        showPokemon(data);
    } catch (error) {
        console.log(error);
        alert("Pokémon not found");
    }
};

const showPokemon = (data) => {
    console.log(data);
    const { name, id, weight, height, types, sprites, stats } = data;
    const hp = stats[0].base_stat;
    const attack = stats[1].base_stat;
    const defense = stats[2].base_stat;
    const specAttack = stats[3].base_stat;
    const specDefense = stats[4].base_stat;
    const speed = stats[5].base_stat;

    typesElement.innerHTML = ``;
    types.map(item => {
        typesElement.innerHTML += `<span>${(item.type.name).toUpperCase()}</span>`;
    }).join('');
    pokemonName.textContent = `${name}`;
    pokemonId.textContent = `#${id}`;
    pokemonImg.innerHTML = `
        <img src="${sprites.front_default}" alt="pokemon" id="sprite" />
    `;
    weightElement.textContent = `${weight}`;
    heightElement.textContent = `${height}`;
    hpElement.textContent = `${hp}`;
    attackElement.textContent = ` ${attack}`;
    defenseElement.textContent = `${defense}`;
    specialAttackElement.textContent = `${specAttack}`;
    specialDefenseElement.textContent = `${specDefense}`;
    speedElement.textContent = `${speed}`;
};

searchButton.addEventListener('click', () => {
    fetchData();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        fetchData();
    }
});