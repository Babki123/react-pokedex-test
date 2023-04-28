import { useContext } from "react";
import { fetchPokeData } from "../../Data/PokeFunction";
import { PokemonContext } from "../../Data/PokemonContext";


const BtnAddTeam = ({pokemon,id}) => {

    const [state,dispatch] = useContext(PokemonContext);
    function addPokemon( ){
        if( !state.isTeamFull){
            fetchPokeData(pokemon.url)
            .then(data => dispatch({type :'UPDATE_TEAM',payload:{...data,id : id}}))
        }else{
            dispatch({type:'SWITCH_ERROR'})
            setTimeout(()=> {
                dispatch({type:'SWITCH_ERROR'})
            }, 3000)
        }
    }

    return(
        <button className ="addButton pokemonButton" onClick={ () => {addPokemon()}}>Ajout</button> 
    )
}

export default BtnAddTeam;