import React from 'react'
import image1 from "./imageFirstPage/farcry6.jpeg";
import image2 from "./imageFirstPage/watchdogs.jpeg";
import image3 from "./imageFirstPage/Back4Blood.jpeg";
import image4 from "./imageFirstPage/deathloop.jpeg";
import image5 from "./imageFirstPage/cyberpunk.jpeg";
import image6 from "./imageFirstPage/modernwarfare.jpeg";


const TopGames = () => {
    return (
        <React.Fragment>
            <div class="py-5">
                <div class="container">
                    <div class="row">
                        <h2 style={
                            {
                                color: "#54e0ff",
                                textAlign: "center",
                                marginBottom: "30px"
                            }
                        }>Top Games</h2>
                        <div class="col-md-4">
                            <div class="card"
                                style={
                                    {backgroundColor: "#2160c4"}
                            }>
                                <a href="./farcry">
                                    <div class="card-block"
                                        style={
                                            {
                                                textAlign: "center",
                                                color: "white"
                                            }
                                    }>
                                        <img src={image1}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "400px"
                                                }
                                            }/>
                                        <h5 class="card-title"
                                            style={
                                                {
                                                    textAlign: "center",
                                                    color: "white",
                                                    marginTop: "10px"
                                                }
                                        }>Farcry6</h5>
                                        <h6>$50.49</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card"
                                style={
                                    {backgroundColor: "#2160c4"}
                            }>
                                <a href="./watchDogsLegion">
                                    <div class="card-block"
                                        style={
                                            {
                                                textAlign: "center",
                                                color: "white"
                                            }
                                    }>
                                        <img src={image2}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "400px"
                                                }
                                            }/>
                                        <h5 class="card-title"
                                            style={
                                                {
                                                    textAlign: "center",
                                                    color: "white",
                                                    marginTop: "10px"
                                                }
                                        }>Watch Dogs Legion</h5>
                                        <h6>$18.66</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card"
                                style={
                                    {backgroundColor: "#2160c4"}
                            }>
                                <a href="./back4Blood">
                                    <div class="card-block"
                                        style={
                                            {
                                                textAlign: "center",
                                                color: "white"
                                            }
                                    }>
                                        <img src={image3}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "400px"
                                                }
                                            }/>
                                        <h5 class="card-title"
                                            style={
                                                {
                                                    textAlign: "center",
                                                    color: "white",
                                                    marginTop: "10px"
                                                }
                                        }>Back 4 Blood</h5>
                                        <h6>$45.94</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div><br/>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card"
                                style={
                                    {backgroundColor: "#2160c4"}
                            }>
                                <a href="./deathLoop">
                                    <div class="card-block"
                                        style={
                                            {
                                                textAlign: "center",
                                                color: "white"
                                            }
                                    }>
                                        <img src={image4}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "400px"
                                                }
                                            }/>
                                        <h5 class="card-title"
                                            style={
                                                {
                                                    textAlign: "center",
                                                    color: "white",
                                                    marginTop: "10px"
                                                }
                                        }>DEATHLOOP</h5>
                                        <h6>$40.14</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card"
                                style={
                                    {backgroundColor: "#2160c4"}
                            }>
                                <a href="./cyberPunk">
                                    <div class="card-block"
                                        style={
                                            {
                                                textAlign: "center",
                                                color: "white"
                                            }
                                    }>
                                        <img src={image5}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "400px"
                                                }
                                            }/>
                                        <h5 class="card-title"
                                            style={
                                                {
                                                    textAlign: "center",
                                                    color: "white",
                                                    marginTop: "10px"
                                                }
                                        }>Cyberpunk</h5>
                                        <h6>$20</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card"
                                style={
                                    {backgroundColor: "#2160c4"}
                            }>
                                <a href="./warzone">
                                    <div class="card-block"
                                        style={
                                            {
                                                textAlign: "center",
                                                color: "white"
                                            }
                                    }>
                                        <img src={image6}
                                            style={
                                                {
                                                    width: "100%",
                                                    height: "400px"
                                                }
                                            }/>
                                        <h5 class="card-title"
                                            style={
                                                {
                                                    textAlign: "center",
                                                    color: "white",
                                                    marginTop: "10px"
                                                }
                                        }>Call of Duty</h5>
                                        <h6>$35</h6>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TopGames;
