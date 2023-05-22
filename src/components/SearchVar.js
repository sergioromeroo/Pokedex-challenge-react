import React from "react";
import { searchPokemon } from "../api";

const { useState } = React

const SearchVar = () => {

    const [search, setSearch] = useState("");//sirve para mostrar los cambios reflejados en el doom el useSTate actualiza los cambios en la vista
    const [pokemon, setPokemon] = useState();//quiero que me regresa la info que pongo cuando escribo quiero ese cambio de estado


    const onChange = (evento) => {
        setSearch(evento.target.value);
    }

    /* boton de buscar cuando lo aprete va a llamar a la funcioin searchpokemon que ahi aloje el api */
    const onClick = async (evento) => {
        const data = await searchPokemon(search)
        setPokemon(data);
    }


    return (

            <div class="pokedex-container">
                <div class="pokedex__header">
                    <div class="pokedex__header-title">
                        <h1>POKEDEX</h1>
                    </div>
                    <div class="pokedex__header-search">
                        <form action="" id="searchPokemon">
                            <input type="text" placeholder="buscar pokemones" onChange={onChange} id="pokemon"/>
                                <button onClick={onClick}>
                                    <img src="https://thumbs.dreamstime.com/b/bola-de-pokemon-74683385.jpg" alt="pokeball"/>
                                </button>

                        </form>
                    </div>


                </div>

            </div>


    )
}

export default SearchVar