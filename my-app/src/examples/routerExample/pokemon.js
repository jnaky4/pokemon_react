import { useParams } from "react-router-dom";
import { getExamplePokemonArr } from "./pokemonData";

export default function Pokemon() {
    let params = useParams();
    let pokemon = getExamplePokemonArr(parseInt(params.pokemonId, 10));
    /* invoiceId comes from the URL Param in Index.js */
    return (
      <main style={{ padding: "1rem" }}>
        <h2>{pokemon.number}: {pokemon.name}</h2>
        <p>
          {pokemon.amount}
        </p>
        <p>Due Date: {pokemon.due}</p>
      </main>
    );
  }