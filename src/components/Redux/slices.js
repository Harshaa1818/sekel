import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "cart",
    initialState:{
        cartItems : []
    },
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

        }
    }
})

export const { addTocart, removeFromCart, updateCart } = slice.actions;
export default slice.reducer
