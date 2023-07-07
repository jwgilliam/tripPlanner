import { useNewTrip, setNewTrip, saveTrip } from "./tripProvider.js";
import { useParkCode } from "../park/parkProvider.js";

let tripConstruct = useNewTrip()
const eventHub = document.querySelector(".container")


const tripConstructor = () => {
  // build function to add data to trip object
  eventHub.addEventListener("placeListSubmitClicked", (event) => {
    tripConstruct.places = event.detail.placesArray
    console.log(tripConstruct)
  })
}


export default tripConstructor


