import React from "react";


const Pokedex = (props) => {//props es un objeto
    const { pokemons } = props
    return (

<div className="pokedex__pokemon-content" id="pokemonContent" onclick="exitModal()">

            {pokemons.map((pokemon,idx) => {
                return(
                    <div className="pokemon" >

                    
                    <div className="img-container">
                        <img src={pokemon.sprites.front_default} alt="imagen de pokemon"/> 
                    </div>
                    <div className="info">
                        <span className="number" key={pokemon.name}>#{idx+1}</span>
                        <h3 className="name">{pokemon.name}</h3>
                        <small className="type">Weight: <span>{pokemon.weight}</span></small>
                        <br></br>
                        <small className="type">abilities: <span>{pokemon.name}</span></small>

                    </div>
    
                
                </div>
                )
            })}
</div>
        

    )
}

export default Pokedex