import settings from "../.settings.js";

let places = [];

export const usePlaces = () => {
  return places;
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

// Probably need to change this one once the trip container is built. Probablly a put route to update trip object?
export const savePlaces = (places) => {
  return fetch(`http://localhost:8088/places`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(places),
  });
};
