import RestorantCard from "./RestorantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  //State Variable -> Super powerful variable
  const [resList1, setresList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            const filteredresList = resList1.filter(
              (res) => res.info?.avgRating > 4.5
            );
            setresList(filteredresList);
          }}
        >
          Top Rated Restorants
        </button>
      </div>
      <div className="res-container">
        {resList1.map((restorant) => (
          <RestorantCard key={restorant.info.id} resData={restorant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
