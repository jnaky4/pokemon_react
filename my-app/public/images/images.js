let IMAGES = {
    1: {
      id: 1,
      title: "Bulbasaur",
      src: `./Pokemon/${('000'+this.id).slice(-3)}${this.title}.png`,
    },
    2: {
      id: 2,
      title: "Ivysaur",
      src: `./Pokemon/${('000'+this.id).slice(-3)}${this.title}.png`,
    },
    3: {
      id: 3,
      title: "Venusaur",
      src: `./Pokemon/${('000'+this.id).slice(-3)}${this.title}.png`,
    },
    4: {
      id: 4,
      title: "Charmander",
      src: `./Pokemon/${('000'+this.id).slice(-3)}${this.title}.png`,
    },
};
  
  function getImageById(id) {
    return IMAGES[id]
  }
  
  export { IMAGES, getImageById };