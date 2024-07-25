import { createStore } from "https://cdn.skypack.dev/redux";
import cookieReducer from "./cookieReducer.js";

const store = createStore(cookieReducer);

store.subscribe(() => {
  updateCookieCount();
});

const addCookies = document.querySelector("#addCookies");
const removeCookies = document.querySelector("#removeCookies");
const cookiesCount = document.querySelector("#cookiesCount");

const addCookieHandler = () => {
  store.dispatch({ type: "cookies/added" });
};

const removeCookieHandler = () => {
  store.dispatch({ type: "cookies/removed" });
};

addCookies.addEventListener("click", addCookieHandler);
removeCookies.addEventListener("click", removeCookieHandler);

const updateCookieCount = () => {
  const state = store.getState();
  cookiesCount.textContent = state.value;
};

updateCookieCount();
