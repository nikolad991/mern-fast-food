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

        },
        incrementQuantity: (state, action) => {
            const id = action.payload;
            const index = state.findIndex((item) => {
                return item.id === id;
            });
            const originalPrice = state[index].total / state[index].quantity;
            state[index].quantity += +1;
            state[index].total = (state[index].quantity * originalPrice).toFixed(2);
        },
        decrementQuantity: (state, action) => {
            const id = action.payload;
            const index = state.findIndex((item) => {
                return item.id === id;
            });
            const originalPrice = state[index].total / state[index].quantity;
            if (state[index].quantity > 1) {
                state[index].quantity += -1;
                state[index].total = (state[index].quantity * originalPrice).toFixed(2);
            }
        }

    },


});


export const { addCartItem, removeCartItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;