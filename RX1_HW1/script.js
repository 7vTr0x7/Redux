import { createStore } from "https://cdn.skypack.dev/redux";
import cartReducer from "./cartReducer.js";
import { addToCart, calculateTotal, removeFromCart } from "./action.js";

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 15 },
];

const productList = document.querySelector("#productList");
const cartItemsList = document.querySelector("#cartItemsList");
const totalPrice = document.querySelector("#totalPrice");

window.addProductToCart = (product) => {
  store.dispatch(addToCart(product));
};

const renderProducts = (products) => {
  productList.innerHTML = products
    .map(
      (prod) =>
        `<li key="${prod.id}">${prod.name} - Rs.${
          prod.price
        } <button onClick='addProductToCart(${JSON.stringify(
          prod
        )})'>Add to Cart</button></li>`
    )
    .join("");
};
renderProducts(products);

window.removeItem = (id) => {
  store.dispatch(removeFromCart(id));
};

const getTotalPrice = () => {
  store.dispatch(calculateTotal());
};

getTotalPrice();

const updateCart = () => {
  const state = store.getState();
  if (state) {
    cartItemsList.innerHTML = state.cartItems
      .map(
        (item) =>
          `<li key="${item.id}">${item.name} - Rs.${item.price} - Quantity: ${item.quantity} <button onClick="removeItem(${item.id})">Remove</button></li>`
      )
      .join("");
    totalPrice.textContent = `Total: Rs. ${state.totalPrice}`;
  }
};

updateCart();
store.subscribe(() => updateCart());
