import { renderDetail } from "../park/park.js"
import { placeComponentDetail } from "../place/place.js"

const tripComponent = (trip) => {
  console.log(trip.updatedPlaces)
  // console.log(trip)
  return `
<section class="trip_card">
<section class="trip_header">
${renderDetail(trip.park)}
<ul class="place_list">
${trip.updatedPlaces.map((place) => {
    placeComponentDetail(place)
  })}
</ul>
<div class="park_things">things to do:${trip.thingsToDo}</div>
<div class="park_places">places: ${trip.places}</div>
</section>
</section>`
}


export default tripComponent