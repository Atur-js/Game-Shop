import React from 'react';
import {Container} from 'react-bootstrap';
import image1 from "./image/14.jpg";
import "./rating.css";

const Gta = () => {
    return (
        <React.Fragment>
            <Container>
                <div class="row">
                    <div className="col-sm-6 mt-5">
                        <img alt="farcry"
                            style={
                                {
                                    height: "400px",
                                    margin: "0 auto",
                                    maxHeight: "400px",
                                    borderRadius: "10px"
                                }
                            }
                            src={image1}
                            class="d-block w-100"/>
                    </div>

                    <div className="col-sm-6 col-xl-6 mt-5 d-block w-100">
                        <div id="full-stars-example"
                            style={
                                {textAlign: "center"}
                        }>
                            <div class="rating-group">
                                <input class="rating__input rating__input--none" name="rating" id="rating-none" value="0" type="radio"/>
                                <label aria-label="No rating" class="rating__label" for="rating-none">
                                    <i class="rating__icon rating__icon--none fa fa-ban"></i>
                                </label>
                                <label aria-label="1 star" class="rating__label" for="rating-1">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-1" value="1" type="radio"/>
                                <label aria-label="2 stars" class="rating__label" for="rating-2">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-2" value="2" type="radio"/>
                                <label aria-label="3 stars" class="rating__label" for="rating-3">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-3" value="3" type="radio" checked/>
                                <label aria-label="4 stars" class="rating__label" for="rating-4">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-4" value="4" type="radio"/>
                                <label aria-label="5 stars" class="rating__label" for="rating-5">
                                    <i class="rating__icon rating__icon--star fa fa-star"></i>
                                </label>
                                <input class="rating__input" name="rating" id="rating-5" value="5" type="radio"/>
                            </div>
                            <div class="card text-center"
                                style={
                                    {
                                        backgroundColor: "#7243d8",
                                        color: "black",
                                        borderRadius: "10px",
                                        marginTop: "10%"
                                    }
                            }>
                                <div class="card-body">
                                    <h1 class="card-title">Grand Theft Auto: San Andreas</h1>
                                    <h4 class="card-text">Price: $10</h4>

                                </div>
                            </div>
                            <div className="d-block w-100"
                                style={
                                    {
                                        display: "inline-block",
                                        marginTop: "30px"
                                    }
                            }>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>action</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>Adventure</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>Single Player</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>First Person</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>FPS/TPS</button>


                            </div>
                        </div>

                    </div>
                </div>


                <div class="d-block w-100"
                    style={
                        {
                            width: "60%",
                            backgroundColor: "#4618AC",
                            color: "black",
                            borderRadius: "10px",
                            marginTop: "30px"
                        }
                }>
                    <div class="card-body">
                        <h2 class="card-title"
                            style={
                                {
                                    color: "yellow",
                                    display: "inline-block"
                                }
                        }>Product description</h2>
                        <p class="card-text"
                            style={
                                {color: "whitesmoke"}
                        }>
                            <div class="Wz6WhX">
                                <h5>Grand Theft Auto: San Andreas</h5>
                                <div itemprop="description">
                                    <p>Grand Theft Auto: San Andreas is a cult-classic action game by Rockstar Games that takes place in the infamous state of San Andreas!</p>

                                    <p>You are Carl Johnson, a former gang member, returning to the city of Los Santos to avenge his mothers murder and bring back the power in the streets for yourself and your family! However, a story packed with murder and corruption sees you extend far out of your range through the whole state of San Andreas as you seek revenge!</p>
                                </div>
                            </div>
                        </p>

                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Gta;
