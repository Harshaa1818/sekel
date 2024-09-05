import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : []
}

const slice = createSlice({
    name: "cart",
    initialState,
    reducer:{
        addTocart : ( state, action ) => {

            const newItem = {
                Productname : action.payload.Productname,
                description : action.payload.description,
                image : action.payload.image,
                price : action.payload.price
            }

           state.cartItem.push(newItem)
        },
        removeFromCart : ( state, action ) => {


        },
        updateCart : ( state, action ) => {

        },
        responseData: (state, action) => {
            state.cartItems.push(action.payload);
        }
    }
})

export const { addTocart, removeFromCart, updateCart, responseData } = slice.actions;
export default slice.reducer
