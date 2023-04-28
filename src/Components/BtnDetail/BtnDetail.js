import { useContext } from "react";
import { PokemonContext } from "../../Data/PokemonContext";


const BtnDetail = ({id}) => {
    const [state,dispatch] = useContext(PokemonContext);
    return (
        <button className="detailButton pokemonButton" onClick={()=>{ dispatch({type:'UPDATE_ID',payload : id })}}>Détail</button>
    )

}

export default BtnDetail;