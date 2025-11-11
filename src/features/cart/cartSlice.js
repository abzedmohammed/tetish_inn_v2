import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalPrice: 0,
};

const calculateTotal = (state) => {
  state.totalPrice = state.cart.reduce(
    (sum, item) => sum + item.subtotal,
    0
  );
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemExists = state.cart.some(
                (item) => item.snkId === action.payload.snkId
            );
            if (itemExists) return;

            state.cart.push({
                ...action.payload,
                quantity: 1,
                subtotal: action.payload.snkPrice,
            });
            calculateTotal(state);
        },

        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item.snkId !== action.payload
            );
            calculateTotal(state);
        },

        incrementItem: (state, action) => {
            const item = state.cart.find(
                (item) => item.snkId === action.payload
            );
            if (!item) return;

            item.quantity += 1;
            item.subtotal = item.quantity * item.snkPrice;
            calculateTotal(state);
        },

        decrementItem: (state, action) => {
            const item = state.cart.find(
                (item) => item.snkId === action.payload
            );
            if (!item || item.quantity === 1) return;

            item.quantity -= 1;
            item.subtotal = item.quantity * item.snkPrice;
            calculateTotal(state);
        },

        emptyCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        },
    },
});

export default cartSlice.reducer;

export const {
    addToCart,
    removeFromCart,
    incrementItem,
    decrementItem,
    emptyCart,
} = cartSlice.actions;
