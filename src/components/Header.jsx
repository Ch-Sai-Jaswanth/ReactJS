import { LOGO_URL } from "../utils/constants";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="img-container">
                <img className="logo" src= {LOGO_URL} alt="Restaurant-1" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;