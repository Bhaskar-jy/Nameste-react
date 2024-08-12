import RestorantCard from "./RestorantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  //State Variable -> Super powerful variable
  const [resList1, setresList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.16363&lng=91.7611838&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (resList1?.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            const filteredresList = resList1.filter(
              (res) => res.info?.avgRating > 4.2
            );
            setresList(filteredresList);
          }}
        >
          Top Rated Restorants
        </button>
      </div>
      <div className="res-container">
        {resList1?.map((restorant) => (
          <RestorantCard key={restorant.info.id} resData={restorant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
