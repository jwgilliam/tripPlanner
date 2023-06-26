import { useParks } from "./parkProvider.js";
import { parkComponent } from "./park.js";

export const parkList = () => {
  let parks = useParks();

  render(parks);
};

const render = (parks) => {
  let targetElement = document.querySelector(".park-list");

  targetElement.innerHTML = parks.map((park) => {
    return parkComponent(park);
  });
};
