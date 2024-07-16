import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./itemsSlice";
import fetchStatusSilce from "./fetchStatusSlice";
import bagSlice from "./bagSlice";


const myntraStore=configureStore({
    reducer:{
        items:itemsSlice.reducer,
        fetchStatus:fetchStatusSilce.reducer,
        bag:bagSlice.reducer
    }
})

export default myntraStore;