import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
    localStorage.setItem("cart", JSON.stringify(state));
};

const getCartState = () => {
    try {
        const savedCart = localStorage.getItem("cart");
        const parsedCart = savedCart ? JSON.parse(savedCart) : null;
        return parsedCart && parsedCart.items && parsedCart.totalPrice >= 0
            ? parsedCart
            : { items: [], totalPrice: 0 };
    } catch (error) {
        console.error("Error reading cart from localStorage:", error);
        return { items: [], totalPrice: 0 };
    }
};

export const cartSlice = createSlice({
    name: "cart",
    initialState: getCartState(),
    reducers: {
        addToCart: (state, action) => {
            const { id, quantity} = action.payload;
            const cartItem = state.items.find((item) => item.id === id);

            if (cartItem) {
                cartItem.quantity += 1;  
            } else {
                state.items.push({ ...action.payload, quantity: quantity || 1 });
            }

            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            saveToLocalStorage(state);
        },

        subtractFromCart: (state, action) => {
            const cartItem = state.items.find((item) => item.id === action.payload.id);
            if (cartItem) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                } else {
                    state.items = state.items.filter((item) => item.id !== action.payload.id);
                }
            }
            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            saveToLocalStorage(state);
        },

        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            state.totalPrice = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
            saveToLocalStorage(state);
        },

        clearCart: (state) => {
            state.items = [];  
        },
    },
});

export const { addToCart, subtractFromCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
