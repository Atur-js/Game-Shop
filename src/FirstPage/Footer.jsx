import React from 'react';
import "./Footer.css";
import image from "./imageFirstPage/Logo.png";

const Footer = () => {
    return (
        <React.Fragment>

            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <img src={image}
                                style={
                                    {
                                        height: "200px",
                                        maxWidth: "300px"
                                    }
                                }/>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="./games">Video Games</a>
                                </li>
                                <li>
                                    <a href="./category">Switch</a>
                                </li>
                                <li>
                                    <a href="./category">Gaming Accessories</a>
                                </li>
                                <li>
                                    <a href="./category">Xbox X Console</a>
                                </li>
                                <li>
                                    <a href="./category">VR Accessories</a>
                                </li>
                                <li>
                                    <a href="./category">Play Stations</a>
                                </li>
                                <li>
                                    <a href="./category">VR Headsets</a>
                                </li>
                                <li>
                                    <a href="./category">Gaming Combos</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#">Contribute</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2021 All Rights Reserved by
                                <a style={
                                        {color: "yellow"}
                                    }
                                    href="https://github.com/atur-js">Atur-js</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
