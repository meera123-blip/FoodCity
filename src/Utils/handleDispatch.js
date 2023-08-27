import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
import { decreaseCart } from "../Utils/cartSlice";
// import { removeFromCart } from "../Utils/cartSlice";
import { ItemTotal } from "../Utils/cartSlice";

const dispatch = useDispatch();
    
export const handleAdditem = (dishInfo) =>
{
  
  dispatch(addItem(dishInfo));
}
export const handleDecreaseItem = (dishInfo) =>
{
  
  dispatch(decreaseCart(dishInfo));
}
export const handleItemTotal = (dishInfo) =>
{
  
  dispatch(ItemTotal(dishInfo));
}