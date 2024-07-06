import { useState, useEffect } from "react";
import React from "react";
//import restList from "../utils/mockData";
import RestCard, { recommendedRestaurants } from "../components/RestCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTAURANTS_API } from "../utils/constants";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  // const arr = useState(restList);
  // const ListOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  const [searchtext, setSearchtext] = useState("");
  const RestCardRecommended = recommendedRestaurants(RestCard);

  //console.log("ListOfRestaurants", ListOfRestaurants);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const datadb = await fetch(RESTAURANTS_API);

    const json = await datadb.json();
    //console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are Offline!! Please check your network connection...</h1>;
  }

  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchtext}
            onChange={(e) => {
              setSearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 bg-green-400 m-4 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredRest(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (rest) => rest.info.avgRating > 4
              );
              //console.log(filteredList);
              setFilteredRest(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="rest-cont flex flex-wrap">
        {filteredRest.map((rest) => (
          <Link key={rest.info.id} to={"/restaurants/" + rest.info.id}>
            { rest.info.avgRating > 4.3 ? <RestCardRecommended restData={rest} /> : <RestCard restData={rest} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
