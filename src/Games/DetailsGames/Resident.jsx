import React from 'react';
import {Container} from 'react-bootstrap';
import image1 from "./image/4.jpg";
import "./rating.css";

const Resident = () => {
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
                                    <h1 class="card-title">Resident Evil Village</h1>
                                    <h4 class="card-text">Price: $25.36</h4>

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
                                }>Third-Person</button>
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
                            <h5 style={
                                {marginTop: "5px"}
                            }>Resident Evil Village</h5>
                            The nightmares of your past come back to haunt you! Once again become Ethan Winters, the protagonist
                                                                                                                  of the critically-acclaimed Resident Evil 7: Biohazard, and step into a mysterious village full of
                                                                                                                                                                                                                              terrors from the deepest pits of hell. This newest main instalment in Capcom’s famous Resident Evil
                                                                                                                                                                                                                         franchise will make you squeal in terror as you navigate the twisting passages of the castle and
                                                                                                                                                                                                                                         the surrounding village armed with nothing but your trusty weapon. Years after the events of RE7:
                                                                                                                                                                                                                              Biohazard, Ethan and his wife Mia try to live a calm & peaceful life but tragedy strikes as their
                                                                                                                                                                                                                                          daughter is suddenly taken from them. Desperate for answers, Ethan follows every lead and clue
                                                                                                                                                                                                                                  into a village shrouded in darkness, ruled by a sinister woman and her daughters. Buy Resident
                                                                                                                                                                                                                                    Evil Village Steam key, immerse yourself into survival horror madness and unravel the secrets
                                                                                                                                                                                                                                         of the supernatural!<br/>
                            <h5 style={
                                {marginTop: "10px"}
                            }>Resident Evil Village features</h5>
                            Many dangers lurk in the Village,
                                                                                                                                            both human and supernatural.Stay alert as you creep around each hall and corner,
                                                                                                                                            and remember, in this game - every bullet counts !• First - person immersion.Every fight for survival, every chase through tight corridors happens via first - person perspective - even with a gun, you have to get close and personal to eliminate the foe that hunts you;• A new nightmare.The enigmatic village is home to many new types of foes,from small & agile to hulking & destructive - you have to adapt to each one if you want to successfully eliminate them;• A village come to life.It’s more than just a backdrop that houses various sinister characters - to escape the terror,you have to uncover all the secrets hidden within;• Cheap Resident Evil Village price.
                            <br/><h5 style={

                                {marginTop: "10px"}
                            }>Dive back into the horror</h5>
                            Several years have passed in the Resident Evil Village game since the events of RE7 : Biohazard.Life seems good and quiet for Ethan Winters and his wife Mia, who have settled in a completely new location with their baby daughter.This idyll is quickly shattered one night with the arrival of the fan - beloved Bioterrorism Security Assessment Alliance agent Chris Redfield.The hero of the past instalments seemingly harbours sinister motives as he takes away Ethan’s daughter for reasons only known to him.Bewildered and heartbroken, Ethan does the next logical thing - he follows Chris into a remote village resting in the shadow of an ancient castle.Buy Resident Evil Village key, enter the halls of the castle and meet the enigmatic lady Alcina Dimistrescu, the vampire antagonist of the game !

                            <br/><h5 style={
                                {marginTop: "10px"}
                            }>Well-known gameplay mechanics</h5>
                            Capcom took some of the features of their other well - loved Resident Evil titles and improved them for the best survival horror experience !Enemies are plentiful both in the castle and outside its ancient walls and, luckily, you won’t have to face them empty handed.Ethan can wield various weapons, from pistols to shotguns, and even items against hostile foes - the trick is choosing which one you should keep on you since inventory space is limited.To balance the outcome of gruesome encounters and up your survival rates, the ability to craft first aid medication and ammo has been added as well !As for the game itself, once you buy Resident Evil Village Steam key, get ready for a plethora of puzzles that you have to solve while being chased by supernatural monstrosities !
                        </p>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Resident;
