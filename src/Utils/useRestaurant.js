import { useState,useEffect } from "react";


const useRestaurant = (id) =>
{

    const [restaurant,setRestaurant] = useState(null);


    //Get data from api

    useEffect(()=>
    {
      getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await response.json();
        setRestaurant(json.data);
    }

  return restaurant;
};

export default useRestaurant;