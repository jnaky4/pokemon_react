// import * as React from "react";
// import {
//   Routes,
//   Route,
//   Outlet,
//   Link,
//   useLocation,
//   useNavigate,
//   useParams,
// } from "react-router-dom";
// // import { Dialog } from "@reach/dialog";
// // import "@reach/dialog/styles.css";
// import { IMAGES, getImageById } from "../../images/images";
// function loadImages(){

import grabImagePaths from "./images"
// import bulb from "./../../images/Pokemon/001Bulbasaur.png"
import { useEffect, useState } from "react"


export default function Modal() {
  const cwd = window.location.href
  const pokemonImagesRoute = "./../../images/Pokemon"
  const [images, setImages] = useState([])

  async function renderImage(imagePath) {
    return await import(imagePath)
  }
  useEffect(() => {
    const getImages = async () => {
      setImages(await Promise.all(grabImagePaths(pokemonImagesRoute).map(imagePath =>
        renderImage(imagePath)
      )))
    }
    if (!images.length) {
      getImages()
    }
  })

  return (
    <div>
      {cwd}
      {/* {images.map((img, index) => (
        <div>
          <img key={index} src={img} alt={img} />
        </div>
      ))} */}

      {/* {images(pokemonImagesRoute).map(imagePath => 
          renderImage(imagePath)
        )} */}
      {/* <img src={require("./../../images/Pokemon/001Bulbasaur.png")}></img> */}
    </div>
  )
}