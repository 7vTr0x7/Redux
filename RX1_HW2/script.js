import { createStore } from "https://cdn.skypack.dev/redux";
import profileReducer from "./profileReducer";

const store = createStore(profileReducer);

store.subscribe(() => {
  console.log(store.getState());
});
