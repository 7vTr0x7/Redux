import { createStore } from "https://cdn.skypack.dev/redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);

export default store;
