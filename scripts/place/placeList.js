import { getPlaces, usePlaces, savePlaces } from "./placeProvider.js";
import { useParkCode } from "../park/parkProvider.js";
import { placeComponent } from "./place.js";

export const placeList = () => {
  const parkCode = useParkCode();

  getPlaces(parkCode).then(render);
  eventManager();
};

const eventManager = () => {
  const eventHub = document.querySelector(".container");
  let selectedPlaces = [];

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "place-select-button") {
      clickEvent.preventDefault();
      // console.log("Added to trip");

      selectedPlaces.push(clickEvent.target.id);
      console.log(selectedPlaces);

      let button = document.getElementById(clickEvent.target.id);
      removeButton(button);
    }

    if (clickEvent.target.className === "place-remove-button") {
      clickEvent.preventDefault();
      // console.log("Removed from trip");

      const removeIndex = selectedPlaces.indexOf(clickEvent.target.id);
      selectedPlaces.splice(removeIndex, 1);
      console.log(selectedPlaces);

      let button = document.getElementById(clickEvent.target.id);
      addButton(button);
    }

    if (clickEvent.target.id === "place-list-submit") {
      clickEvent.preventDefault();
      // console.log("Submit all", selectedPlaces);

      savePlaces(selectedPlaces);
      selectedPlaces = [];
    }
  });
};

const render = () => {
  const places = usePlaces();
  const targetElement = document.querySelector(".place-list-container");

  targetElement.innerHTML = `
  <div class="place-list">
    ${places
      .map((place) => {
        return placeComponent(place);
      })
      .join("")}
  </div>
  <button id="place-list-submit">Save places</button>
    `;
};

const addButton = (button) => {
  button.innerHTML = `<button class="place-select-button" id=${button.id} name="${button.id}">Add to trip</button>`;
};

const removeButton = (button) => {
  button.innerHTML = `<button class="place-remove-button" id=${button.id} name="${button.id}">Remove from trip</button>`;
};
