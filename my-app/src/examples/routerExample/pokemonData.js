let examplePokemonArr = [
    {
      name: "Bulbasaur",
      number: 1,
      amount: "$10,800",
      due: "12/05/1995",
      dexnum: 1,
      type1:'Grass',
      type2:'Poison',
      evolve_level:16,
      gender_ratio:'1:07',
      height:0.700000,
      weight:6.900000, 
      category:'Seed',
      lvl_speed:1.000000, 
      base_exp:64, 
      catch_rate:45,
      description:'A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.', 
      Type: {
        0.0: [], 
        0.25: ['Grass'], 
        0.5: ['Water', 'Electric', 'Fighting'], 
        1.0: ['Poison', 'Ground', 'Rock', 'Ghost', 'Dragon', 'Normal'], 
        2.0: ['Fire', 'Ice', 'Flying', 'Psychic'], 
        4.0: ['Bug']
      }, 
      Stats: {
        dexnum:1, 
        hp:45, 
        attack:49, 
        defense:49,
        special_attack:65, 
        special_defense:65, 
        speed:45
      },
    },
    {
      name: "Ivysaur",
      number: 2,
      amount: "$8,000",
      due: "10/31/2000",
    },
    {
      name: "Venusaur",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "Charmander",
      number: 4,
      amount: "$14,000",
      due: "09/01/1997",
    },
    {
      name: "Charmeleon",
      number: 5,
      amount: "$4,600",
      due: "01/27/1998",
    },
    {
        name: "Charizard",
        number: 6,
        amount: "$4,600",
        due: "01/27/1998",
    },
  ];

  let examplePokemonDict = {
    1: {
        name: "Bulbasaur",
        number: 1,
        amount: "$10,800",
        due: "12/05/1995",
    },
    2: {
        name: "Ivysaur",
        number: 2,
        amount: "$8,000",
        due: "10/31/2000",
    },
    3: {
        name: "Venusaur",
        number: 3,
        amount: "$9,500",
        due: "07/22/2003",
    },
    4: {
        name: "Charmander",
        number: 4,
        amount: "$14,000",
        due: "09/01/1997",
    },
    5: {
        name: "Charmeleon",
        number: 5,
        amount: "$4,600",
        due: "01/27/1998",
    },
    6: {
        name: "Charizard",
        number: 6,
        amount: "$4,600",
        due: "01/27/1998",
    }
  }
  
  export function getAllExamplePokemonArr() {
    return examplePokemonArr;
  }
  export function getExamplePokemonArr(number) {
    return examplePokemonArr.find(
      (examplePokemon) => examplePokemon.number === number
    );
  }
  export function getAllExamplePokemonDict(){
    return examplePokemonDict
  }
  export function getAExamplePokemonDict(number){
    return examplePokemonDict[number]
  }

