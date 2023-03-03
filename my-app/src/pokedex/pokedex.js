// import "./camera.scss"
import "./pokedex.scss"

const Pokedex = () => {
    const yellowButtonClicked = () => {
        console.log("clicked me")
    }
    return (
        <div className="pokedex">
            <div className="pokedex_left">
                {/* <div className="back_left"></div> */}
                <div className="top_middle">
                    <div className="top_row">
                        <div className="blue_camera_container">
                            <button className="blue_camera" />
                        </div>

                        <div className="circle_light yellow" />
                        <div className="circle_light red" />
                        <div className="circle_light green" />

                        <div className="text">
                            <h1>Poke</h1>
                            <h1>dex</h1>
                            <h1><i className="fas fa-plus"></i></h1>
                        </div>
                    </div>

                    {/* <div className="main_display_inner_bezel">
                        <div className="main_display"></div>
                    </div> */}



                    {/* <div className="top_left"> */}
                    {/* <div className="body">
                            <div className="border"></div>
                            <div className="middle"></div>
                        </div> */}
                    {/* </div> */}
                    {/* <div className="plus_button">
                        <div className="inner">
                            <h1>
                                <i className="fas fa-plus"></i></h1>
                        </div>
                    </div> */}
                    {/* <div className="under_plus">
                        <div className="inner"></div>
                    </div> */}


                    {/* <div className="lens">
                        <div className="lens_1">
                            <div className="lens_2">
                                <div className="lens_3">
                                    <div className="lens_4">
                                        <div className="lens_5">
                                            <div className="lens_6">
                                                <div className="lens_7"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="under_lens">
                        <div className="inner"></div>
                    </div> */}
                    {/* <div className="rainbow"></div> */}
                    {/* <div className="top_right"> */}
                    {/* <div className="viewfinder">
                            <div className="inner_1">
                                <div className="inner_2">
                                    <div className="inner_3">
                                        <div className="hole"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadows_middle"></div>
                        <div className="shadows_left"></div>
                        <div className="shadows_left_corner"></div>
                        <div className="shadows_right"></div>
                        <div className="shadows_right_corner"></div> */}
                    {/* </div> */}
                    {/* <div className="middle_right">
                        <div className="middle">
                            <div className="circle"></div>
                        </div>
                        <p className="minus">
                            <i className="fas fa-minus"></i>
                        </p>
                        <p className="plus">
                            <i className="fas fa-plus"></i>
                        </p>
                    </div> */}
                    {/* <div className="text">
                        <h1>Poké</h1>
                        <h1>dex</h1>
                        <h1><i className="fas fa-plus"></i></h1>
                    </div> */}
                </div>
                {/* <div className="bottom">
                    <div className="top">
                        <div className="left"></div>
                        <div className="middle">
                            <div className="switch">
                                <div className="switch_btn"></div>
                            </div>
                        </div>
                        <div className="right"></div>
                    </div>
                </div>
                <div className="under_btm"></div>
                <div className="corners">
                    <div className="corner_left"></div>
                    <div className="corner_right"></div>
                </div> */}
            </div>
            {/* <div className="pokedex_right"> */}
            {/* <div className="back_right"></div> */}
            {/* <div className="top_middle"> */}
            {/* <div className="right_display"></div>
                    <div className="blue_button_grid">
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                        <button className="blue_button" ><div className="button_reflect" /></button>
                    </div>
                    <div className="yellow_button_container">
                        <button className="yellow_button" onClick={() => yellowButtonClicked()} />
                    </div> */}
            {/* </div> */}

            {/* </div> */}
        </div >
    )
}
export default Pokedex