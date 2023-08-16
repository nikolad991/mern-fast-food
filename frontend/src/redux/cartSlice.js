import { createSlice } from "@reduxjs/toolkit";
const initialState = []
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

        }
    }
});


export const { addCartItem } = cartSlice.actions;

export default cartSlice.reducer;