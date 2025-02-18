import { createSlice } from "@reduxjs/toolkit";


const bagSlice=createSlice({
    name:"bag",
    initialState:[],
    reducers:{
        addToBag:(state,action)=>{
            state.push(action.payload)
        },
        removeFromBag:(state,action)=>{

            // console.log(action.payload)
          return  state.filter(id=>id!==action.payload);
        }
    }
})

export const bagActions=bagSlice.actions;

export default bagSlice;