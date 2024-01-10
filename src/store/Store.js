import { configureStore } from "@reduxjs/toolkit"
import CardFoodSlice from "../slices/CardFoodSlice";
import UserdataSlices from "../slices/UserdataSlices";

const Store = configureStore({
  reducer: {
       fooditemsCard: CardFoodSlice,  
       loginDetail : UserdataSlices 
  }

})

export default Store;