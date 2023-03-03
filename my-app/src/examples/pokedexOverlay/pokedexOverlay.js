import { useEffect, useState } from "react";
import "./pokedexOverlay.scss"

const PokedexOverlay = ({ pokemon, handleClickImage }) => {
    const images = require.context('../../../public/images', true);
    const [overlayPokemon, setOverlayPokemon] = useState(pokemon)


    const chooseImage = (pokemon) => {
        const dexNum = pokemon.dexnum.toString();
        const imgSrc = `images/Pokemon/${dexNum.padStart(3, "0")}${pokemon.name}.png`;
        return <img className="overlay__pokemon__image" src={imgSrc} alt={pokemon.name} loading="lazy" onClick={() => handleClickImage(pokemon)} />
    }

    // useEffect(() => {

    // }, [overlayPokemon])
    console.log("inside overlay", overlayPokemon)
    return (
        <div className="overlay">
            <img className="overlay__pokedex" src="images/Pokedex.png" alt="pokedex"></img>
            {/* <div className="overlay__container">
                <div className="overlay__pokedex__tray"> */}
            {/* <div>{overlayPokemon?.name}</div>
                {chooseImage(pokemon)} */}
            {/* <div className="overlay__map__border"> */}
            {/* <div className="overlay__map__container"> */}
            <img className="overlay__map__image" src="images/kantoMap.png" onClick={() => handleClickImage(pokemon)} loading="lazy" alt='kanto map' />
            {/* </div> */}
            {/* </div>
                </div> */}
            {/* </div> */}

        </div>
    )

}
export default PokedexOverlay;