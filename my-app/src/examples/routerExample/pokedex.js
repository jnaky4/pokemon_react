// import { 
  //   Link, 
  //   NavLink, 
  //   Outlet, 
  //   useSearchParams, 
  // } from "react-router-dom";
  // import { getAllExamplePokemonArr as getExamplePokedexArr } from "./pokemonData";
  
  // export default function Pokedex() {
  //   let pokedex = getExamplePokedexArr();
  //   let [searchParams, setSearchParams] = useSearchParams();
  
  //   return (
  //     <div style={{ display: "flex" }}>
  //       <nav
  //         style={{
  //           borderRight: "solid 1px",
  //           padding: "1rem",
  //         }}
  //       >
  //         <input
  //           value={searchParams.get("filter") || ""}
  //           onChange={(event) => {
  //             let filter = event.target.value;
  //             if (filter) {
  //               setSearchParams({ filter });
  //             } else {
  //               setSearchParams({});
  //             }
  //           }}
  //         />
  //         {pokedex           
  //         .filter((pokemon) => {
  //           let filter = searchParams.get("filter");
  //           if (!filter) return true;
  //           let name = pokemon.name.toLowerCase();
  //           return name.startsWith(filter.toLowerCase());
  //           })
  //         .map((pokemon) => (
  //           <NavLink
  //             style={({ isActive }) => {
  //               return {
  //                 display: "block",
  //                 margin: "1rem 0",
  //                 color: isActive ? "red" : "",
  //               };
  //             }}
  //             to={`/pokedex/${pokemon.number}`}
  //             key={pokemon.number}
  //           >
  //             {pokemon.name}
  //           </NavLink>
  //         ))}
  //       </nav>
  //       <Outlet />
  //     </div>
  //   );
  // }