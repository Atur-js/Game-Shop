import React from 'react';
import image1 from './../image/Back4blood-Exclu-db.jpg';
import image2 from './../image/SW-OLED-db.jpg';
import image3 from './../image/Xbox-ForzaController-db.jpg';
import image4 from './../image/cyberpunk.png';
import image5 from './../image/header2-playstation5.png';
import image6 from './../image/farcry6.png';
import "./Hero.css"

const Hero = () => {
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"
                        style={
                            {color: "yellow"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"
                        style={
                            {color: "yellow"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"
                        style={
                            {color: "yellow"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"
                        style={
                            {color: "yellow"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"
                        style={
                            {color: "yellow"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"
                        style={
                            {color: "yellow"}
                    }></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="6"
                        style={
                            {color: "yellow"}
                    }></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="./back4Blood"><img class="d-block w-100"
                                src={image1}
                                alt="Third slide"/></a>
                    </div>
                    <div class="carousel-item">
                        <a href="./category"><img class="d-block w-100"
                                src={image2}
                                alt="Third slide"/></a>
                    </div>
                    <div class="carousel-item">
                        <a href="./category"><img class="d-block w-100"
                                src={image3}
                                alt="Third slide"/></a>
                    </div>
                    <div class="carousel-item">
                        <a href="./cyberPunk">
                            <img class="d-block w-100"
                                src={image4}
                                alt="Third slide"/></a>

                    </div>
                    <div class="carousel-item">
                        <a href="./category"><img class="d-block w-100"
                                src={image5}
                                alt="Third slide"/></a>
                    </div>
                    <div class="carousel-item">
                        <a href="./farcry"><img class="d-block w-100"
                                src={image6}
                                alt="Third slide"/></a>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment>
    );
}

export default Hero;
