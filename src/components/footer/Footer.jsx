import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                  Thank you for using the Movie App developed by <strong>Vishwas Prabhu</strong>. We hope you enjoyed using the app to discover and explore 
                  new movies. Our team is dedicated to providing you with the best user experience possible, and we appreciate your feedback 
                  and suggestions for future improvements. Please don't hesitate to contact us if you have any questions or concerns about
                  the app. You can reach us through the support section of the app, and we'll do our best to assist you. Thank you for 
                  choosing our app, and we look forward to continuing to serve you with the latest and greatest in movie entertainment.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;