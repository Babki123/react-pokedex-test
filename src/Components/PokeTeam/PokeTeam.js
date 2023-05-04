import React, { useContext, useEffect } from "react"
import { PokemonContext } from "../../Data/PokemonContext"
import { fetchPokeData } from "../../Data/PokeFunction"
import PokeTeamElem from "../PokeTeamElem/PokeTeamElem";
import "./PokeTeam.scss";

const PokeTeam = () => {
    const [state,dispatch] = useContext(PokemonContext);

    useEffect(() => { 
        if(state.pokemonTeam.length > 0){

        }
    })
console.log(state.pokemonTeam)
    return (
        <React.Fragment>
        <div className="boxElem">
            <h1> Mon Equipe </h1>
        <ul className=" teamList">
        
            { state.pokemonTeam.map((pokemon,i)=>{   
                return  <PokeTeamElem key={i} pokemon={pokemon}/>
            })} 
        </ul>
        </div>

        </React.Fragment> 
    )

}

export default PokeTeam;