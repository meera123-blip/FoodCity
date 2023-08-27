import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import { Shimmer } from "react-shimmer";
import useRestaurant from "../Utils/useRestaurant";
import { nanoid } from "nanoid";
import { DISH_IMG } from "../config";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import { decreaseCart } from "../Utils/cartSlice";
import { ItemTotal } from "../Utils/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
// import { handleAdditem } from "../Utils/handleDispatch";
// import { handleDecreaseItem } from "../Utils/handleDispatch";
// import { handleItemTotal } from "../Utils/handleDispatch";

const ResturantMenu = () =>
{
    const {id} = useParams();
    const restaurant = useRestaurant(id);

    const [vegOnly, setVegOnly] = useState(false);

// Event handler for the checkbox toggle
      const handleVegToggle = () => {
        setVegOnly(!vegOnly);
      };


    const dispatch = useDispatch();
    
    const handleAdditem = (dishInfo) =>
    {
      
      dispatch(addItem(dishInfo));

    }
    const handleDecreaseItem = (dishInfo) =>
    {
      
      dispatch(decreaseCart(dishInfo));
    }
    const handleItemTotal = (dishInfo) =>
    {
      
      dispatch(ItemTotal(dishInfo));
    }

    const cartItems = useSelector(store => store.cart.items);

    const renderButtons = (item) => {
      const cartItem = cartItems.find(cartItem => cartItem.id === item.id);

      if (!cartItem || cartItem.cartQuantity === 0) {
          return (
              <button
                  className="dark:bg-gray-900 text-white font-semibold border py-2 px-4 sm:px-6 rounded transition duration-300 ease-in-out transform hover:scale-105 mt-4"
                  onClick={() => handleAdditem(item)}
              >
                  Add
              </button>
          );
      } else {
          return (
            <div className="flex items-center border border-gray-200">
            <button className="px-2 py-1 text-slate-900 rounded-full mr-2" onClick={() => { handleAdditem(item); handleItemTotal(item);  }}>
                +
            </button>
            <span className="text-slate-900">{cartItem.cartQuantity}</span>
            <button className="px-2 py-1 rounded-full ml-2" onClick={() => { handleDecreaseItem(item); }}>-</button>
        </div>
          );
      }
  };

 
    return (
           
     <div className="bg-gray-100">

<div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-0 max-w-screen-lg mx-auto flex justify-between items-center border-b border-dotted">
  <div className="flex items-center">
    {/* Left side content */}
    <div>
      <h3 className="text-lg font-semibold">{restaurant?.cards[0]?.card?.card?.info.name}</h3>
      <p className="text-gray-500">{restaurant?.cards[0]?.card?.card?.info.cuisines.join(',')}</p>
      <p className="text-gray-500">{restaurant?.cards[0]?.card?.card?.info.areaName}</p>
    </div>
  </div>
  <div className="flex items-center">
    {/* Right side content */}
    <div className="ml-auto">
      <p className="text-gray-500">{restaurant?.cards[0]?.card?.card?.info.avgRating}</p>
      <p className="text-gray-500">{restaurant?.cards[0]?.card?.card?.info.totalRatingsString}</p>
    </div>
  </div>
  </div>
  <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-0 max-w-screen-lg mx-auto flex items-center">
  <div className="flex items-center">
    {/* Delivery time and cost */}
    <div>
      <svg
        className="w-6 h-6 text-gray-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
      <p className="text-gray-500">{restaurant?.cards[0]?.card?.card?.info.sla.deliveryTime}min</p>
    </div>
    <div className="ml-6">
      <svg
        className="w-6 h-6 text-gray-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2 3v2a10 10 0 0020 0V3M7 21a4 4 0 008 0M5 12H3a2 2 0 002 2v0a2 2 0 002 2h0a2 2 0 002-2v0a2 2 0 002-2h-2m4 0h2a2 2 0 012 2v0a2 2 0 01-2 2h0a2 2 0 01-2-2v0a2 2 0 01-2-2h2m-4 0a2 2 0 00-2-2H3"
        />
      </svg>
      <p className="text-gray-500">{restaurant?.cards[0]?.card?.card?.info.costForTwoMessage}</p>
    </div>
  </div>
  <div className="flex items-center ml-4">
  {/* Toggle Button */}
  <div className="ml-auto">
    <label htmlFor="vegToggle" className="text-gray-500 mr-2">Veg Only</label>
    <input
      type="checkbox"
      id="vegToggle"
      className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
      checked={vegOnly}
       onChange={handleVegToggle}
    />
  </div>
</div>
</div> 
   
           
           <div>
             
           {restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards?.map((cardssss) =>
    cardssss?.card?.card?.itemCards?.map((dishNames) => (
        <div className="bg-white p-3 sm:p-4 rounded-lg shadow-lg mb-4 sm:mb-0 max-w-screen-lg mx-auto flex justify-between items-center">
            <div className="flex items-center">
                <div>
                {dishNames?.card?.info?.isVeg === 1 ? (
                            <FontAwesomeIcon icon={faLeaf} className="text-green-500 h-4 w-4 mr-1" />
                        ) : (
                            <FontAwesomeIcon icon={faDrumstickBite} className="text-red-500 h-4 w-4 mr-1" />
                        )}
                    <h3 className="text-lg font-semibold" key={nanoid()}>
                        {dishNames?.card?.info?.name}
                    </h3>
                    <p className="text-gray-500" key={nanoid()}>
    {Math.floor(dishNames?.card?.info?.price ? dishNames.card.info.price / 100 : dishNames.card.info.defaultPrice / 100)}
    </p>
                    {/* ... */}
                </div>
            </div>
    {renderButtons(dishNames?.card?.info)}
      
        </div>
    ))
)}
</div>
 </div>
    )}       

export default ResturantMenu; 