import { createSlice } from "@reduxjs/toolkit";

const CardFoodSlice = createSlice({

    name: 'fooditemsCard',
    initialState: {
        items: []
    },

    reducers: {
        additems: (state, action) => {
            state.items.push({quantity : 1 , totalPrice: action.payload.price , ...action.payload})
        },

        deleteItems : (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        changeQuantity: (state, action) => {
            const { id, change } = action.payload;
            const item = state.items.find((item) => item.id === id);
      
            if (item) {
              // Increment or decrement the quantity based on the 'change' value
              item.quantity += change;
            // Update the total price based on the new quantity
             item.totalPrice = item.price * item.quantity;
            }
          }
    }
})

export const { additems , deleteItems , changeQuantity } = CardFoodSlice.actions
export default CardFoodSlice.reducer;