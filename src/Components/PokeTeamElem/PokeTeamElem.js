import React, { useContext } from "react"
import { PokemonContext } from "../../Data/PokemonContext"
import "./PokeTeamElem.scss";
import BtnDetail from "../BtnDetail/BtnDetail";

const PokeTeamElem =  ({key,pokemon}) => {
    const [state,dispatch] = useContext(PokemonContext);
    

    return (
        <React.Fragment>
            
            <li key = {key} className="teamElem">
            <h3 className="pkmnName">
            {pokemon.name}
            </h3>
            <img className="pkmnImg" src={pokemon.sprites.front_default} />
            <div className="btnPkmn">
            <button className="pokemonButton" onClick={() => {dispatch({type:'DELETE_POKEMON',payload: pokemon.addOrder} )}}>Remove  </button> 
            <BtnDetail id={pokemon.id}  />
            </div>
            
             </li>
        </React.Fragment>
       
    )
    
}
export default PokeTeamElem;