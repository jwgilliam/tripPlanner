import { getStateCodes, useStateCodes, getParks } from "./parkProvider.js";

export const parkSearch = () => {
  getStateCodes().then(render).then(eventManager);
};

const eventManager = () => {
  const eventHub = document.querySelector(".container");

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "search-submit") {
      clickEvent.preventDefault();

      let selectedState =
        document.querySelector(".search-selector").selectedIndex - 1;
      let states = useStateCodes();

      getParks(states[selectedState])
        .then(() => {
          const message = new CustomEvent("renderParkList");
          eventHub.dispatchEvent(message);
        })
        .then(render);
    }
  });
};

const render = () => {
  const targetElement = document.querySelector(".search-form");
  const states = useStateCodes();

  return (targetElement.innerHTML = `
  <select class="search-selector">
    <option value=0>Please select a state</option>
    ${optionBuilder(states)}
  </select>
  <button id="search-submit">Search</button>
  `);
};

const optionBuilder = (states) => {
  let options = ``;

  states.map((state) => {
    options += `<option vlaue=${state.abbreviation}>${state.name}</option>`;
  });

  return options;
};
