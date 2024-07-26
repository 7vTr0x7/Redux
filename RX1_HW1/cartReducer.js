import { ADD_TO_CART, REMOVE_FROM_CART, CALCULATE_TOTAL } from "./action.js";
const initialState = { cartItems: [] };

const cartReducer = (state = initialState, action) => {
  const item = state.cartItems.find((item) => item.id == action.payload.id);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          item
            ? { ...item, quantity: item.quantity + 1 }
            : { ...action.payload, quantity: 1 },
        ],
      };
    case REMOVE_FROM_CART:
      return state.cartItems.filter((item) => item.id != action.payload);
    case CALCULATE_TOTAL:
      return state.cartItems.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );

    default:
      return state;
  }
};

export default cartReducer;
