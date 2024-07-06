import { CDN_URL } from "../utils/constants";
import React from "react";

const RestCard = (props) => {
    const { restData } = props;
    return (
        <div className="rest-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg w-60" src={ CDN_URL + restData.info.cloudinaryImageId} alt="Food item" />
            <h3 className="font-bold py-2 text-lg">{restData.info.name}</h3>
            <h5>{restData.info.cuisines.join(", ")}</h5>
            <h5>Rating : {restData.info.avgRating}</h5>
        </div>
    );
}

//Higher order components
export const recommendedRestaurants = (RestCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Recommended</label>
                <RestCard {...props}/>
            </div>
        )
    }
}
export default RestCard;