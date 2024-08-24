import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (data, showItems, setShowIndex) => {
  const handleClick = () => {
    setShowIndex();
    // setShowItems(!showItems);
  };
  console.log(setShowIndex);
  return (
    <div className="text-center">
      <div className="rounded-lg w-6/12 bg-gray-100 hover:bg-gray-200 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.data?.title} ({data?.data?.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data?.data?.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
