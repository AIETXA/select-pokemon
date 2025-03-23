//selector que te permite elegir un Pokémon (Bulbasaur, Charmander o Squirtle) 

// Cuando selecciones un Pokémon y hagas clic en el botón "Obtener Información", 
// se tendrá que mostrar la información en pantalla del Pokémon, incluyendo su nombre, 
// imagen, tipo, altura y peso.

const pokemonSelect = `document.getElementById('pokemon-select').value`;
const botonInfo = document.getElementById('get-pokemon');



function mostrarCategoriaPoke() {
fetch('https://pokeapi.co')
.then((response) => {
    if(!response.ok) {
        throw new Error(`Error: ${response.status}`)
    }
    return response.json();
    
})

.then(data => {
    pokemonSelect.innerHTML = data.value;
})
console.log(data);
}
    

   
   /* data.value.forEach(poke => {
   
            `<div>
             <img src=${poke.image} alt=${personaje.name}> 
             <h3>Name: ${poke.name}</h3> 
             <p>Specie: ${poke.species}</p>
             </div>`
           });   

})
.catch(error => console.error('Error:', error.message))
}

mostrarCategoriaPoke()    

botonInfo.addEventListener('click', () => {
    mostrarCategoriaPoke()    
})
*/