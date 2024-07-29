import { createStore } from "https://cdn.skypack.dev/redux";

import profileReducer from "./profileReducer.js";
import {
  ADD_PROFILE,
  CALCULATE_AVERAGE_AGE,
  REMOVE_PROFILE,
} from "./action.js";

const store = createStore(profileReducer);

const avgAge = document.querySelector("#avgAge");

const updateAverageAge = () => {
  const state = store.getState();
  if (state.averageAge !== 0) {
    avgAge.textContent = `Average Age: ${state.averageAge}`;
  }
};
updateAverageAge();

store.subscribe(() => {
  console.log(store.getState());
  updateAverageAge();
});

const addProfile = (profile) => {
  store.dispatch({
    type: ADD_PROFILE,
    payload: profile,
  });
};

const calculateAvgAge = () => {
  store.dispatch({
    type: CALCULATE_AVERAGE_AGE,
  });
};

const removeProfile = (id) => {
  store.dispatch({
    type: REMOVE_PROFILE,
    payload: id,
  });
};

const profilesList = document.querySelector("#profilesList");

const renderProfiles = () => {
  const state = store.getState();
  if (state.profiles.length > 0)
    profilesList.innerHTML = state.profiles
      .map(
        (profile) =>
          `<li key={${profile.id}}>${profile.id}. ${profile.name} ( ${profile.age} years old )</li>`
      )
      .join("");
};
const addProfileBtn = document.querySelector("#addProfileBtn");

addProfileBtn.addEventListener("click", () => {
  const AddId = document.querySelector("#AddId");
  const name = document.querySelector("#name");
  const age = document.querySelector("#age");

  const newProfile = {
    id: Number(AddId.value),
    name: name.value,
    age: Number(age.value),
  };
  addProfile(newProfile);
  calculateAvgAge();
  renderProfiles();
});
