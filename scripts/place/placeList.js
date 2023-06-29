import { getPlaces, usePlaces } from "./placeProvider.js";
import { useParkCode } from "../park/parkProvider.js";
import { placeComponent } from "./place.js";

export const placeList = () => {
  const parkCode = useParkCode();

  getPlaces(parkCode).then(render);
};

const render = () => {
  const places = usePlaces();
  const targetElement = document.querySelector(".place-list");

  targetElement.innerHTML = places
    .map((place) => {
      return placeComponent(place);
    })
    .join("");
};
