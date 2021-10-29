import React from "react";
import image1 from "./imageFirstPage/Video-Games.jpg";
import image2 from "./imageFirstPage/Switch.jpg";
import image3 from "./imageFirstPage/Gaming-Accessories.jpg";
import image4 from "./imageFirstPage/Xbox-X-Consoles.jpg";
import image5 from "./imageFirstPage/VR-Accessories.jpg";
import image6 from "./imageFirstPage/playstation.jpg";
import image7 from "./imageFirstPage/VRHeadsets.jpg";
import image8 from "./imageFirstPage/Gaming-Combos.jpg";



const Categories = () => {
    return ( 
            
            <React.Fragment>
                <div class="py-5">
                    <div class="container">
                    <div class="row no-gutters">
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                        <a href="./games">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image1} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>Video Games</h5>
                            </div>
                        </a>
                        </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image2} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>Switch</h5>
                            </div>
                            </a>
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image3}  style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>Gaming Accessories</h5>
                            </div>
                            </a>
                            
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                                <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image4} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>Xbox X Consoles</h5>
                            </div>
                            </a>
                            
                        </div>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image5} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>VR Accessories</h5>
                            </div>
                            </a>
                            
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image6} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>Play Stations</h5>
                            </div>
                            </a>
                            
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image7} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>VR Headsets</h5>
                            </div>
                            </a>
                            
                        </div>
                        </div>
                        <div class="col-md-3">
                        <div class="card" style={{borderRadius:"0"}}>
                            <a href="./category">
                            <div class="card-block" style={{textAlign:"center"}}>
                            <img src={image8} style={{width:"200px",height:"130px"}}/>
                            <h5 class="card-title" style={{textAlign:"center"}}>Gaming Combos</h5>
                            </div>
                            </a>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default Categories;