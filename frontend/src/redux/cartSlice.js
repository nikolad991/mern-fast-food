import { createSlice } from "@reduxjs/toolkit";
const initialState = () => {
    return JSON.parse(localStorage.getItem("food-cart")) || [];
};
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addCartItem: (state, action) => {
            state.push({
                id: crypto.randomUUID(),
                product: action.payload.product,
                quantity: action.payload.quantity,
                total: action.payload.total
            })

        },
        removeCartItem: (state, action) => {
            const id = action.payload;
            state.splice(state.findIndex(item => item.id === id), 1);

        }
    },

});


export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;