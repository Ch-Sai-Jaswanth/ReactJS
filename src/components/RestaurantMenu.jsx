import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestCategory from "./RestCategory";

const RestaurantMenu = () => {
    //const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;
    
    // useEffect(() => {
    //     fetchMenu();
    // }, [])

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const json = await data.json();
    //     //console.log(json);
    //     setResInfo(json.data);       
    //  }

    const { name, avgRating, city } = resInfo?.cards[2]?.card?.card?.info;
    //console.log(resInfo?.cards[4]);

    const { cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(i => i.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-xl">{ name }</h1>
            <h2 className="font-bold">{cuisines.join(", ")}</h2>
            <h3 className="font-bold">Cost for two - { costForTwo / 100}</h3>
            {/* <h3>Average rating - { avgRating }</h3>
            <h4>Location - { city }</h4> */}
            {categories.map((category) => <RestCategory data={category?.card?.card}/>)}
        </div>
    );
}

export default RestaurantMenu;