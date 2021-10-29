import React from 'react';
import {Container} from 'react-bootstrap';
import image1 from "./image/3.jpg";
import "./rating.css";

const Fifa = () => {
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
                                    <h1 class="card-title">Fifa</h1>
                                    <h4 class="card-text">Price: $49.79</h4>

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
                                }>Sport</button>
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
                                }>Multiplayer</button>
                                <button style={
                                    {
                                        backgroundColor: "#6633d4",
                                        borderRadius: "5px",
                                        maxWidth: "auto",
                                        border: "none",
                                        color: "white",
                                        marginRight: "3px"
                                    }
                                }>Third-person</button>


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
                            }>FIFA 22 (PC) Origin Key</h5>
                            Experience the next level of immersion with the new FIFA game! FIFA 22 release date marks the 2nd 
                                            of October, and Electronic Arts promises lots of new content and innovations for enthusiasts of this
                                             long-running sports simulation series. Every mode has been tweaked to provide better performance, 
                                             fundamental gameplay changes have been made to make everything more realistic, and an impressive 
                                             roster of over 17,000 players and 700+ teams is ready to strive for victory in the field. Test your
                                              skills in one of the 30 of the world’s biggest competitions, go toe to toe against other players
                                               online or build a successful career in the football world with the FIFA 22 Origin key!
                            <br/>
                            <h5 style={
                                {marginTop: "10px"}
                            }>FIFA 22 features</h5>
                            The FIFA 22 game is bound to captivate both the veterans of the franchise and newcomers alike. It shouldn’t be a surprise, since the FIFA 22 key includes these gameplay mechanics:
                            <br/>
                            • Career mode. From the underdogs to world champions, lose yourself in the overhauled Player Career mode where you will create your own club, train, participate in tournaments and strive for the ultimate success;<br/>
                            • Volta mode. Experience a whole new side to football when participating in street matches - express your flair and style around playgrounds all over the world;<br/>
                            • Ultimate Team. Now featuring even more customization options, test your skills and progress against other players in the redesigned Division Rivals and FUT Champions modes;<br/>
                            • Pro Clubs. You are in control of your team’s growth - develop your Virtual Pro and participate in the new season of Pro Clubs easier thanks to streamlined social play;<br/>
                            • Cheap FIFA 22 price.<br/><h5 style={
                                {marginTop: "10px"}
                            }>Experience next-gen simulation</h5>
                            With each new FIFA game, Electronic Arts proves their extra care for accuracy and 
                                                detail - FIFA 22 key is no different. Besides including an expansive roster of football players, you also get to strive for first place in some of the world’s biggest competitions,
                                                including the UEFA Champions League, CONMEBOL Libertadores, the brand new UEFA Europa Conference League, and more. There’s also a surprise for those itching to start participating 
                                                in FIFA Ultimate Team - FUT Heroes introduces some of football’s fan-favourites. Feeling nostalgic yet? Grab a FIFA 22 PC key and experience it all yourself!
                            <br/><h5 style={
                                {marginTop: "10px"}
                            }>New features</h5>
                            The FIFA 22 Origin key includes a couple of noteworthy innovations to make it all that much more realistic. 
                                                Thanks to the goalkeeper overhaul, this last line of defence is more reliable when it comes to shot-stopping
                                                 and smarter decision-making. In addition, goalie programming now replicates the different styles of real-life
                                                  keepers throughout the whole match. Next comes true ball physics, which include speed, air drag, swerve,
                                                   resistance, friction, and lots of other nuances that make ball handling more immersive. Besides these, explosive 
                                                   sprint gives you more control over acceleration when defending or dribbling, and new attacking tactics lets you
                                                    assign different styles for different teammates.
                        </p>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Fifa;
