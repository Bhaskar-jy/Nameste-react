import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestorantCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;

  return (
    <div className="p-4 m-4 w-[300px] rounded-lg  bg-gray-100 hover:bg-gray-300 shadow-xl">
      <img
        alt="cardimg"
        className="w-56 h-56 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minuts</h4>
      <h5>{costForTwo}</h5>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higher order COmponent
// Input -> RestaurantCard ==> Output -> RestaurantCardPromotede

export const withPromotedLabel = (RestorantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestorantCard {...props} />
      </div>
    );
  };
};

export default RestorantCard;
