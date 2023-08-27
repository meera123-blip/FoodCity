import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const cartSlice = createSlice(
    {
        name: 'cart',
        initialState: {
            items: []
        },
        reducers:{
            addItem:(state,action)=>{

                const itemIndex = state.items.findIndex(item=> item.id === action.payload.id);
                if(itemIndex >= 0)
                {
                    state.items[itemIndex].cartQuantity +=1;
                }
                else
                {
                const tempProduct = {...action.payload,cartQuantity: 1};
                state.items.push(tempProduct);
                }
                
            },
            removeFromCart:(state,action) =>
            {
                 const nextCartItems = state.items.filter(
                    (item) => item.id !== action.payload.id
                 );
                 state.items = nextCartItems;
                 localStorage.setItem("items", JSON.stringify(state.items));

                 toast.error(`${action.payload.name} removed from cart`,{
                    position: "bottom-left"
                 });


            },
            decreaseCart: (state, action) => {
                const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
                let total = state.items[itemIndex].total;
                const price = Math.floor(state.items[itemIndex].price !== undefined ? state.items[itemIndex].price / 100 : state.items[itemIndex].defaultPrice / 100);
    
                if (itemIndex !== -1) {
                    if (state.items[itemIndex].cartQuantity > 1) {
                        state.items[itemIndex].cartQuantity -= 1;
                        updatedTotal = total-price;
                        console.log(total);
                        state.items[itemIndex] = {
                            ...state.items[itemIndex],
                            total: updatedTotal
                        };
                        toast.info(`Decreased ${action.payload.name} cart quantity`, {
                            position: "bottom-left"
                        });
                    } else if (state.items[itemIndex].cartQuantity === 1) {
                        state.items.splice(itemIndex, 1);
    
                        toast.error(`${action.payload.name} removed from cart`, {
                            position: "bottom-left"
                        });
                    }
                    localStorage.setItem("items", JSON.stringify(state.items));
                }
            },
            ItemTotal: (state, action) => {
                const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

if (itemIndex !== -1) {
    const quantity = state.items[itemIndex].cartQuantity;
    const price = state.items[itemIndex].price !== undefined
        ? state.items[itemIndex].price / 100
        : state.items[itemIndex].defaultPrice / 100;

    if (quantity >= 1) {
        const updatedTotal = price * quantity;

        // Create a new object with the updated total
        const updatedItem = {
            ...state.items[itemIndex],
            total: updatedTotal
        };

        // Create a new array with the updated item
        const updatedItems = [...state.items];
        updatedItems[itemIndex] = updatedItem;

        // Update the state with the new array
        state.items = updatedItems;
    }
}

            },
            
            removeItem:(state,action) =>
            {
                state.items.pop();
            },
            clearCart:(state) => {
                state.items = [];
            }
        }
    }
);

export const {addItem,removeItem,clearCart,removeFromCart,decreaseCart,ItemTotal} = cartSlice.actions;

export default cartSlice.reducer;

