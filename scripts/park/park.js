import { useParks } from "./parkProvider.js";

export const parkComponent = (park) => {
  eventManager();
  return `
    <div class="park-card">
      <h2 class="park-name">${park.fullName}</h2>
      <image class="park-image" src="${park.images[0].url}" alt="${park.images[0].altText}">
      <p class="park-description">${park.description}</p>
      <button class="park-button" id=${park.id}>Plan a Trip</button>
    </div>
    `;
};

const eventManager = () => {
  const eventHub = document.querySelector(".container");

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "park-button") {
      clickEvent.preventDefault();

      let parks = useParks();

      const selectedPark = parks.find(
        (park) => park.id === clickEvent.target.id
      );

      document.querySelector(".park-list").innerHTML =
        parkComponent(selectedPark);
    }
  });
};

/* <div class="park-address">
        <p class="park-address-city">${park.addresses[0].city}</p>
        <p class="park-address-line1">${park.addresses[0].line1}</p>
        <p class="park-address-line2">${park.addresses[0].line2}</p>
        <p class="park-address-line3">${park.addresses[0].line3}</p>
        <p class="park-address-postalCode">${park.addresses[0].postalCode}</p>
      </div> */