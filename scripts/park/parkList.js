import { useParks } from "./parkProvider.js";
import { parkComponent, renderDetail } from "./park.js";
import { placeList } from "../place/placeList.js";

export const parkList = () => {
  let parks = useParks();

  eventManager();
  render(parks);
};

const eventManager = () => {
  const eventHub = document.querySelector(".container");

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === `park-button-${clickEvent.target.id}`) {
      clickEvent.preventDefault();

      let parks = useParks();

      const selectedPark = parks.find(
        (park) => park.id === clickEvent.target.id
      );

      document.querySelector(".park-list").innerHTML =
        renderDetail(selectedPark);

      // run scripts for attraction/places lists here. Or maybe use events?
      placeList();
    }
  });
};

const render = (parks) => {
  let targetElement = document.querySelector(".park-list");

  targetElement.innerHTML = parks
    .map((park) => {
      return parkComponent(park);
    })
    .join("");
};


