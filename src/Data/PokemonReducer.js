export const initialState = {
    pokemons: [],
    pokemonToDetails : null,
    pokemonTeam : [],
    isTeamFull : false,
    detailPokemonId : -1,
    displayError : false
    
}

function PokemonReducer(state,action) {
    let tempPokemonTeam = []
   
    switch(action.type){
        case "SWITCH_ERROR":
            return {...state, displayError : !state.displayError}
        case 'UPDATE_TEAM':
            if( !state.isTeamFull ){
                tempPokemonTeam = [...state.pokemonTeam];
                tempPokemonTeam.push({...action.payload,addOrder : tempPokemonTeam.length }) 
                if( tempPokemonTeam.length >= 6){
                    return {...state,pokemonTeam : tempPokemonTeam,isTeamFull : true}
                } else{
                    return {...state,pokemonTeam : tempPokemonTeam,isTeamFull :false,error:"Team is Full"}
                }
            }return state;
        case 'DELETE_POKEMON':
            tempPokemonTeam = [...state.pokemonTeam];
            tempPokemonTeam =tempPokemonTeam.filter(elem => elem.addOrder !== action.payload)
        
            if( tempPokemonTeam.length >= 6){
                return {...state,pokemonTeam : tempPokemonTeam,isTeamFull : true}
            } else{
                
                return {...state,pokemonTeam : tempPokemonTeam,isTeamFull :false}
            }
        case 'UPDATE_ID':
            return{
                ...state,
                detailPokemonId : action.payload
            }
        case 'SHOW_DETAIL':
            console.log(action.payload);
            return{...state,
                    pokemonToDetails : action.payload}
        case 'SET_POKEMON':
            return {...state,
                        pokemons : action.payload};
        default:
            return state;
    }

}

export default PokemonReducer;