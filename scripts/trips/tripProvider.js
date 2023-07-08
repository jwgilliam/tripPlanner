let trips = []
let newTrip = {}

export const useNewTrip = () => {
  return newTrip
}

export const setNewTrip = (newTripsArray) => {
  newTrip = newTripsArray
}
const setTrips = (tripsArray) => {
  trips = tripsArray.slice()
}

export const useTrips = () => {
  return trips
}

export const getTrips = () => {
  return fetch("http://localhost:8088/trips")
    .then(response => response.json())
    .then(setTrips)
}

export const deleteTrip = (tripId) => {
  return fetch(`http://localhost:8088/trips/${tripId}`, {
    method: "DELETE"
  }).then(getTrips)
}

export const saveTrip = (trip) => {
  return fetch("http://localhost:8088/trips", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(trip)
  }).then(getTrips)
}

export const editTrips = tripObject => {
  return fetch(`http://localhost:8088/trips/${tripObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tripObject)
  }).then(getTrips)
}

