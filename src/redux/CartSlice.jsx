const initialState = [];

export const addItem = (state, item) => {
  const existing = state.find((i) => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.push({ ...item, quantity: 1 });
  }
};

export const removeItem = (state, id) => {
  return state.filter((item) => item.id !== id);
};

export const updateQuantity = (state, { id, quantity }) => {
  const item = state.find((i) => i.id === id);
  if (item) {
    item.quantity = quantity;
  }
};
