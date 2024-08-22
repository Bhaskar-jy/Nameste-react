import { CDN_URL } from "../utils/constants";
const RestorantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="p-4 m-4 w-[300px] rounded-lg  bg-gray-100 hover:bg-gray-300 shadow-xl">
      <img
        alt="cardimg"
        className="h-30 rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minuts</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestorantCard;
