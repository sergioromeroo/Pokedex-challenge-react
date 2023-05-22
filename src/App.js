import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import SearchVar from './components/SearchVar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonData } from './api';

const { useState, useEffect } = React;//hooks useState utilizamos para actualizar y actualizar la vista que la renderize


function App() {

  const [pokemons, setPokemons] = useState([])

  const [page, setPage] = useState()
  const [total,setTotal] = useState()

  const [loading, setLoading] = useState(true)


  /* aca muestro toda la info de la card de pokemon convierto el resultado de pokemones en un array de promesas  */
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
    } catch (error) {

    }
  }
  useEffect(() => {//solo corre 1 vez cuando se carga la aplicacion
    fetchPokemons()
  }, [])




  return (
    <div>

      <Navbar />

      <div className="App">
        
        <SearchVar />
        {loading ? (
          <div class="d-flex justify-content-center">
            <div class="spinner-border text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <Pokedex pokemons={pokemons} />
        )}

      </div>

      


    </div>
  );
}

export default App;
