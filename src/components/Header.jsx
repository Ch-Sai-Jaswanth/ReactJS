import { LOGO_URL } from "../utils/constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btn, setBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-blue-100 shadow-lg">
            <div className="w-60">
                <img className="logo" src= {LOGO_URL} alt="Restaurant-1" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status : { onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to= {"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/about"}>About Us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-btn" onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login");
                    }}>{ btn }</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;