import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestorantMenu = (props) => {
  const [resInfo, setresInfo] = useState([]);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.16363&lng=91.7611838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setresInfo(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //   const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
  //     resInfo[0]?.info;
  //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{resInfo[0]?.info?.name}</h1>
      <p>
        {resInfo[0]?.info?.cuisines.join(",")} {resInfo[0]?.info?.costForTwo}
      </p>
      <h1></h1>
      <h1>{resInfo[0]?.info?.avgRating} Stars</h1>

      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pasta</li>
        <li>Shorma</li>
      </ul>
    </div>
  );
};

export default RestorantMenu;
