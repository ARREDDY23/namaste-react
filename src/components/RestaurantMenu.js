import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantAccordion from "./RestaurantAccordion";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const [showItems, setShowItems] = useState(null);
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
  resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  // resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const cardItems = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) =>
    e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(cardItems);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {cardItems.map((cardItem, index) => (
        <RestaurantAccordion
          key={cardItem?.card?.card.title}
          data={cardItem?.card?.card}
          showItems ={index === showIndex ? true : false}
          setShowIndex= {() => setShowIndex(index)}/>
      ))}
    </div>
  );
};

export default RestaurantMenu;
