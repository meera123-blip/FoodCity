import {useSelector} from "react-redux";
import { DISH_IMG } from "../config";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import { decreaseCart } from "../Utils/cartSlice";
import { removeFromCart } from "../Utils/cartSlice";
import { ItemTotal } from "../Utils/cartSlice";
import EmptyCart from "../Utils/emptyCart";
// import { handleAdditem } from "../Utils/handleDispatch";
// import { handleDecreaseItem } from "../Utils/handleDispatch";
// import { handleItemTotal } from "../Utils/handleDispatch";


const Cart = () =>
{
    const cartItems = useSelector(store => store.cart.items);

   const calculateTotal = () =>
   {
    let Total=0;
    cartItems.map((item) =>
    {
        const price = item.price !== undefined
        ? item.price / 100
        : item.defaultPrice / 100;

        if(item.total)
           Total += item.total;
        else
           Total += price;
    })
    return Total;
    
   }
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
    const handleRemoveItem = (dishInfo) =>
    {
        dispatch(removeFromCart(dishInfo));
    }

    return (cartItems.length===0)? <EmptyCart/> : (

        <div className="h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-full lg:w-2/3 bg-white rounded-lg shadow-lg p-6 mb-4">
            {cartItems.map((item) => (
                <div className="flex p-2 justify-between items-center border-b border-gray-300">
                    <div className="flex items-center">
                        {item.isVeg === 1 ? (
                            <FontAwesomeIcon icon={faLeaf} className="text-green-500 h-4 w-4 mr-1" />
                        ) : (
                            <FontAwesomeIcon icon={faDrumstickBite} className="text-red-500 h-4 w-4 mr-1" />
                        )}
                        <p className="text-md mb-2">{item.name}</p>
                        <button className="text-red-500 mr-5 ml-4" onClick={()=>{
                            handleRemoveItem(item)
                        }}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                    </div>
                
                    <div className="flex items-center border border-gray-200">
                        <button className="px-2 py-1 text-slate-900 rounded-full mr-2" onClick={() => { handleAdditem(item); handleItemTotal(item); }}>
                            +
                        </button>
                        <span className="text-slate-900">{item.cartQuantity}</span>
                        <button className="px-2 py-1 rounded-full ml-2" onClick={() => { handleDecreaseItem(item); }}>-</button>
                    </div>
                    <div>
                        <span className="text-lg ml-4">
                        {item.total !== undefined
    ? Math.floor(item.total)
    : (
        item.price !== undefined
        ? Math.floor(item.price / 100)
        : Math.floor(item.defaultPrice / 100)
    )
}

                        </span>
                    </div>
                </div>
            ))}
    
            <div className="border-t-2 border-gray-300 p-4">
                <h1 className="text-xl font-bold mb-4 py-2 px-3">Bill Details</h1>
                <div className="flex justify-between py-3 px-3">
                    <p>Item total</p>
                    <span>{calculateTotal()}</span>
                </div>
                <div className="flex justify-between py-3 px-3">
                    <p>Delivery</p>
                    <span>{20}</span>
                </div>
                <div className="border-t border-gray-300 flex justify-between py-3 px-3">
                    <p>To pay</p>
                    <span>{calculateTotal() + 20}</span>
                </div>
            </div>

            <button className="block w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4">
            CHECKOUT
        </button>
        </div>
    </div>
    



);


    
}

export default Cart;