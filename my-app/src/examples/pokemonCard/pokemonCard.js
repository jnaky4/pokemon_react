import './pokemonCard.scss';
import './typeColor.scss';
import { useEffect, useState } from 'react';


const PokemonCard = ({ pokemon, handleFilter, handleSort, handleClickImage }) => {
    const images = require.context('../../../public/images', true);
    const type2Exists = pokemon.type2 !== 'None';

    const chooseDeletePng = () => {
        let type = pokemon.type1.toLowerCase()
        return type === 'fire' || type === 'fighting' ?
            <img className="delete-icon" alt="delete" src='images/delete-black.png' onClick={() => handleSort("dexnum", pokemon.type1)}></img> :
            <img className="delete-icon" alt="delete" src='images/delete.png' onClick={() => handleSort("dexnum", pokemon.type1)}></img>
    }
    const chooseImage = (pokemon) => {
        const dexNum = pokemon.dexnum.toString();
        const imgSrc = `images/Pokemon/${dexNum.padStart(3, "0")}${pokemon.name}.png`;
        return <img className="img" src={imgSrc} alt={pokemon.name} loading="lazy" onClick={() => handleClickImage(pokemon)} />
    }
    const chooseTypeIcon = (type) => {
        // return <img className="type_icon_resistances" alt="Rst" src={`${process.env.PUBLIC_URL}/images/Type_Icons/${type}.png`} />
        return <img className="type_icon_resistances" alt="Rst" src={`images/Type_Icons/${type}.png`} onClick={() => handleSort("type", type)} />
    }
    return (
        <div className={`cards ${pokemon.type1}`} id={pokemon.dexnum}>
            {chooseDeletePng()}
            <div className="card_header">
                <p className="name" onClick={() => handleSort("name", pokemon.name)}>{pokemon.name}</p>
                <p className="hp" onClick={() => handleSort("hp", pokemon.hp)}>{pokemon.hp} HP</p>
            </div>
            <div className="stage_wrapper">
                <div className="stage_arrow_up"></div>
                <div className="stage">{pokemon.stage}</div>
                <div className="stage_arrow_down"></div>
            </div>
            <div className="image_wrapper">
                {chooseImage(pokemon)}
                <img className="holo" alt="holo" src="images/Holo.png" />
            </div>
            <div className="tag_wrapper">
                <div className="arrow-up"></div>
                <p className="tag">{pokemon.category} Pokémon.
                    <span onClick={() => handleSort("height", pokemon.height)}> Length: {pokemon.height}m</span>,
                    <span onClick={() => handleSort("weight", pokemon.weight)}> Weight: {pokemon.weight}kg</span>.
                </p>
                <div className="arrow-down"></div>
            </div >
            <table className="table_stats">
                <thead>
                    <tr>
                        <th>Atk</th>
                        <th>S-Atk</th>
                        <th>Def</th>
                        <th>S-Def</th>
                        <th>Spd</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='stat' onClick={() => handleSort("atk", pokemon.atk)}>{pokemon.atk}</td>
                        <td className='stat' onClick={() => handleSort("satk", pokemon.satk)}>{pokemon.satk}</td>
                        <td className='stat' onClick={() => handleSort("def", pokemon.def)}>{pokemon.def}</td>
                        <td className='stat' onClick={() => handleSort("sdef", pokemon.sdef)}>{pokemon.sdef}</td>
                        <td className='stat' onClick={() => handleSort("spd", pokemon.spd)}>{pokemon.spd}</td>
                    </tr>
                </tbody>
            </table>
            <div className="description">{pokemon.description}</div>
            <table className="table_type">
                <thead>
                    <tr>
                        <th>Imm</th>
                        <th>S-Rst</th>
                        <th>Rst</th>
                        <th>Weak</th>
                        <th>S-Weak</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="type_icon_table_wrapper">
                                {Object(pokemon.imm).map((type) => chooseTypeIcon(type))}
                                {/* <img className="type_icon_resistances" alt="S-Rst" src={GrassIcon} /> */}
                            </div>
                        </td>
                        <td>
                            <div className="type_icon_table_wrapper">
                                {Object(pokemon.sresist).map((type) => chooseTypeIcon(type))}
                                {/* <img className="type_icon_resistances" alt="S-Rst" src={GrassIcon} /> */}
                            </div>
                        </td>
                        <td>
                            <div className="type_icon_table_wrapper">
                                {Object(pokemon.resist).map((type) => chooseTypeIcon(type))}
                            </div>
                        </td>
                        <td>
                            <div className="type_icon_table_wrapper">
                                {Object(pokemon.weak).map((type) => chooseTypeIcon(type))}
                            </div>
                        </td>
                        <td>
                            <div className="type_icon_table_wrapper">
                                {Object(pokemon.sweak).map((type) => chooseTypeIcon(type))}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="bottom_row_wrapper">
                <div className="illustrator">Illus. Ken Sugimori</div>
                <div className="restorer">Restorer. Fleckaben</div>
                <div className="creation">@1995-2000 Nintendo, Creatures, GAMEFREAK.</div>
                <div className="icon_wrapper">
                    <img className="type_icon" alt="Type1" src={`images/Type_Icons/${pokemon.type1}.png`} onClick={() => handleSort("type", pokemon.type1)} />
                    {type2Exists ? <img className="type_icon2" alt="Type2" src={`images/Type_Icons/${pokemon.type2}.png`} onClick={() => handleSort("type", pokemon.type2)} /> : ""}
                </div>
            </div>
        </div >
    )
}
export default PokemonCard