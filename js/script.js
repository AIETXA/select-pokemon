//selector que te permite elegir un Pokémon (Bulbasaur, Charmander o Squirtle) 

// Cuando selecciones un Pokémon y hagas clic en el botón "Obtener Información", 
// se tendrá que mostrar la información en pantalla del Pokémon, incluyendo su nombre, 
// imagen, tipo, altura y peso.

const pokemonSelect = document.getElementById('pokemon-select');
const botonInfo = document.getElementById('get-pokemon');
const imgPokemon = document.getElementById('img--pokemon');

botonInfo.addEventListener('click', async () => {
    const contenedor =document.querySelector('container');
    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
    const pokesIds = [1, 4, 7];
    console.log(contenedor); })
try {
    const promesas = pokesIds.map(id =>
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    );
const resp = await Promise.all(promesas);
const pokemons = await Promise.all(resp.map(response => response.json()));

pokemons.forEach(pokemon => {
    const pokemonDiv= document.createElement('div'); 
    pokemonDiv.className = 'pokemon';
    pokemonDiv.innerHTML = `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
    ID: ${pokemon.id}
    Altura: ${pokemon.height} decímetros
    Peso: ${pokemon.weight} hectogramos
    ${pokemon.name}
    `;
    contenedor.appendChild(pokemonDiv);
});
} catch (error) { 
    console.error('Problema con la peticion:', error); 
}
