import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        item:[]
    },
    reducers:{
        additem:(state,action)=>{
            state.item.push(action.payload)
        },
        clearitem:(state)=>{
            state.item.length=0
        },
    }
})

export const{additem,clearitem}=cartSlice.actions
export default cartSlice.reducer