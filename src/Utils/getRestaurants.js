
import { useState,useEffect } from "react";
import { filterDatas } from "./helper";

const getRestaurant = (searchText) =>
{
const [allrestaurant, setAllRestaurant] = useState([]);
const [filteredrestaurants, setFilteredRestaurants] = useState([]);
// const [searchText, setSearchText] = useState("");

  useEffect(() => {
    // API call
    getResturants();
  }, []);

  useEffect(() => {
    // Filter restaurants whenever searchText or allrestaurant changes
    if (allrestaurant) {
      const data = filterDatas(searchText, allrestaurant);
      setFilteredRestaurants(data);
    }
  }, [searchText, allrestaurant]);

  async function getResturants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
  }
return filteredrestaurants;
}

export default getRestaurant;
