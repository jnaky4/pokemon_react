import { useState } from 'react';
import './App.scss';
import HelloWorld from './examples/A_HelloWorld';
import ButtonCounter from './examples/B_ButtonCounter';
import ButtonCounterWithProps from './examples/C_ButtonCounterWithProp';
import StarMatch from './examples/StarMatch';
import { Outlet, Link } from "react-router-dom";
import Navbar from './navbar/navbar';
import PokemonCard from './examples/pokemonCard/pokemonCard';
import pokemonDict from "./examples/pokemonCard/pokemonData";
import PokedexOverlay from "./examples/pokedexOverlay/pokedexOverlay";

function App() {
  const [pokemonArr, setPokemonArr] = useState(Object.values(pokemonDict))
  const [sortNameReversed, setSortNameReversed] = useState(false)
  const [sortAtkByMaxFirst, setsortAtkByMaxFirst] = useState(true)
  const [sortHPByHighestFirst, setSortHPByHighestFirst] = useState(true)
  const [displayOverlay, setDisplayOverlay] = useState(false)
  const [overlayPokemon, setOverlayPokemon] = useState()
  const images = require.context('../public/images', true);

  const handleSort = (sortBy, match) => {
    switch (sortBy) {
      case "type":
        let temp = [...pokemonArr].filter(pokemon => pokemon.type1 !== match && pokemon.type2 !== match).sort((a, b) => a.dexnum < b.dexnum ? -1 : 1)
        let temp2 = [...pokemonArr].filter(pokemon => pokemon.type1 === match || pokemon.type2 === match).sort((a, b) => a.dexnum < b.dexnum ? -1 : 1)
        temp2 = temp2.concat(temp)
        setPokemonArr(temp2)
        // setPokemonArr([...pokemonArr].filter(pokemon => pokemon.type1 === match || pokemon.type2 === match).sort((a, b) => a.dexnum < b.dexnum ? -1 : 1))
        break;
      case "dexnum":
        setPokemonArr([...pokemonArr].sort((a, b) => a.dexnum < b.dexnum ? -1 : 1))
        break;
      case "hp":
        sortHPByHighestFirst ?
          setPokemonArr([...pokemonArr].sort((a, b) => a.hp > b.hp ? -1 : 1))
          :
          setPokemonArr([...pokemonArr].sort((a, b) => a.hp < b.hp ? -1 : 1))
        setSortHPByHighestFirst(!sortHPByHighestFirst)
        // setPokemonArr([...pokemonArr].sort((a, b) => a.hp > b.hp ? -1 : 1))
        break;
      case "atk":
        sortAtkByMaxFirst ?
          setPokemonArr([...pokemonArr].sort((a, b) => a.atk > b.atk ? -1 : 1))
          :
          setPokemonArr([...pokemonArr].sort((a, b) => a.atk < b.atk ? -1 : 1))
        setsortAtkByMaxFirst(!sortAtkByMaxFirst)
        // setPokemonArr([...pokemonArr].sort((a, b) => a.atk > b.atk ? -1 : 1))
        break;
      case "satk":
        setPokemonArr([...Object.values(pokemonDict)].sort((a, b) => a.satk > b.satk ? -1 : 1))
        break;
      case "def":
        setPokemonArr([...pokemonArr].sort((a, b) => a.def > b.def ? -1 : 1))
        break;
      case "sdef":
        setPokemonArr([...pokemonArr].sort((a, b) => a.sdef > b.sdef ? -1 : 1))
        break;
      case "spd":
        setPokemonArr([...pokemonArr].sort((a, b) => a.spd > b.spd ? -1 : 1))
        break;
      case "weight":
        setPokemonArr([...pokemonArr].sort((a, b) => a.weight > b.weight ? -1 : 1))
        break;
      case "height":
        setPokemonArr([...pokemonArr].sort((a, b) => a.height > b.height ? -1 : 1))
        break;
      case "name":
        sortNameReversed ?
          setPokemonArr([...pokemonArr].sort((a, b) => a.name > b.name ? -1 : 1))
          :
          setPokemonArr([...pokemonArr].sort((a, b) => a.name < b.name ? -1 : 1))

        setSortNameReversed(!sortNameReversed)
        break;
      default:
        break;
    }
  }
  const handleFilter = (filterBy, match) => {
    // setPokemonArr(Object.values(pokemonDict))
    switch (filterBy) {
      case "type":
        setPokemonArr([...pokemonArr].filter(pokemon => pokemon.type1 === match || pokemon.type2 === match))
        break;
      case "imm":
        setPokemonArr([...pokemonArr].filter(pokemon => pokemon.imm.includes(match)))
        break;
      case "sresist":
        setPokemonArr([...pokemonArr].filter(pokemon => pokemon.sresist.includes(match)))
        break;
      case "resist":
        setPokemonArr([...pokemonArr].filter(pokemon => pokemon.resist.includes(match)))
        break;
      case "weak":
        setPokemonArr([...pokemonArr].filter(pokemon => pokemon.weak.includes(match)))
        break;
      case "sweak":
        setPokemonArr([...pokemonArr].filter(pokemon => pokemon.sweak.includes(match)))
        break;
      default:
        break;
    }
  }
  const handleClickImage = (pokemon) => {
    // console.log(displayOverlay)
    setDisplayOverlay(!displayOverlay)
    // console.log(displayOverlay)
    setOverlayPokemon(pokemon)
  }

  return (
    <>
      {displayOverlay ? <PokedexOverlay src={"images/kantoMap.png"} loading="lazy" handleClickImage={handleClickImage} pokemon={overlayPokemon} /> : <div />}
      <Outlet />{/* giving <App/> an outlet allows Route children to render in index.js */}
      {/* <button onClick={() => handleSort("type", "Ground")}>sort!</button>
      <button onClick={() => handleFilter("imm", "Ground")}>filter!</button> */}
      {pokemonArr.map((pokemon) => <PokemonCard id={pokemon.dexnum} key={pokemon.dexnum} handleFilter={handleFilter} handleSort={handleSort} pokemon={pokemon} handleClickImage={handleClickImage} />)}
    </>
  );
}


export default App;
