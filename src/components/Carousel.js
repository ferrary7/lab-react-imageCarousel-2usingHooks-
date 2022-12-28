import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [displayImage, setdisplayImage] = useState(0)

    return(
        <div className="container">
            <div className="carousel" style={{ backgroundImage: `url(${images[displayImage].img})` }}>
                <div className="leftButton" onClick={() =>{
                    displayImage > 0 && setdisplayImage(displayImage - 1)
                }}>
                    <ArrowBackIosIcon />
                </div>
                <div className="text">
                    <h1>{images[displayImage].title}</h1>
                    <h2>{images[displayImage].subtitle}</h2>
                </div>
                <div className="rightButton" onClick={() =>{
                    displayImage < images.length - 1 && setdisplayImage(displayImage + 1) 
                }}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        </div>
    )
}

export default Carousel;