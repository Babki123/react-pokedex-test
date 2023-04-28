import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer/Footer.js';
import Header from './Components/Header/Header.js'
import { useContext, useEffect } from 'react';
import { PokemonContext } from './Data/PokemonContext';
import Pokedex from './Components/Pokedex/Pokedex';
import { fetchPokeData } from './Data/PokeFunction';
import PokeDetail from './Components/PokeDetails/PokeDetails';
import PokeTeam from './Components/PokeTeam/PokeTeam';

const App = () => {

  const [state,dispatch] = useContext(PokemonContext);
 
  useEffect( () => {
    //Asynchronicite = incident de rendu sur le console.log
    // fetch('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
    // .then(response => response.json())
    // .then((data) => {
    //   let APIPokemon = data.results;
    //   dispatch({ type:'SET_POKEMON' , payload : data.results})
       
    //    }
    // )

   fetchPokeData('https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0')
                  .then(data =>dispatch({ type:'SET_POKEMON' , payload : data.results}));
    
    /* Resultat du call AP 
    [
      name : "nomPokemon",
      url :"https://LienFichePokemon"
    ]*/ 
  }, [])

  return (
    <div className="container" >
      <Header/>
      <Pokedex />
      <PokeDetail />
      <PokeTeam />
      <Footer/>
    </div>
  );
}

export default App;
