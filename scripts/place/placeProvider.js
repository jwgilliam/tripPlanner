import settings from "../.settings.js";

let places = [];
let selectedPlaces;

export const usePlaces = () => {
  return places;
};

export const useSelectedPlaces = () => {
  return selectedPlaces;
};

export const getPlaces = (parkCode) => {
  let key = settings.key;
  return fetch(
    `https://developer.nps.gov/api/v1/places?parkCode=${parkCode}&api_key=${key}&limit=10`
  )
    .then((response) => response.json())
    .then((response) => {
      places = response.data;
    });
};

export const getPlacesById = (placeId) => {

  let key = settings.key

  return fetch(
    `https://developer.nps.gov/api/v1/places?id=${placeId}&api_key=${key}&limit=10`
  )
    .then((response) => response.json())
    .then((response) => {
      selectedPlaces = response.data[0]
      console.log(selectedPlaces)
    });



};

// Probably need to change this one once the trip container is built. Probablly a put route to update trip object?
// export const savePlaces = (places) => {
//   return fetch(`http://localhost:8088/places/1`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(places),
//   });
// };

// export const deletePlaces = () => {
//   return fetch(`http://localhost:8088/places`, {
//     method: "DELETE",
//   });
// };
