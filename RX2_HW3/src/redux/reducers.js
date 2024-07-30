import { ADD_ITEM, FETCH_ITEMS, FETCH_REMOVED_ITEMS } from "./actions";

const initialState = { items: [], removesItems: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case FETCH_REMOVED_ITEMS:
      return {
        ...state,
        removesItems: action.payload,
      };
    case ADD_ITEM:
      if (action.payload.entryType === "add") {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      } else {
        return {
          ...state,
          removesItems: [...state.items, action.payload],
        };
      }
    default:
      return state;
  }
};

export default reducer;
