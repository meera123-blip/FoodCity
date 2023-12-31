import React, { useState } from "react";
import ResturantCard from "./restrauCard"; // Make sure this is the correct spelling
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import getRestaurant from "../Utils/getRestaurants";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const filteredrestaurants = getRestaurant(searchText);
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMoreCards = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return filteredrestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100">
      <div className="bg-gray-100 flex justify-center items-center">
        <div className="w-full md:w-96 p-4">
          <input
            type="text"
            placeholder="Search for restaurant and dish"
            className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 border border-black border-opacity-100"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredrestaurants.length === 0 ? (
          <p>No restaurants found.</p>
        ) : (
          filteredrestaurants.slice(0, visibleCount).map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <ResturantCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
      {visibleCount < filteredrestaurants.length && (
        <div className="flex justify-center">
          <button
            onClick={loadMoreCards}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-4"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
