import { createStore } from "https://cdn.skypack.dev/redux";
import profileReducer from "./profileReducer.js";

const store = createStore(profileReducer);

store.subscribe(() => {
  console.log(store.getState());
});

const profiles = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const profilesList = document.querySelector("#profilesList");

const renderProfiles = (profiles) => {
  profilesList.innerHTML = profiles
    .map(
      (profile) =>
        `<li key={${profile.id}}>${profile.id}. ${profile.name} ( ${profile.age} years old )</li>`
    )
    .join("");
};

renderProfiles(profiles);
