import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        //console.log(json);
        setResInfo(json.data);       
     }

    if (resInfo === null) return <Shimmer />;

    const { name, avgRating, city } = resInfo?.cards[2]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{ name }</h1>
            <h3>Average rating - { avgRating }</h3>
            <h4>Location - { city }</h4>
            <h3>Menu</h3>
            <ul>
                <li>Home made Foods</li>
                <li>Mandi</li>
            </ul>
        </div>
    );
}

export default RestaurantMenu;