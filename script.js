const textField = document.querySelector(".poke");
const searchButton = document.querySelector(".search");
const image = document.querySelector(".imageDisplay");
const pokemonName = document.getElementById("pokename");
const description = document.getElementById("desc");
const type1 = document.getElementById("type1");
const type2 = document.getElementById("type2");

const fetchPokemon = (num) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then((res) => res.json())
    .then((data) => {
      image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      pokemonName.innerHTML = data.name;
      description.innerHTML = data.flavor_text__entries[8].flavor_text;
      type1.innerHTML = data.types[0].type.name;
      type2.innerHTML = data.types[1].type.name;
    });
};

textField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchButton.click();
    }
  });
  searchButton.addEventListener("click", () => fetchPokemon(textField.value));