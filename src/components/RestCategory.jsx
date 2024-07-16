import React, { useState } from "react";
import ItemList from "./ItemList";

const RestCategory = ({data}) => {
    //console.log(data);
    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
    return (
        <div>
            <div className="bg-gray-100 mx-auto my-8 w-1/2 shadow-lg">
                <div onClick={handleClick} className="cursor-pointer flex justify-between">
                    <span className="font-bold my-4 pl-4">{data.title}({data.itemCards.length})</span>
                    <span className="my-4 pr-4">🔽</span>
                </div>
                    <div>
                        {showItems && <ItemList items = {data.itemCards}/> }
                    </div>
            </div>
        </div>
    )
}

export default RestCategory;