import { useParks, setParkCode } from "./parkProvider.js";

export const parkComponent = (park) => {
  eventManager();
  return render(park);
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
        renderDetail(selectedPark);

      // run scripts for attraction/places lists here. Or maybe use events?
      // This may be problematic since it is running for each instance in the park list.
    }
  });
};

const render = (park) => {
  return `
    <div class="park-card">
      <h2 class="park-name">${park.fullName}</h2>
      <image class="park-image" src="${park.images[0].url}" alt="${park.images[0].altText}">
      <p class="park-description">${park.description}</p>
      <button class="park-button" id=${park.id}>Plan a Trip</button>
    </div>
    `;
};

const renderDetail = (park) => {
  setParkCode(park.parkCode);

  // Going to add more detail later. Leaving simple for now.
  return `
  <div class="park-card">
    <h2 class="park-name">${park.fullName}</h2>
    <image class="park-image" src="${park.images[0].url}" alt="${park.images[0].altText}">
    <p class="park-description">${park.description}</p>
  </div>
  `;
};

/* <div class="park-address">
        <p class="park-address-city">${park.addresses[0].city}</p>
        <p class="park-address-line1">${park.addresses[0].line1}</p>
        <p class="park-address-line2">${park.addresses[0].line2}</p>
        <p class="park-address-line3">${park.addresses[0].line3}</p>
        <p class="park-address-postalCode">${park.addresses[0].postalCode}</p>
      </div> */
