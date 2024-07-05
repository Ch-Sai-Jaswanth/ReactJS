import { useState, useEffect } from "react";

const useRestaurantList = () => {

    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRest, setFilteredRest] = useState([]);
    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6868159&lng=83.2184815&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRest(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return [ListOfRestaurants, filteredRest];
}

export default useRestaurantList;