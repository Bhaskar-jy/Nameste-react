import RestorantCard, { withPromotedLabel } from "./RestorantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlieStatus";
const Body = () => {
  //State Variable -> Super powerful variable
  const [resList1, setresList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredrest, setfilteredrest] = useState([]);
  const [btnNamefreact, setbtnNamereact] = useState("Top Rated Restorants");
  const RestaurantCardPromotede = withPromotedLabel(RestorantCard);
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
    console.log(resList1);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are Offline!! Please check your internet connection....
      </h1>
    );
  }
  return resList1?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4 ">
          <input
            type="text"
            className="border border-solid border-black rounded-lg"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-5 py-1 bg-green-200 hover:bg-green-400 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-5 py-1 bg-gray-300 hover:bg-gray-400 rounded-lg"
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

        <div className="search m-4 p-4 flex items-center">
          <label>User Name : </label>
          <input className="border border-black"></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredrest?.map((restorant) => (
          <Link key={restorant.info.id} to={"/restaurant/" + restorant.info.id}>
            {restorant.info.promoted ? (
              <RestaurantCardPromotede
                key={restorant.info.id}
                resData={restorant}
              />
            ) : (
              <RestorantCard key={restorant.info.id} resData={restorant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
