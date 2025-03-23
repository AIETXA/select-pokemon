//selector que te permite elegir un Pokémon (Bulbasaur, Charmander o Squirtle) 

// Cuando selecciones un Pokémon y hagas clic en el botón "Obtener Información", 
// se tendrá que mostrar la información en pantalla del Pokémon, incluyendo su nombre, 
// imagen, tipo, altura y peso.

const pokemonSelect = document.getElementById('pokemon-select');
const botonInfo = document.getElementById('get-pokemon');
const imgPokemon = document.getElementById('img--pokemon');


function mostrarPokemon() {
fetch('https://pokeapi.co/api/v2/pokemon')
.then((response) => {
    if(!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }
    return response.json();
    })
.then(data => {
    pokemonSelect.innerHTML = ""
    data.forEach(pokemones => { 
        pokemonSelect.innerHTML +=
   
    `<div>
     <img src=${pokemones.image} alt=${pokemones.name}> 
     <h3>Name: ${pokemones.name}</h3> 
     <p>Specie: ${pokemones.species}</p>
     </div>`
   });   
})
.catch(error => console.error('Error:', error.message)) 
} 
mostrarPokemon();


botonInfo.addEventListener('click', () => {
    mostrarPokemon()
})





   
 
  

botonInfo.addEventListener('click', () => {
    mostrarPokemon()    
})