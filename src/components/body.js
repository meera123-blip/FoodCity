import React, { useEffect, useState } from "react";
import ResturantCard from "./restrauCard";
import { Link } from "react-router-dom";
import Shimmer from "./shimmer";
import getRestaurant from "../Utils/getRestaurants";

const BodyComponent = () => {
const [searchText, setSearchText] = useState("");
const filteredrestaurants = getRestaurant(searchText);




  return  filteredrestaurants?.length === 0 ? (
    <Shimmer />
  ) :  (
    <div className="bg-gray-100">
     <div className="bg-gray-100 flex justify-center items-center">
  <div className="w-full md:w-96 p-4">
    <input
      type="text"
      placeholder="Search for restaurant and dish"
      class="w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
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
          filteredrestaurants.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <ResturantCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
