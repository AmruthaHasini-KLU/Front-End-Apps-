import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (!existing) state.items.push({ ...item, quantity: 1 });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.items.find(i => i.id === id);
      if (item) item.quantity += amount;
      // Optionally remove item if quantity <= 0
      state.items = state.items.filter(i => i.quantity > 0);
    }
  }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
