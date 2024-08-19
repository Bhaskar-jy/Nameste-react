import useRetaurentMenu from "../utils/useRetaurentMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

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
  console.log(itemCards);

  return (
    <div className="menu">
      <div className="rating-box">
        <h1>{name}</h1>
        <p>
          {cuisines?.join(",")} {costForTwoMessage}
        </p>
        <h1></h1>
        <h1>{avgRating} Stars</h1>
      </div>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestorantMenu;
