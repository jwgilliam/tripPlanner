import { getPlaces, usePlaces, savePlaces } from "./placeProvider.js";
import { useParkCode } from "../park/parkProvider.js";
import { placeComponent, placeComponentDetail } from "./place.js";

export const placeList = () => {
  eventManager();
};

const eventManager = () => {
  const eventHub = document.querySelector(".container");
  let selectedPlaces = [];

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "place-select-button") {
      clickEvent.preventDefault();

      selectedPlaces.push(clickEvent.target.id);
      console.log(selectedPlaces);

      let button = document.getElementById(clickEvent.target.id);
      removeButton(button);
    }

    if (clickEvent.target.className === "place-remove-button") {
      clickEvent.preventDefault();

      const removeIndex = selectedPlaces.indexOf(clickEvent.target.id);
      selectedPlaces.splice(removeIndex, 1);
      console.log(selectedPlaces);

      let button = document.getElementById(clickEvent.target.id);
      addButton(button);
    }

    if (clickEvent.target.id === "place-list-submit") {
      clickEvent.preventDefault();

      const message = new CustomEvent("placeListSubmitClicked", {
        detail: {
          placesArray: selectedPlaces,
        },
      });
      eventHub.dispatchEvent(message);

      savePlaces(selectedPlaces).then(renderDetail(selectedPlaces));
    }
  });

  eventHub.addEventListener("renderPlaceList", (event) => {
    const parkCode = useParkCode();

    getPlaces(parkCode).then(render);
  });
};

const render = () => {
  const places = usePlaces();
  const targetElement = document.querySelector(".place-list-container");

  console.log(places);

  targetElement.innerHTML = `
  <div class="place-list">
    ${places
      .map((place) => {
        return placeComponent(place);
      })
      .join(" ")}
  </div>
  <button id="place-list-submit">Save places</button>
    `;
};

const renderDetail = (selectedPlaces) => {
  const places = usePlaces();
  const targetElement = document.querySelector(".place-list-container");
  let renderPlaces = [];

  places.map((place) => {
    selectedPlaces.map((selectedPlace) => {
      if (selectedPlace === place.id) {
        renderPlaces.push(place);
      }
    });
  });

  targetElement.innerHTML = `
  <div class="place-list">
   <h2>Places to Visit:</h2>
   <ul class="place-ul">
    ${renderPlaces
      .map((place) => {
        return placeComponentDetail(place);
      })
      .join(" ")}
   </ul>
  </div>
    `;
};

const addButton = (button) => {
  button.innerHTML = `<button class="place-select-button" id=${button.id} name="${button.id}">Add to trip</button>`;
};

const removeButton = (button) => {
  button.innerHTML = `<button class="place-remove-button" id=${button.id} name="${button.id}">Remove from trip</button>`;
};
