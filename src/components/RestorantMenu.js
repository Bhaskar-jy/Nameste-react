import useRetaurentMenu from "../utils/useRetaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResCategory from "./ResCategory";
const RestorantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRetaurentMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(",")} {costForTwoMessage}
      </p>
      <h1 className="font-bold text-sm">{avgRating} Stars</h1>
      {categories.map((category) => (
        <ResCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestorantMenu;
