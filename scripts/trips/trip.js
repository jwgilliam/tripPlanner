import { renderDetail } from "../park/park.js"

const tripComponent = (trip) => {
  console.log(trip.park)
  console.log(trip)
  return `
<section class="trip_card">
<section class="trip_header">
${renderDetail(trip.park)}
<div class="park_things">things to do:${trip.thingsToDo}</div>
<div class="park_places">places: ${trip.places}</div>
</section>
</section>`
}


export default tripComponent