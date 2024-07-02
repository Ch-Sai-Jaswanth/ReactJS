import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";

const Header = () => {
    const [btn, setBtn] = useState("Login");
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
                    <button className="login-btn" onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }}>{ btn }</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;