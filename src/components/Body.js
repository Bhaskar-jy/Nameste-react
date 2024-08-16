import RestorantCard from "./RestorantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //State Variable -> Super powerful variable
  const [resList1, setresList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrest, setfilteredrest] = useState([]);
  const [btnNamefreact, setbtnNamereact] = useState("Top Rated Restorants");
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
    setfilteredrest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList1?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="serchbtn"
            onClick={() => {
              //filter the restorant card and uptadate ui
              const felteredRestaurant = resList1.filter((res) =>
                res.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredrest(felteredRestaurant);
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            const filteredresList = resList1.filter(
              (res) => res.info?.avgRating > 4.4
            );
            if (btnNamefreact === "Top Rated Restorants") {
              setfilteredrest(filteredresList);
              setbtnNamereact("All Restorants");
            } else {
              setbtnNamereact("Top Rated Restorants");
              setfilteredrest(resList1);
            }
          }}
        >
          {btnNamefreact}
        </button>
      </div>
      <div className="res-container">
        {filteredrest?.map((restorant) => (
          <Link key={restorant.info.id} to={"/restaurant/" + restorant.info.id}>
            <RestorantCard key={restorant.info.id} resData={restorant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
