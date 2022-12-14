import {configureStore, createSlice} from "@reduxjs/toolkit";

const noteSlice=createSlice({
    name:"note",
    initialState:{list:[]},
    reducers:{
        setMessage(state,action){
            state.list=[...state.list,action.payload];
        },
        deleteMessage(state,action){
            state.list.splice(action.payload,1);
        }
    }
});

export const noteAction=noteSlice.actions;

const store=configureStore({
    reducer:{note:noteSlice.reducer}
});

export default store;