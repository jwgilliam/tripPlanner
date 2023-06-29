import { getPlaces, usePlaces } from "./placeProvider.js";
import { useParkCode } from "../park/parkProvider.js";
import { placeComponent } from "./place.js";

export const placeList = () => {
  const parkCode = useParkCode();

  getPlaces(parkCode).then(render);
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
      <button class="park-list-submit">Save places</button>
    `;
};
