import { useContext, useReducer } from "react"
import { PokemonContext } from "./PokemonContext"
import PokemonReducer, { initialState } from "./PokemonReducer"


const PokeProvider = ({children}) => {
    const [state,dispatch] = useReducer(PokemonReducer,initialState)
    return (
    <PokemonContext.Provider value= {[state,dispatch]}>
        {children}
    </PokemonContext.Provider>) 
}

export default PokeProvider;