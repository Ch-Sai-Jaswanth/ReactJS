import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    //console.log(items);
    return (
        <div>
            {items.map((item) => <div key={item.card.info.id} 
            className="p-4 m-4 border border-gray-200 border-b-2 text-left flex justify-between">
                <div className="py-2">
                    <span>{item.card.info.name} - </span>
                    <span>₹{item.card.info.price / 100}</span>
                    <p className="text-xs ">{item.card.info.category}</p>
                </div>
                <div className="w-3/12 h-auto">
                    <div className="relative">
                        <button className="absolute text-yellow-200 bg-black rounded-lg">Add +</button>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="rounded-lg w-full" />
                </div>
                
                </div>)}
        </div>
    )
}

export default ItemList;