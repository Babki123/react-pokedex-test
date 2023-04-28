import { useContext } from "react"
import { PokemonContext } from "../../Data/PokemonContext"
import { fetchPokeData } from "../../Data/PokeFunction"
import "./PokElem.scss";
import BtnDetail from "../BtnDetail/BtnDetail";
import BtnAddTeam from "../BtnAddTeam/BtnAddTeam";


const Pokelem = ({id,pokemon})=> {
    const [state,dispatch] = useContext(PokemonContext)

        var pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return (

         <li key={id} className="pokemonElem"><p className="pokemonName">{pokemonName} </p>
         <BtnDetail id={id}/>
         <BtnAddTeam pokemon={pokemon} id={id}/>
        </li> 

         
    )
}

export default Pokelem