
/* aca va el endpoint para la busqueda del search de un solo pokemon */
export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        const data = await response.json()
        return data
        
    } catch (error) {
        
    }
}

/* aca pisa al endpoint para traer con un limite de pokemones pero solo trae name y url de api*/
export const getPokemons = async(limit=30, offset=0) => {

    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(url)
        const data = await response.json()
        return data
        
    } catch (error) {
        
    }
}
/* un endpoint nuevo porque quiero mas info de mi pokemon no solo name y url para esto hago esta nueva funcion esto lo utilizo en la linea 16 de app.js*/
export const getPokemonData = async (url) =>{
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        
    }
}