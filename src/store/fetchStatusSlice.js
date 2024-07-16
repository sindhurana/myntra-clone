import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSilce=createSlice({
    name:"fetchStatus",
    initialState:{
        fetchDone:false,
        currentlyfetching:false
    },
    reducers:{
        markFetchDone:(state)=>{
           state.fetchDone=true;
        },
        markFetchingStarted:(state)=>{
             state.currentlyfetching=true
        },
        markFetchingFinished:(state)=>{
             state.currentlyfetching=false
        }
    }
})

export const fetchStatusActions=fetchStatusSilce.actions;

export default fetchStatusSilce;