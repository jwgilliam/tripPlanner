import { getTrips, deleteTrip, useTrips } from "./tripProvider.js";
import tripComponent from "./trip.js";
import { getParkbyParkCode, useSelectedPark } from "../park/parkProvider.js";
import { getPlacesById, useSelectedPlaces } from "../place/placeProvider.js";


let trips = []
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

  const handleTripData = () => {
    getTrips()
      .then(() => {
        trips = useTrips()
      }).then(() => {
        trips.map((currentElement) => {
          getParkbyParkCode(currentElement.parkCode)
            .then(() => {
              currentElement.park = useSelectedPark()
            }).then(() => {
              render(trips)
            })
        })
      })
  }


  eventHub.addEventListener("showTripsButtonClicked", (event) => {
    handleTripData()
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