import { CDN_URL } from "../utils/constants";
import React from "react";

const RestCard = (props) => {
    const { restData } = props;
    return (
        <div className="rest-card">
            <img className="rest-card-logo" src={ CDN_URL + restData.info.cloudinaryImageId} alt="Food item" />
            <h3>{restData.info.name}</h3>
            <h5>{restData.info.cuisines.join(", ")}</h5>
            <h5>Rating : {restData.info.avgRating}</h5>
        </div>
    );
}

export default RestCard;