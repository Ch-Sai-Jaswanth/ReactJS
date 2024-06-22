import RestCard from "../components/RestCard";
import { useState } from "react";
import React from "react";
import restList from "../utils/mockData";

const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState(restList);
    // const arr = useState(restList);
    // const ListOfRestaurants = arr[0];
    // const setListOfRestaurants = arr[1];
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = restList.filter(
                        (rest) => rest.card.card.info.avgRating > 4.2);
                        setListOfRestaurants(filteredList);
                    }
                }>Top Rated Restaurants</button>
            </div>
            <div className="rest-cont">
                {
                ListOfRestaurants.map((rest) => 
                <RestCard key = {rest.card.card.info.id} restData = { rest } /> )
                }
            </div>
        </div>
    );
}

export default Body;