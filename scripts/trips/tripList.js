import { getTrips, deleteTrip, useTrips } from "./tripProvider.js";
import tripComponent from "./trip.js";

const eventHub = document.querySelector(".container")

const tripListComponent = () => {
  const render = (element) => {
    const contentTarget = document.querySelector(".trip-list")

    contentTarget.innerHTML = `
  <section class="trip_box">
  <div class="trip_cards">
     ${element
        .map((currentElement) => {
          return tripComponent(currentElement);
        })
        .join("")}
   </div>

  </section>
  `
  }

  eventHub.addEventListener("showTripsButtonClicked", (event) => {
    const trips = useTrips();
    console.table(trips)
    render(trips);



  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show-trips") {
      console.log("button clicky")
      const message = new CustomEvent("showTripsButtonClicked");
      eventHub.dispatchEvent(message);
    }
  })
}

export default tripListComponent