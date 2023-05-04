import { useContext } from "react"
import { PokemonContext } from "../../Data/PokemonContext"
import Pokelem from "../PokElem/PokElem";
import './Pokedex.scss';

const Pokedex = () => {
  const [state,dispatch] = useContext(PokemonContext);
  return(
    <ul className="boxElem pokedex">
      <h1> Pokedex </h1>
      {state.pokemons.length >0 &&  state.pokemons.map((val,i) => <Pokelem  id={i} pokemon={val}  /> ) }
    </ul>

  )
}

export default Pokedex;