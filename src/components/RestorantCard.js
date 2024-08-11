import { CDN_URL } from "../utils/constants";
const RestorantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  return (
    <div className="res-card">
      <img
        alt="cardimg"
        className="res-log"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{sla.deliveryTime} minuts</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestorantCard;
