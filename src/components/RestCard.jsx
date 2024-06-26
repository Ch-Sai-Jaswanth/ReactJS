import { CDN_URL} from "../utils/constants";
import React from "react";

const RestCard = (props) => {
    const { restData } = props;
    return (
        <div className="rest-card">
            <img className="rest-card-logo" src={ CDN_URL + restData.card.card.info.cloudinaryImageId} alt="Food item" />
            <h3>{restData.card.card.info.name}</h3>
            <h4>{restData.card.card.info.cuisines.join(", ")}</h4>
            <h5>Rating : {restData.card.card.info.avgRating}</h5>
        </div>
    );
}

export default RestCard;