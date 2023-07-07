const tripComponent = (trip) => {
  return `
    <section class="trip_card">
    <section class="trip_header">
    <div class="park_name">park:${trip.park}</div>
    <div class="park_things">things to do:${trip.thingsToDo}</div>
    </section>
    </section>
  `
}

export default tripComponent