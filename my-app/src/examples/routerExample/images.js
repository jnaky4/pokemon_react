export default function grabImagePaths(route){
    const directory = require.context(route, false, /\.(png|jpe?g|svg)$/)
    // const directory = require.context("../../images/Pokemon", false, /\.(png|jpe?g|svg)$/)
    let images = [];
    directory.keys().map((item, index) => 
    images.push(item.replace("./", route+"/"))
    );
    return images;
  }